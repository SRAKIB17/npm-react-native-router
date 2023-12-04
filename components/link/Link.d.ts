import React from 'react';
import { ImageStyle, ViewStyle, TextStyle } from 'react-native'

export type LinkProps = {
    href: string,
    children: React.ReactNode
    style?: object | ImageStyle | ViewStyle | TextStyle
};

export default function Link(props: LinkProps): JSX.Element;
