import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Alert, BackHandler } from 'react-native';
import type { RouterProps } from '../types';
import { urlParse } from '../utils/url';
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
    const parseBasePath = urlParse(basePath).path || ''
    const [screen, setScreen] = useState(parseBasePath);
    const locationParse = urlParse(screen)

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

    async function push(path: string,
        option: {
            title?: string,
        }) {
        // setLoadingComponent(true)
        setScreen(path)
        navigationStack.current.push(path)
        // setLoadingComponent(false)
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


export function useRouter() {

    const location = useContext(RouterContext);
    return location;
}