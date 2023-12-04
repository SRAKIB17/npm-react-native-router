import React from 'react';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

export type ButtonProps = {
    text?: string | number,
    onPress?: () => void,
    disableStyle?: ViewStyle | TextStyle | ImageStyle | object,
    containerStyle?: object | any;
    disabled?: boolean,
    image?: any,
    image_url?: any,
    imageStyle?: ViewStyle | TextStyle | ImageStyle | object,
    textStyle?: ViewStyle | TextStyle | ImageStyle | object,
};

export default function TouchableHighlightButton(props: ButtonProps): JSX.Element;
