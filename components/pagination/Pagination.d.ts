import { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export type PaginationProps = {
    pageHandle: (page: number) => void;
    currentPage: number;
    getLastPage: number;
    disableButton?: {
        bg: string;
        text: string;
    };
    button?: {
        bg: string;
        text: string;
        borderWidth?: number;
        borderColor?: string;
    };
}

export default function Pagination(props: PaginationProps): JSX.Element;