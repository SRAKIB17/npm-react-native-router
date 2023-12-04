import React from 'react';
import {
    DrawerLayoutAndroid,
} from 'react-native';

type drawerContainer = {
    drawerWidth?: number,
    drawerPosition?: "left" | "right",
    renderNavigationView?: JSX.Element | undefined
};

export type DrawerProps = {
    drawerRef: DrawerLayoutAndroid,
    drawerConfig?: drawerContainer,
    setDrawerConfig: React.Dispatch<React.SetStateAction<drawerContainer>>
}

type Props = {
    config?: drawerContainer,
    children?: React.ReactNode
}

export const userDrawer: () => DrawerProps;

export default function DrawerContainer(props: Props): JSX.Element;
