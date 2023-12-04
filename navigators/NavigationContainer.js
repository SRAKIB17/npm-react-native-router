import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from './theming/ThemeContext';
import { ParamsProvider } from './params/ParamsContext';
import { RouterProvider } from './router/RouterContext';

const RenderContext = createContext({
    setAllParams: () => { },
    setTitle: () => { },
    config: {},
    params: {},
});

const NavigationContext = createContext({
    loadingComponent: false,
    setLoadingComponent: () => { },
    customDynamicNavbar: undefined,
    setCustomDynamicNavbar: () => { },
});

export default function NavigationContainer({
    children,
    basePath,
    theme,
    config = {},
    scheme = 'default',
}) {
    const [title, setTitle] = useState('');
    const [params, setAllParams] = useState({});
    const [loadingComponent, setLoadingComponent] = useState(false);
    const [customDynamicNavbar, setCustomDynamicNavbar] = useState(undefined);

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
                basePath={basePath}
                title={title}
                setLoadingComponent={setLoadingComponent}
            >
                <ThemeProvider scheme={scheme} theme={theme}>
                    <RenderContext.Provider value={{
                        params: params,
                        setTitle: setTitle,
                        config: config,
                        setAllParams: setAllParams,
                    }}>
                        <ParamsProvider value={params}>
                            {children}
                        </ParamsProvider>
                    </RenderContext.Provider>
                </ThemeProvider>
            </RouterProvider>
        </NavigationContext.Provider>
    );
}

export function userRenderContext() {
    return useContext(RenderContext);
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
    };
}
