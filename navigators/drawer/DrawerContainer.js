import React, { useContext, useRef, createContext, useState, useEffect } from 'react';
import {
    DrawerLayoutAndroid,
    ScrollView
} from 'react-native';

const DrawerContext = createContext({
    drawerRef: { current: null },
    drawerConfig: {}
});

const DrawerContainer = ({
    children,
    config = {
        drawerWidth: 300,
        drawerPosition: 'left',
        renderNavigationView: undefined
    },
}) => {
    const [drawerConfig, setDrawerConfig] = useState({});
    const drawerRef = useRef(null);

    const navigationView = () => (
        <ScrollView>
            {drawerConfig.renderNavigationView}
        </ScrollView>
    );

    useEffect(() => {
        setDrawerConfig(config);
        return () => {
        };
    }, []);

    return (
        <DrawerContext.Provider value={{
            drawerRef: drawerRef,
            drawerConfig: drawerConfig,
            setDrawerConfig: setDrawerConfig
        }}>
            {typeof drawerConfig?.renderNavigationView === 'object' ? (
                <DrawerLayoutAndroid
                    ref={drawerRef}
                    drawerWidth={drawerConfig?.drawerWidth}
                    drawerPosition={drawerConfig?.drawerPosition}
                    renderNavigationView={navigationView}
                >
                    {children}
                </DrawerLayoutAndroid>
            ) : (
                <>
                    {children}
                </>
            )}
        </DrawerContext.Provider>
    );
};

export function userDrawer() {
    const drawer = useContext(DrawerContext);
    return drawer;
}

export default DrawerContainer;
