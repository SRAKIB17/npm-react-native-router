import React, { createContext, useContext } from 'react';
import { ParamsProps } from '../type/types';


const ParamsContext = createContext<ParamsProps>({});

// import type { Theme } from '../types';


type Props = {
    value: ParamsProps;
    children: React.ReactNode;
};

export function ParamsProvider({ value, children }: Props) {
    return (
        <ParamsContext.Provider value={value}>
            {children}
        </ParamsContext.Provider>
    );
}

export function useParams() {
    const theme = useContext(ParamsContext);
    return theme;
}