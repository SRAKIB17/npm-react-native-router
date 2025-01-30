import React, { createContext, useContext, useState } from 'react';
import { RouterProvider } from './router/RouterContext';
import { ThemeProvider } from './theming/ThemeContext';
import type { AppConfig, NavigationProviderProps, SchemeThemeProps } from './types';

export class NavigationPropertyPass {
    static config?: AppConfig;
    static basePath: string = '';
    static params: {
        [key: string]: any
    };
}

export const NavigationContext = createContext<NavigationProviderProps>({
    isLoading: false,
    title: "",
    loadingScreen: false,
    setLoadingScreen: () => { },
    setTitle: () => { },
    NavigationPropertyPass: NavigationPropertyPass,
    setLoading: () => { },
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
    theme?: SchemeThemeProps,
    scheme?: "dark" | "default",
    basePath: string,
    children: React.ReactNode,
    config?: AppConfig
}): JSX.Element {

    NavigationPropertyPass.basePath = basePath;
    NavigationPropertyPass.config = config;
    const [title, setTitle] = useState<string>('');

    const [isLoading, setLoading] = useState<boolean>(false);
    const [loadingScreen, setLoadingScreen] = useState<boolean>(false);
    const [customDynamicNavbar, setCustomDynamicNavbar] = useState<React.ReactNode>(undefined);


    return (
        <RouterProvider
            title={title}
            basePath={basePath}
            setLoadingScreen={setLoadingScreen}
        >
            <ThemeProvider
                scheme={scheme}
                theme={theme}
            >
                <NavigationContext.Provider
                    value={{
                        setTitle,
                        loadingScreen,
                        setLoadingScreen,
                        title,
                        isLoading,
                        setLoading: setLoading,
                        NavigationPropertyPass: NavigationPropertyPass,
                        customDynamicNavbar: customDynamicNavbar,
                        setCustomDynamicNavbar: setCustomDynamicNavbar,
                    }}
                >
                    {
                        children
                    }
                </NavigationContext.Provider>
            </ThemeProvider>
        </RouterProvider>
    );
}


export function useNavigation() {
    const {
        customDynamicNavbar,
        isLoading,
        setLoading,
        setCustomDynamicNavbar,
        setTitle,
        title,
    } = useContext(NavigationContext);
    return {
        setTitle,
        title,
        customDynamicNavbar,
        isLoading,
        setLoading,
        setCustomDynamicNavbar
    }
}

export function useParams() {
    const { NavigationPropertyPass } = useContext(NavigationContext);
    return (NavigationPropertyPass as any).params;
}


