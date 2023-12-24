import React from 'react';
import { Image, StyleSheet, Text, View, } from 'react-native';
import { useTheme } from '../theming/ThemeContext';
import { assets_images } from '../../assets/assets_images';
import TouchableHighlightButton from '../../components/button/TouchableHighlightButton';

const MainNavbar = ({
    title,
    children
}: {
    children?: React.ReactNode,
    title: string
}) => {
    const { colors } = useTheme()
    const styles = StyleSheet.create({
        navbar: {
            display: 'flex',
            backgroundColor: colors.card,
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

        button: {
            alignItems: 'center',
            backgroundColor: colors.card,
            padding: 10,
        },
    });


    return (
        <View style={styles.navbar}>

            <View>
                <Text style={{
                    fontSize: 24,
                    fontWeight: '600',
                    color: colors.primary
                }}>
                    {
                        title
                    }
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
