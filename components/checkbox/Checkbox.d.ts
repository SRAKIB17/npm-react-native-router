import React from 'react';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
export type CheckboxProps = {
    isChecked: boolean,
    setChecked: React.Dispatch<React.SetStateAction<boolean>>,
    style?: ViewStyle | TextStyle | ImageStyle | object,
    asset?: {
        checked: number
        unchecked: number
    }
};

export default function Checkbox(props: CheckboxProps): JSX.Element;
