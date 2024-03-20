import React from 'react';
import { Image, ImageStyle, Pressable, StyleSheet, TextStyle, TouchableHighlight, TouchableOpacity, View, ViewStyle } from 'react-native';
import { global_styles } from '../global';
import StyledText from '../text/StyledText';
import { ButtonProps } from '../types';
import { useTheme } from '../../navigators';


export default function PressableButton({
    text,
    disableStyle,
    onPress,
    containerStyle,
    numberOfLines,
    disabled = false, image = 0, image_url = '', imageStyle
    , textStyle
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
        <Pressable
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
                        <StyledText numberOfLines={numberOfLines} style={[global_styles.text_lg, textStyle]}>
                            {
                                text
                            }
                        </StyledText>
                    }
                </View>
            </View>
        </Pressable>
    );
};

