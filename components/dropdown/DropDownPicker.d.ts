import React from 'react';
import { ViewStyle, TextStyle, ImageStyle, } from 'react-native';

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


export default function DropDownPicker(props: DropDownPickerProps): JSX.Element;