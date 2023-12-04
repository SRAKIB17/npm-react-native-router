import React from 'react';
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

export type NavigationContainerProps = {
    theme?: {
        dark?: ThemeColorNameProps,
        default?: ThemeColorNameProps,
    },
    config?: {
        homeNavbar?: React.ReactNode | React.JSX.Element,
        navbar?: React.ReactNode | React.JSX.Element,
        footer?: React.ReactNode | React.JSX.Element,
    },
    scheme?: "dark" | "default",
    basePath: string,
    children?: React.ReactNode
}

// export type NavigationContainerProps = {
//     loadingComponent: boolean,
//     setLoadingComponent: React.Dispatch<React.SetStateAction<boolean>>,
//     customDynamicNavbar: React.ReactNode,
//     setCustomDynamicNavbar: React.Dispatch<React.SetStateAction<React.ReactNode>>,
// }

// export type NavigationContainerPropsType = {
//     setAllParams: React.Dispatch<React.SetStateAction<{}>>,
//     params: {
//         [key: string]: any
//     }
// }

export type useNavigationProps = {
    loadingComponent: boolean;
    setLoadingComponent: (loading: boolean) => void;
    customDynamicNavbar: React.ReactNode | undefined;
    setCustomDynamicNavbar: (navbar: React.ReactNode | undefined) => void;
};

export const useNavigation: () => useNavigationProps;


export type NavigationContainerContext = {
    params: { [key: string]: string | any },
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setAllParams: (params: { [key: string]: string | any }) => void,
    config?: {
        homeNavbar?: React.ReactNode | React.JSX.Element,
        navbar?: React.ReactNode | React.JSX.Element,
        footer?: React.ReactNode | React.JSX.Element,
    }
}
export const userRenderContext: () => NavigationContainerContext;

export default function NavigationContainer(props: NavigationContainerProps): JSX.Element;
