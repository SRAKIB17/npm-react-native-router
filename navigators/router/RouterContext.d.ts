import React, { createContext, useContext } from 'react';


export type RouterProps = {
    path: string | null;
    basePath: string,
    hash: string | null;
    protocol: string | null;
    asPath: string,
    origin: string | null;
    username: string | null;
    password: string | null;
    hostname: string | null;
    title: string | null,
    port: string | null;
    query: {
        [key: string]: any
    };
    push: (url: string, option?: {
        title?: string;
    }) => Promise<void>,
    history: {
        back: () => void,
        get: () => string[]
    }
}


type Props = {
    basePath: string;
    title: string,
    children: React.ReactNode;
    setLoadingComponent: React.Dispatch<React.SetStateAction<boolean>>
};

export const useRouter: () => RouterProps;

export function RouterProvider(props: Props): JSX.Element;
