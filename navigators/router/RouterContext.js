import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { BackHandler } from 'react-native';

const RouterContext = createContext({
    hash: '',
    hostname: '',
    origin: '',
    title: '',
    password: '',
    path: '',
    basePath: '',
    port: '',
    protocol: '',
    query: {},
    username: '',
    asPath: '',
    history: {
        back() { },
        get() {
            return [];
        },
    },
    push: async (url, option) => { },
});

const RouterProvider = ({ basePath, children, setLoadingComponent, title }) => {
    const navigationStack = useRef([]); // Manually manage navigation stack

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

    async function push(url, option) {
        setLoadingComponent(true)
        setScreen(url)
        navigationStack.current.push(url)
        setLoadingComponent(false)
    }

    const historyConstructor = new history()
    const send_date = {
        basePath: parseBasePath,
        title: title,
        push,
        history: historyConstructor,
        ...locationParse
    }


    useEffect(() => {
        const backAction = () => {
            if (navigationStack.current.length >= 1) {
                historyConstructor?.back()
                return true;
            } else {
                Alert.alert(
                    'Exit App',
                    'Do you want to exit the app?',
                    [
                        { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                        { text: 'OK', onPress: () => BackHandler.exitApp() },
                    ],
                    { cancelable: false }
                );
                return true;
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
};

const urlParse = ({ url = '' }) => {
    const queryRegex = /\?([^#]*)/;
    const authRegex = /\/\/(?:([^:]+)(?::([^@]+)))?/;
    const pathnameRegex = /(?:^[^:]+:\/\/[^/]+)?(\/[^?#]*)/;
    const portRegex = /:(\d+)/;
    const hashRegex = /#([^]*)/;
    const protocolRegex = /^(?:([^:]+):\/\/)?(?:([^:]+))/;
    const urlRegex = /^(?:(\w+):\/\/)?(?:([^:]+)(?::([^@]+))?@)?([a-zA-Z0-9.-]+|(?:\d{1,3}\.){3}\d{1,3}|\[[a-fA-F0-9:]+\])(?::(\d+))?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/;

    function query() {
        const queryMatch = url.match(queryRegex);
        if (queryMatch && queryMatch[1]) {
            const queryPart = decodeURIComponent(queryMatch[1]);
            const keyValuePairs = queryPart.split('&');
            const queryParameters = keyValuePairs.reduce((paramsObj, keyValue) => {
                const [key, value] = keyValue.split('=');
                paramsObj[key] = value;
                return paramsObj;
            }, {});
            return queryParameters;
        } else {
            return {};
        }
    }

    const matches = url.match(urlRegex);
    const hashMatch = url.match(hashRegex);
    const hash = (hashMatch && hashMatch[1]) || null;
    const protocol = (matches && matches[1]) || null;
    const username = (matches && matches[2]) || null;
    const password = (matches && matches[3]) || null;
    const hostname = (matches && matches[4]) || null;
    const port = (matches && matches[5]) || null;
    const path = url.match(pathnameRegex)?.[1] || null;
    const origin =
        (matches &&
            (hostname
                ? protocol
                    ? `${protocol}://${hostname}${port ? `:${port}` : ''}`
                    : `${hostname}${port ? `:${port}` : ''}`
                : null)) ||
        null;
    return {
        path,
        asPath: url,
        hash,
        protocol,
        origin,
        username,
        password,
        hostname,
        port,
        query: query(),
    };
};

export function useRouter() {
    const location = useContext(RouterContext);
    return location;
}

export { RouterProvider };

