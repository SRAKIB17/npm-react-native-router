import React from 'react';
import { Image, View } from 'react-native';
import { assets_images } from '../../assets/assets_images';

export default function Ratings({
    size = 20,
    rating = 0,
    asset,
}) {
    const ratings = Math.round(rating);

    return (
        <View style={{ flexDirection: 'row' }}>
            {[...Array(5)].map((_, index) => {
                const check =
                    index + 1 <= ratings
                        ? asset?.fill || assets_images.ratings_full_check_primary
                        : asset?.empty || assets_images.ratings_full_empty;
                return (
                    <View key={index}>
                        <Image source={check} style={{ width: size, height: size }} />
                    </View>
                );
            })}
        </View>
    );
}
