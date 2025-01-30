import React from "react"
import { DrawerLayoutAndroid } from 'react-native'
import { NavigationPropertyPass } from "../NavigationContainer"


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



