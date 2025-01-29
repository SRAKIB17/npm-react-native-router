import React, { createContext, useContext, useRef, useState } from 'react';
import { ParamsProvider } from './params/ParamsContext';
import { RouterProvider } from './router/RouterContext';
import { ThemeProvider } from './theming/ThemeContext';
import { NavigationProviderProps, ThemeColorNameProps } from './types/types';

export interface NavigationContainerPropsType {
    setAllParams: React.Dispatch<React.SetStateAction<{}>>,
    params: {
        [key: string]: any
    },
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    config?: {
        homeNavbar?: React.ReactNode | React.JSX.Element,
        navbar?: React.ReactNode | React.JSX.Element,
        footer?: React.ReactNode | React.JSX.Element,
    }
}

const RenderContext = createContext<NavigationContainerPropsType>({
    setAllParams: () => { },
    setTitle: () => { },
    config: {},
    params: {},
})

const NavigationContext = createContext<NavigationProviderProps>({
    loadingComponent: false,
    setLoadingComponent: () => { },
    customDynamicNavbar: undefined,
    setCustomDynamicNavbar: () => { },
})

export default function NavigationContainer({
    children,
    basePath,
    theme,
    config = {},
    scheme = 'default',
}: {
    theme?: {
        dark?: ThemeColorNameProps,
        default?: ThemeColorNameProps,
    },
    scheme?: "dark" | "default",
    basePath: string,
    children: React.ReactNode,
    config?: {
        homeNavbar?: React.ReactNode | React.JSX.Element,
        navbar?: React.ReactNode | React.JSX.Element,
        footer?: React.ReactNode | React.JSX.Element,
    }
}): JSX.Element {
    const [title, setTitle] = useState('');
    const [params, setAllParams] = useState<{
        [key: string]: string | any
    }>({});
    const [loadingComponent, setLoadingComponent] = useState<boolean>(false);
    const [customDynamicNavbar, setCustomDynamicNavbar] = useState<React.ReactNode>(undefined)
    const navigationStack = useRef([]); // Manually manage navigation stack

    return (
        <NavigationContext.Provider
            value={{
                customDynamicNavbar: customDynamicNavbar,
                setCustomDynamicNavbar: setCustomDynamicNavbar,
                loadingComponent: loadingComponent,
                setLoadingComponent: setLoadingComponent,
            }}
        >
            <RouterProvider
                title={title}
                basePath={basePath}
                setLoadingComponent={setLoadingComponent}
            >
                <ThemeProvider
                    scheme={scheme}
                    theme={theme}
                >
                    <RenderContext.Provider value={{
                        params: params,
                        setTitle: setTitle,
                        config: config,
                        setAllParams: setAllParams,
                    }}>
                        <ParamsProvider value={params}>
                            {
                                children
                            }
                        </ParamsProvider>
                    </RenderContext.Provider>
                </ThemeProvider>
            </RouterProvider>
        </NavigationContext.Provider>
    );
}

export function userRenderContext() {
    return useContext(RenderContext)
}

export function useNavigation() {
    const {
        customDynamicNavbar,
        loadingComponent,
        setLoadingComponent,
        setCustomDynamicNavbar
    } = useContext(NavigationContext);
    return {
        customDynamicNavbar,
        loadingComponent,
        setLoadingComponent,
        setCustomDynamicNavbar
    }
}