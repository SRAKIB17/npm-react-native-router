import { FC } from 'react';
import { TextStyle, ViewStyle } from 'react-native';

type FooterMenuItem = {
    dark: string;
    title: string;
    link: string;
};

type FooterProps = {};

type FooterStyles = {
    footer: ViewStyle;
    button: ViewStyle;
    buttonTextStyle: TextStyle;
};

declare const Footer: FC<FooterProps>;

export { FooterMenuItem, FooterProps, FooterStyles };
export default Footer;
