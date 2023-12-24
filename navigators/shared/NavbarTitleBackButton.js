import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacityButton, StyledText } from '../../components';
import { useTheme } from '../theming/ThemeContext';
import { useRouter } from '../router/RouterContext';
import { assets_images } from '../../assets/assets_images';
import { global_styles } from '../../components/global';

const NavbarTitleBackButton = ({
    title,
    clickAbleFunction,
    style,
    children
}) => {
    const { push, history, basePath } = useRouter();

    const { colors } = useTheme();

    const styles = StyleSheet.create({
        navbar: {
            paddingHorizontal: 20,
            display: 'flex',
            backgroundColor: colors.primary,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            color: 'black',
            height: 64,
            paddingLeft: 10,
            paddingRight: 10,
            alignContent: 'space-between',

            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 1.0,
            elevation: 3,
        },
        navbar_button: {
            padding: 8,
        },
    });

    return (
        <View style={[styles.navbar, style]}>
            <View>
                <TouchableOpacityButton
                    key={title}
                    imageStyle={{
                        width: 24,
                        height: 24,
                    }}
                    onPress={() => {
                        if (clickAbleFunction) {
                            clickAbleFunction();
                        } else {
                            if (history.get().length) {
                                history.back();
                            } else {
                                push(basePath);
                            }
                        }
                    }}
                    image={assets_images.arrow_left_indicate_light}
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
                    style={[
                        global_styles.text_xl,
                        global_styles.font_bold,
                        {
                            color: colors.primary_text,
                        },
                    ]}
                >
                    {title}
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
