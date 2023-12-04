import { ReactNode } from 'react';
import { ImageStyle, ViewStyle } from 'react-native';

export type RatingsProps = {
    size?: number;
    rating: number;
    asset?: {
        fill: number;
        empty: number;
    };
}

export default function Ratings(props: RatingsProps): JSX.Element;
