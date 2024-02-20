import React from 'react';

export type ParamsProps = {
    params: { [key: string]: string | number },
    setParams: (params: { [key: string]: any; }) => void,
}

type Props = {
    value: { [key: string]: string | number },
    children: React.ReactNode,
    setParams: (params: { [key: string]: any; }) => void,
};

export const useParams: () => ParamsProps;

export function ParamsProvider(props: Props): JSX.Element;