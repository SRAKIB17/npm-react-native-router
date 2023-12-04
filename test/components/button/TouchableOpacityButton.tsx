import React from 'react';
import { Image, ImageStyle, Pressable, StyleSheet, TextStyle, TouchableHighlight, TouchableOpacity, View, ViewStyle } from 'react-native';
import StyledText from '../text/StyledText';
import { global_styles } from '../global';
import { useTheme } from '../../navigators/theming/ThemeContext';
import { ButtonProps } from '../types';

export default function TouchableOpacityButton({
    text,
    onPress,
    disableStyle,
    containerStyle,
    disabled = false,
    image = 0,
    image_url = '',
    imageStyle,
    textStyle
}: ButtonProps) {
    const { colors } = useTheme()
    const styles = StyleSheet.create({
        root: {
            backgroundColor: colors.secondary,
            height: 35,
            display: "flex",
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.border,
        },
    })

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
        >
            <View style={[
                styles.root,
                {
                    backgroundColor: (
                        disabled ?
                            colors.grey
                            :
                            styles.root.backgroundColor
                    )
                },
                containerStyle,
                (disabled ? disableStyle : containerStyle)
            ]}>
                <View>
                    {
                        Boolean(image) &&
                        <Image
                            source={image}
                            style={[{ width: 20, height: 20, objectFit: 'contain' }, imageStyle]}
                        />
                    }
                    {
                        Boolean(image_url) &&
                        <Image
                            source={{
                                uri: image_url,
                                cache: 'force-cache'
                            }}
                            style={[{ width: 20, height: 20, objectFit: 'contain' }, imageStyle]}
                        />
                    }
                </View>
                <View>
                    {
                        Boolean(text) &&
                        <StyledText style={[global_styles.text_lg, textStyle]}>
                            {
                                text
                            }
                        </StyledText>
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
};

