import React from 'react';
import { ThemeColorNameProps } from '../NavigationContainer'

type ThemeProps = {
    dark: boolean,
    colors: ThemeColorNameProps,
}

type ThemeProviderProps = {
    scheme: "dark" | "default",
    theme?: {
        dark?: ThemeColorNameProps,
        default?: ThemeColorNameProps,
    },
    children: React.ReactNode;
};

export const useTheme: () => ThemeProps;

export function ThemeProvider(props: ThemeProviderProps): JSX.Element;