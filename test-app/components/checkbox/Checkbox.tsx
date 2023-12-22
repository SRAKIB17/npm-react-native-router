import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ViewStyle, TextStyle, ImageStyle, } from 'react-native';
import { CheckboxProps } from '../types';
import { assets_images } from '../../assets/assets_images';
// import { assets_images } from 'h';

const Checkbox = ({
    isChecked = false,
    setChecked = () => { },
    style,
    asset
}: CheckboxProps) => {

    const toggleCheckbox = () => {
        setChecked(!isChecked);
    };

    return (
        <TouchableOpacity onPress={toggleCheckbox} >
            {isChecked ? (
                <Image
                    source={(asset ? asset.checked : assets_images.checkbox_round_checked)}
                    style={[{ width: 24, height: 24 }, style]}

                />
            ) : (
                <Image
                    source={(asset ? asset.unchecked : assets_images.checkbox_round)}
                    style={[{ width: 24, height: 24 }, style]}
                />
            )}
        </TouchableOpacity>
    );
};


export default Checkbox;
