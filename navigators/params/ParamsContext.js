import React, { createContext, useContext } from 'react';
const ParamsContext = createContext({});

export function ParamsProvider({ value, children }) {
    return (
        <ParamsContext.Provider value={value}>
            {children}
        </ParamsContext.Provider>
    );
}

export function useParams() {
    const params = useContext(ParamsContext);
    return params;
}
