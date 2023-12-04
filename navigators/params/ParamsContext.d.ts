import React from 'react';

export type ParamsProps = {
    [key: string]: string | number
}

type Props = {
    value: ParamsProps;
    children: React.ReactNode;
};

export const useParams: () => ParamsProps;

export function ParamsProvider(props: Props): JSX.Element;