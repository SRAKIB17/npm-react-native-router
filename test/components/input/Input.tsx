import React, { useState } from 'react';
import { Image, ImageBackground, ImageStyle, StyleSheet, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import Toast from '../toast/Toast';
import { global_styles } from '../global';
import StyledText from '../text/StyledText';
import { useTheme } from '../../navigators/theming/ThemeContext';
import { InputProps } from '../types';

export default function Input({
    asset,
    type = "text",
    defaultValue = '',
    value,
    setValue = () => { },
    placeholder = 'Write something..',
    pattern,
    containerStyle,
    style = {},
    toast = 'Please input valid info',
    multiline = false,
    autoFocus = false,
}
    :
    InputProps) {

    const [error, setError] = useState('')
    const [inputValue, setInputValue] = useState('')

    const onChangeTextHandle = (text: string) => {
        setError('')
        if (pattern) {
            if (!pattern?.test(text?.trim()) && pattern) {
                setError(toast);
            }
            else {
                setError('');
            }
        }
        setValue(text?.trim())
        setInputValue(text?.trim())
    }
    const { colors } = useTheme()
    const onBlurHandle = () => {
        if (!pattern?.test(inputValue) && pattern) {
            setValue('')
            Toast({ text: toast })
        }
        else {
            setValue(inputValue)
            setError('')
        }
    }

    const styles = StyleSheet.create({
        input: {
            backgroundColor: colors.card,
            borderColor: colors.border,
            color: colors.text,
            borderRadius: 4,
            borderWidth: 1,
            paddingLeft: 16,
            flex: 1,
            height: 48,
        },
    });
    return (
        <>
            {
                Boolean(error) &&
                <View
                    style={{ paddingVertical: 3 }}
                >
                    <StyledText style={[{ color: colors.danger }, global_styles.text_xs]}>
                        {error}
                    </StyledText>
                </View>
            }
            <View style={[containerStyle]}>

                <View
                    style={(asset ? [
                        styles.input,
                        {
                            display: "flex",
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 4,
                        },
                        style
                    ] : [{ height: 48 }, style])}
                >
                    {
                        asset ?
                            <Image
                                source={asset}
                                style={{
                                    width: 20,
                                    height: 20,
                                    objectFit: 'contain',
                                    position: 'absolute',
                                    left: 6,
                                    marginLeft: 4
                                }}
                            />
                            :
                            <></>
                    }

                    <TextInput
                        autoFocus={autoFocus}
                        multiline={multiline}
                        onBlur={(text) => onBlurHandle()}
                        defaultValue={defaultValue}
                        placeholderTextColor={'grey'}
                        onChangeText={onChangeTextHandle}
                        secureTextEntry={type == 'password'}
                        value={inputValue}
                        placeholder={placeholder}
                        style={([(asset ? {
                            flex: 1,
                            paddingLeft: 20,
                            fontSize: 16,
                            color: colors?.text,
                        } : { ...styles.input, ...style }
                        )])}
                    />
                </View>
            </View>
        </>
    );
}
