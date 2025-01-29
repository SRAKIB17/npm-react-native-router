import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

import { Alert, BackHandler } from 'react-native';
import { RouterProps } from '../types/types';

const RouterContext = createContext<RouterProps>({
    hash: "",
    hostname: "",
    origin: "",
    title: "",
    password: "",
    path: "",
    basePath: "",
    port: "",
    protocol: "",
    query: {},
    username: "",
    asPath: "",
    history: {
        back() {
        },
        get() {
            return []
        },
    },
    push: async (url, option) => { },
});

type Props = {
    basePath: string;
    children: React.ReactNode;
    setLoadingComponent: React.Dispatch<React.SetStateAction<boolean>>,
    title: string,
};

export function RouterProvider({ basePath: basePath, children, setLoadingComponent, title }: Props) {
    const navigationStack = useRef<string[]>([]); // Manually manage navigation stack

    const parseBasePath = urlParse({ url: basePath }).path || ''
    const [screen, setScreen] = useState(parseBasePath);
    const locationParse = urlParse({ url: screen })

    class history {
        back = async () => {
            if (navigationStack.current?.length >= 1) {
                setLoadingComponent(true);
                navigationStack.current.pop()
                setScreen(navigationStack.current[navigationStack?.current?.length - 1] || parseBasePath)
                setLoadingComponent(false)
            }
            else {
                setLoadingComponent(true)
                setScreen(parseBasePath)
                setLoadingComponent(false)
            }
        }
        get() {
            return navigationStack.current
        }
    }

    async function push(url: string,
        option: {
            title?: string,
        }) {
        setLoadingComponent(true)
        setScreen(url)
        navigationStack.current.push(url)
        setLoadingComponent(false)
    }

    const historyConstructor: any = new history()
    const send_date: any = {
        basePath: parseBasePath,
        title: title,
        push,
        history: historyConstructor,
        ...locationParse
    }


    useEffect(() => {
        const backAction = () => {
            if (navigationStack.current.length >= 1) {
                // If there are screens in the navigation stack, navigate back manually
                // navigationStack.current.pop(); // Remove current screen
                // console.log(navigationStack.current.pop(), 'sfsdlfsdlf')
                historyConstructor?.back()
                return true; // Return true to prevent default back button behavior
            } else {
                // If there are no more screens in the stack, show an exit confirmation alert
                Alert.alert(
                    'Exit App',
                    'Do you want to exit the app?',
                    [
                        { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                        { text: 'OK', onPress: () => BackHandler.exitApp() },
                    ],
                    { cancelable: false }
                );
                return true; // Return true to prevent default back button behavior
            }
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, [navigationStack, screen]);

    return (
        <RouterContext.Provider value={send_date}>
            {children}
        </RouterContext.Provider>
    );

}

export const urlParse = ({ url = "" }: { url: string }) => {

    const queryRegex = /\?([^#]*)/,
        authRegex = /\/\/(?:([^:]+)(?::([^@]+)))?/,
        pathnameRegex = /(?:^[^:]+:\/\/[^/]+)?(\/[^?#]*)/,
        portRegex = /:(\d+)/,
        hashRegex = /#([^]*)/,
        protocolRegex = /^(?:([^:]+):\/\/)?(?:([^:]+))/,
        urlRegex = /^(?:(\w+):\/\/)?(?:([^:]+)(?::([^@]+))?@)?([a-zA-Z0-9.-]+|(?:\d{1,3}\.){3}\d{1,3}|\[[a-fA-F0-9:]+\])(?::(\d+))?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/;

    function query() {
        // Extract the query part of the URL
        const queryMatch = url.match(queryRegex);
        if (queryMatch && queryMatch[1]) {
            const queryPart = decodeURIComponent(queryMatch[1]);
            // Split the query into individual key-value pairs
            const keyValuePairs = queryPart.split('&')
            const paramsObj: Array<{ [key: string]: any }> = keyValuePairs?.map(keyValue => {
                const [key, value] = keyValue.split('=');
                return {
                    [key]: value
                }
            });
            return paramsObj.reduce(function (total: any, value: any) {
                return { ...total, ...value }
            }, {});

        } else {
            return {}
        }
    }

    const matches = url.match(urlRegex);
    const hashMatch = url.match(hashRegex);
    const hash = hashMatch && hashMatch[1] || null;
    const protocol = matches && matches[1] || null;
    const username = matches && matches[2] || null;
    const password = matches && matches[3] || null;
    const hostname = matches && matches[4] || null;
    const port = matches && matches[5] || null;

    const path = url?.match(pathnameRegex)?.[1] || null;
    const origin = matches && (
        hostname ?
            (
                protocol ?
                    `${protocol}://${hostname}${port ? `:${port}` : ""}`
                    : `${hostname}${port ? `:${port}` : ""}`
            )
            : null
    ) || null

    return {
        path,
        hash,
        protocol,
        origin,
        username,
        password,
        hostname,
        href: url,
        port,
        query: query(),
    }
}

export function useRouter() {
    const location = useContext(RouterContext);
    return location;
}