import React from 'react';
import { ViewStyle, TextStyle, ImageStyle, } from 'react-native';
type MultipleCheckboxProps = {
    asset?: {
        checked?: number
        unchecked?: number
    },
    style?: ViewStyle | TextStyle | ImageStyle | object,
    data: any,
    storeValue: any[],
    setStoreValue: React.Dispatch<any[]>
}



export default function MultipleCheckbox(props: MultipleCheckboxProps): JSX.Element;