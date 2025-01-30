import React from 'react';
import { Image, ImageStyle, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useRouter } from '../router/RouterContext';
import { useTheme } from '../theming/ThemeContext';
import { assets_images } from '../../assets/assets_images';

const HeaderBar = ({
    title,
    onClick,
    style,
    children
}: {
    title: string
    onClick?: () => void,
    children?: React.ReactNode,
    style?: ViewStyle | TextStyle | ImageStyle | object,
}) => {
    const { push, history, basePath } = useRouter()
    const { colors, dark } = useTheme()
    const styles = StyleSheet.create({
        navbar: {
            paddingHorizontal: 20,
            display: 'flex',
            backgroundColor: colors.card,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            color: colors.text,
            height: 64,
            paddingLeft: 10,
            paddingRight: 10,
            alignContent: 'center',

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 1.00,
            elevation: 3,
        }
    });

    return (
        <View style={[styles.navbar, style]}>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: "center"
            }}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <TouchableOpacity style={{
                        height: 35,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                    }}
                        onPress={() => {
                            if (onClick) {
                                onClick()
                            }
                            else {
                                if (history.get().length) {
                                    history.back()
                                }
                                else {
                                    push(basePath)
                                }
                            }
                        }}>
                        <Image
                            source={assets_images.dropdown_arrow_grey}
                            style={{
                                objectFit: 'contain',
                                transform: [
                                    { rotate: '90deg' }
                                ],
                                width: 24,
                                height: 24,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: 'center'
                }}>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "700",
                            color: colors.primary
                        }}
                    >
                        {
                            title
                        }
                    </Text>
                </View>
                {
                    children ?
                        <View style={{
                            alignItems: 'flex-end',
                            flex: 1
                        }}>
                            {
                                children
                            }
                        </View>
                        :
                        <View style={{ flex: 1 }}>

                        </View>
                }
            </View>
        </View>
    );
};



export default HeaderBar;
