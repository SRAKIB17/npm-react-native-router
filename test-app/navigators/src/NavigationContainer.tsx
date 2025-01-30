import React, { createContext, useContext, useEffect, useState } from 'react';
import { RouterProvider } from './router/RouterContext';
import { ThemeProvider } from './theming/ThemeContext';
import type { ConfigType, NavigationProviderProps, RenderRoutesType, SchemeThemeProps, ThemeColorNameProps } from './types';

export class NavigationPropertyPass {
    static config?: ConfigType;
    static basePath: string = '';
    static params: {
        [key: string]: any
    };
}

export const NavigationContext = createContext<NavigationProviderProps>({
    loadingComponent: false,
    title: "",
    setTitle: () => { },
    NavigationPropertyPass: NavigationPropertyPass,
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
    theme?: SchemeThemeProps,
    scheme?: "dark" | "default",
    basePath: string,
    children: React.ReactNode,
    config?: ConfigType
}): JSX.Element {
    NavigationPropertyPass.basePath = basePath;
    NavigationPropertyPass.config = config;
    const [title, setTitle] = useState<string>('');

    const [loadingComponent, setLoadingComponent] = useState<boolean>(false);
    const [customDynamicNavbar, setCustomDynamicNavbar] = useState<React.ReactNode>(undefined);

    return (
        <RouterProvider
            title={title}
            basePath={basePath}
            setLoadingComponent={setLoadingComponent}
        >
            <ThemeProvider
                scheme={scheme}
                theme={theme}
            >
                <NavigationContext.Provider
                    value={{
                        setTitle,
                        title,
                        NavigationPropertyPass: NavigationPropertyPass,
                        customDynamicNavbar: customDynamicNavbar,
                        setCustomDynamicNavbar: setCustomDynamicNavbar,
                        loadingComponent: loadingComponent,
                        setLoadingComponent: setLoadingComponent,
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
        loadingComponent,
        setLoadingComponent,
        setCustomDynamicNavbar,
        setTitle,
        title,
    } = useContext(NavigationContext);
    return {
        setTitle,
        title,
        customDynamicNavbar,
        loadingComponent,
        setLoadingComponent,
        setCustomDynamicNavbar
    }
}

export function useParams() {
    const { NavigationPropertyPass } = useContext(NavigationContext);
    return (NavigationPropertyPass as any).params;
}

export function useConfig() {
    const { NavigationPropertyPass } = useContext(NavigationContext);
    return NavigationPropertyPass?.config;
}

