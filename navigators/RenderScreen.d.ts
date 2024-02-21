import React from 'react';

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

export type ScreenProps = {
    loadingComponent: boolean,
    setTitle: (title: string) => void,
    setLoadingComponent: React.Dispatch<React.SetStateAction<boolean>>,
    customDynamicNavbar: React.ReactNode,
    setCustomDynamicNavbar: React.Dispatch<React.SetStateAction<React.ReactNode>>,
    params: {
        [key: string]: any
    }
}

declare type arrayProps = {
    children: RenderScreenProps;
};


declare class RenderScreen {
    Render({
        children
    }: {
        children: { props: RenderScreenProps } | arrayProps[] | any;
    }): JSX.Element;

    screen(props: RenderScreenProps): JSX.Element;
}



export default RenderScreen;
