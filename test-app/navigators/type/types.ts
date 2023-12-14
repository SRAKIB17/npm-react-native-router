import React from "react"
import { DrawerLayoutAndroid } from 'react-native'
export type RenderScreenProps = {
    path: string,
    screen: (props: any) => React.ReactNode | React.JSX.Element,
    title: string,
    navbar?: React.JSX.Element,
    footer?: React.JSX.Element,
    isPrivate?: boolean,
    privateState?: boolean,
    hasFooter?: boolean,
    hasNavbar?: boolean,
    drawerConfig?: {
        drawerWidth?: number,
        drawerPosition?: "left" | "right" | undefined,
        renderNavigationView?: React.JSX.Element | undefined
    }
}

type DrawerContainerProps = {
    drawerWidth?: number,
    drawerPosition?: "left" | "right" | undefined,
    renderNavigationView?: React.JSX.Element | undefined
};
export type DrawerProps = {
    drawerRef: DrawerLayoutAndroid,
    drawerConfig?: DrawerContainerProps,
    setDrawerConfig: React.Dispatch<React.SetStateAction<DrawerContainerProps>>
}

export type ParamsProps = {
    [key: string]: string | number
}

export type NavigationProviderProps = {
    loadingComponent: boolean,
    setLoadingComponent: React.Dispatch<React.SetStateAction<boolean>>,
    customDynamicNavbar: React.ReactNode,
    setCustomDynamicNavbar: React.Dispatch<React.SetStateAction<React.ReactNode>>,
}
export interface ScreenProps extends NavigationProviderProps {
    params: {
        [key: string]: any
    }
}

export type RouterProps = {
    path: string | null;
    basePath: string,
    hash: string | null;
    title: string | null,
    protocol: string | null;
    asPath: string,
    origin: string | null;
    username: string | null;
    password: string | null;
    hostname: string | null;
    port: string | null;
    query: {
        [key: string]: any
    };
    push: (url: string, option?: {
        title?: string;
    }) => Promise<void>,
    history: {
        back: () => void,
        get: () => string[]
    }
}



export type ThemeColorNameProps = {
    primary?: string,
    background?: string,
    card?: string,
    text?: string,
    link?: string,
    border?: string,
    notification?: string,
    transparent?: string,
    primary_text?: string,
    secondary?: string,
    secondary_text?: string,
    success?: string,
    success_text?: string,
    danger?: string,
    danger_text?: string,
    warning?: string,
    warning_text?: string,
    info?: string,
    info_text?: string,
    grey?: string,
    light_grey?: string,
    dark_grey?: string,
}

export type ThemeProps = {
    dark: boolean,
    colors: ThemeColorNameProps,
}