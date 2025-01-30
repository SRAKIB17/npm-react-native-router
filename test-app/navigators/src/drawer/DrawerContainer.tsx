import React, { useContext, useRef, createContext, useState, useEffect } from 'react';
import {
    DrawerLayoutAndroid,
    ScrollView,
} from 'react-native';

import { DrawerProps } from '../types/types';
type drawerContainer = {
    drawerWidth?: number,
    drawerPosition?: "left" | "right" | undefined,
    renderNavigationView?: JSX.Element | undefined
};

const DrawerContext = createContext<DrawerProps | any>({
    drawerRef: { current: null },
    drawerConfig: {}
})


const DrawerContainer = ({
    children,
    config = {
        drawerWidth: 300,
        drawerPosition: 'left',
        renderNavigationView: undefined
    },
}: { config?: drawerContainer, children: React.ReactNode }): JSX.Element => {

    const [drawerConfig, setDrawerConfig] = useState<drawerContainer>({})
    const drawerRef = useRef<DrawerLayoutAndroid>(null);

    const navigationView = () => (
        <ScrollView>
            {
                drawerConfig.renderNavigationView
            }
        </ScrollView>
    );

    useEffect(() => {
        setDrawerConfig(config)
        return () => {
        }
    }, [])

    return (
        <DrawerContext.Provider value={{
            drawerRef: drawerRef,
            drawerConfig: drawerConfig,
            setDrawerConfig: setDrawerConfig
        }}>
            {
                typeof (drawerConfig?.renderNavigationView) == 'object' ?
                    <DrawerLayoutAndroid
                        ref={drawerRef}
                        drawerWidth={drawerConfig?.drawerWidth}
                        drawerPosition={drawerConfig?.drawerPosition}
                        renderNavigationView={navigationView}>
                        {
                            children
                        }
                    </DrawerLayoutAndroid>
                    :
                    <>
                        {
                            children
                        }
                    </>
            }
        </DrawerContext.Provider>

    );
};

export function userDrawer() {
    const drawer: DrawerProps = useContext(DrawerContext)
    return drawer
}

export default DrawerContainer;