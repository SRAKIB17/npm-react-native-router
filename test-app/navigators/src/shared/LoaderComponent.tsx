import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet, Modal } from 'react-native';
import { useTheme } from '../theming/ThemeContext';

const LoadingOverlay = ({ message = "Loading...", opacity = 0.5, rgb = '1, 1, 22' }) => {
    const { colors } = useTheme();

    return (
        <Modal transparent animationType="fade" visible={true}>
            <View style={[styles.container, { backgroundColor: `rgba(${rgb}, ${opacity})` }]}>
                {/* Loading Spinner */}
                <ActivityIndicator
                    size="large"
                    animating={true}
                    color={colors.primary}
                />
                {/* Optional Loading Message */}
                <Text style={[styles.loadingText, { color: colors.primary }]}>
                    {message}
                </Text>
            </View>
        </Modal>
    );
};

export const LoadingScreen = ({ message = "Loading..." }) => {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {/* Loading Spinner */}
            <ActivityIndicator
                size="large"
                animating={true}
                color={colors.primary}
            />
            {/* Optional Loading Message */}
            <Text style={[styles.loadingText, { color: colors.primary }]}>
                {message}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent', // Or use theme background color
    },
    loadingText: {
        marginTop: 16,
        fontSize: 16,
        fontWeight: '500',
    },
});

export default LoadingOverlay;