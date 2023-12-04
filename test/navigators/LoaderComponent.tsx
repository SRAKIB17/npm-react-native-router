import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Animated, Easing } from 'react-native';
import { useTheme } from './theming/ThemeContext';

const LoaderComponent = () => {
    const { colors } = useTheme()
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ActivityIndicator
                size="large"
                animating={true}
                color={colors.primary}
            />
        </View>
    );
};

export default LoaderComponent;
