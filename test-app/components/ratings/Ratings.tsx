import React from 'react';
import { Image, View } from 'react-native';
import { assets_images } from '../../assets/assets_images';
export default function Ratings({
    size = 20,
    rating = 0,
    asset
}: {
    size?: number,
    rating: number
    asset?: {
        fill: number
        empty: number
    }
}) {
    const ratings = Math.round(rating)

    return (
        <View style={{ flexDirection: 'row', gap: 1 }}>
            {
                [...Array(5)].map((r, index) => {
                    const check: any = index + 1 <= ratings ?
                        (asset?.fill ? asset.fill : assets_images)
                        :
                        (asset?.fill ? asset.empty : assets_images.ratings_full_empty)
                    return (
                        <View key={index}>
                            <Image source={check} style={{ width: size, height: size }} />
                        </View>
                    )
                })
            }

        </View>
    );
}