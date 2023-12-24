import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { assets_images } from '../../assets/assets_images';
const Checkbox = ({ isChecked = false, setChecked = () => { }, style, asset }) => {
    const toggleCheckbox = () => { setChecked(!isChecked); }; return (<TouchableOpacity onPress={toggleCheckbox}>
        {(isChecked ? (<Image source={(asset ? asset.checked : assets_images.checkbox_round_checked)} style={[{ width: 24, height: 24 }, style]} />) : (<Image source={(asset ? asset.unchecked : assets_images.checkbox_round)} style={[{ width: 24, height: 24 }, style]} />))}</TouchableOpacity>);
};

export default Checkbox;
