import React from 'react';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

export type StyledTextProps = {
    children: React.ReactNode,
    style?: ViewStyle | TextStyle | ImageStyle | object,
    numberOfLines?: number
}

export default function StyledText(props: StyleTextProps): JSX.Element;
