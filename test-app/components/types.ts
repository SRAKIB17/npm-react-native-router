import { ViewStyle, TextStyle, ImageStyle } from 'react-native'


export type ButtonProps = {
    text?: string | number,
    onPress?: () => void,
    disableStyle?: ViewStyle | TextStyle | ImageStyle | object,
    containerStyle?: ViewStyle | TextStyle | ImageStyle | object;
    disabled?: boolean,
    image?: any,
    numberOfLines?: number,
    image_url?: any,
    imageStyle?: ViewStyle | TextStyle | ImageStyle | object,
    textStyle?: ViewStyle | TextStyle | ImageStyle | object,
}

export type LinkProps = {
    href: string,
    children: React.ReactNode
    style?: object | ImageStyle | ViewStyle | TextStyle
}
export type StyleTextProps = {
    children: React.ReactNode,
    style?: ViewStyle | TextStyle | ImageStyle | object,
    numberOfLines?: number
}
export type CheckboxProps = {
    isChecked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>,
    style?: ViewStyle | TextStyle | ImageStyle | object,
    asset?: {
        checked: number
        unchecked: number
    }
}

export type InputProps = {
    autoFocus?: boolean,
    containerStyle?: ViewStyle | TextStyle | ImageStyle | object,
    style?: ViewStyle | TextStyle | ImageStyle | object,
    asset?: number,
    value: string,
    multiline?: boolean,
    setValue: any,
    defaultValue?: string,
    type?: "text" | "password",
    placeholder?: string,
    pattern?: RegExp,
    toast?: string
}


export type DropDownPickerProps = {
    placeholderConfig?: {
        noResultsFoundPlaceholder?: string,
        searchPlaceholder?: string,
        placeholder?: string,
    },

    multipleConfig?: {
        asset?: {
            checked?: number,
            unchecked?: number
        }
        hasMultiple: boolean,
        setStoreValue: React.Dispatch<any[]>,
        storeValue: any[],
        selectedTitle: string,
        resetTitle: string,
    }
    singleConfig?: {
        value: {
            id?: number | string,
            label: string;
            value: string;
        },
        defaultValue: {
            id?: number | string,
            label: string;
            value: string;
        },
        setValue: React.Dispatch<React.SetStateAction<{
            id?: number | string,
            label: string;
            value: string;
        }>>
    }

    hiddenArrow?: boolean,
    imageStyle?: ViewStyle | TextStyle | ImageStyle | object,
    textStyle?: ViewStyle | TextStyle | ImageStyle | object,
    width?: number,
    disable?: boolean,
    disableStyle?: ViewStyle | TextStyle | ImageStyle | object,
    containerStyle?: ViewStyle | TextStyle | ImageStyle | object,
    items: {
        id?: number | string,
        label: string;
        value: string;
    }[],
    animationType?: "slide" | "fade"
    asset?: number,
}