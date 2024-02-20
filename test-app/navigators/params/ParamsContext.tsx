import React, { createContext, useContext } from 'react';
import { ParamsProps } from '../type/types';


const ParamsContext = createContext<ParamsProps>({});

// import type { Theme } from '../types';


type Props = {
    value: { [key: string]: string | number },
    children: React.ReactNode,
    setParams: (params: { [key: string]: any; }) => void,
};

export function ParamsProvider({ value, children, setParams }: Props) {
    return (
        <ParamsContext.Provider value={{ params: value, setParams: setParams }}>
            {children}
        </ParamsContext.Provider>
    );
}

export function useParams() {
    const params = useContext(ParamsContext);
    return params;
}