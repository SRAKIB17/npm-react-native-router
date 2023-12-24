import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../theming/ThemeContext';

const MainNavbar = ({ title, children }) => {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        navbar: {
            display: 'flex',
            backgroundColor: colors.primary,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            color: 'black',
            height: 64,
            paddingHorizontal: 10,
            alignContent: 'space-between',

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 1.00,
            elevation: 3,
        },
        navbar_button: {
            padding: 8,
        },
    });

    return (
        <View style={styles.navbar}>
            <View>
                <Text style={{
                    fontSize: 24,
                    fontWeight: '600',
                    color: colors.primary_text
                }}>
                    {title}
                </Text>
            </View>
            <View>
                {
                    children
                }
            </View>
        </View>
    );
};

export default MainNavbar;
