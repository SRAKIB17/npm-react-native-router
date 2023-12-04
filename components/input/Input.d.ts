import React from 'react';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

export type InputProps = {
    autoFocus?: boolean,
    containerStyle?: ViewStyle | TextStyle | ImageStyle | object,
    style?: ViewStyle | TextStyle | ImageStyle | object,
    asset?: number,
    value: string,
    multiline?: boolean,
    setValue: any,
    defaultValue?: string,
    type?: "text" | "password"
    placeholder?: string,
    pattern?: RegExp,
    toast?: string
};

export default function Input(props: InputProps): JSX.Element;