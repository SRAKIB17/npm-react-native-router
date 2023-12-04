import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, View, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from '../theming/ThemeContext';
import { StyledText, TouchableOpacityButton } from '../../components';
import { global_styles } from '../../components/global';
import { useRouter } from '../router/RouterContext';
import { assets_images } from '../../../assets/assets_images';

const NavbarTitleBackButton = ({
    title,
    clickAbleFunction,
    style,
    children
}: {
    title: string
    backward: string,
    clickAbleFunction?: () => void,
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
            color: 'black',
            height: 64,
            paddingLeft: 10,
            paddingRight: 10,
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
        <View style={[styles.navbar, style]}>
            {/* <Image source={{ uri: svgBase64 }} /> */}
            <View>
                <TouchableOpacityButton
                    key={title}
                    imageStyle={{
                        width: 24,
                        height: 24,
                    }}
                    onPress={() => {
                        if (clickAbleFunction) {
                            clickAbleFunction()
                        }
                        else {
                            if (history.get().length) {
                                history.back()
                            }
                            else {
                                push(basePath)
                            }
                        }
                    }}
                    image={assets_images.arrow_left_indicate}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        width: 36,
                        height: 36,
                        borderWidth: 0,
                    }}
                />
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                left: children ? 0 : -18
            }}>
                <StyledText
                    style={
                        [
                            global_styles.text_xl,
                            global_styles.font_bold,
                            {
                                color: colors.primary
                            }
                        ]
                    }
                >
                    {
                        title
                    }
                </StyledText>
            </View>
            <View>
                {
                    children
                }
            </View>

        </View>
    );
};



export default NavbarTitleBackButton;
