import React, { useEffect, useState } from 'react';
import { Image, ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { assets_images } from '../../assets/assets_images';

const MultipleCheckbox = ({
    style,
    storeValue,
    setStoreValue,
    data,
    asset
}: {
    asset?: {
        checked?: any
        unchecked?: any
    },
    style?: ViewStyle | TextStyle | ImageStyle | object,
    data: any,
    storeValue: any[],
    setStoreValue: React.Dispatch<any[]>
}) => {
    const [isChecked, setChecked] = useState(storeValue?.includes(data));
    useEffect(() => {
        setChecked(storeValue?.includes(data))
    }, [storeValue])
    const toggleCheckbox = () => {
        const filter = storeValue.filter((check) => check != data);
        if (!isChecked) {
            setChecked(true);
            setStoreValue([...filter, data])
        }
        else {
            setChecked(false);
            setStoreValue([...filter])
        }
    }

    return (
        <TouchableOpacity onPress={toggleCheckbox} >
            <View style={{ padding: 4 }}>
                {isChecked ? (
                    <Image
                        source={(
                            asset ? asset.checked : assets_images.checkbox_round_checked)
                        }
                        style={[{ width: 24, height: 24 }, style]}

                    />
                ) : (
                    <Image
                        source={(asset ? asset.unchecked : assets_images.checkbox_round)}
                        style={[{ width: 24, height: 24 }, style]}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};


export default MultipleCheckbox;
