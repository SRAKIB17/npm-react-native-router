import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type NavbarTitleProps = {
    title: string
    clickAbleFunction?: () => void
    style?: ViewStyle | TextStyle | ImageStyle | object,
    children?: React.ReactNode,
}

export default function NavbarTitleBackButton(props: NavbarTitleProps): JSX.Element;