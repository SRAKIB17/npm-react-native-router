import React, { createContext, useContext, useEffect, useState } from 'react';
import type { SchemeThemeProps, ThemeColorNameProps, ThemeProps } from '../types';
import { ThemeColor } from './theme';

const ThemeContext = createContext<ThemeProps>(ThemeColor?.default);


type Props = {
    scheme: "dark" | "default",
    theme?: {
        dark?: ThemeColorNameProps,
        default?: ThemeColorNameProps,
    },
    children: React.ReactNode;
};

export function ThemeProvider({
    scheme,
    theme,
    children
}: Props) {

    const [getThemes, setGetThemes] = useState(ThemeColor);

    useEffect(() => {
        // setGetThemes(ThemeColor?.dark)
        if (theme && (theme?.dark || theme?.default)) {
            const dark = theme?.dark || {}
            const defaultColor = theme?.default || {}
            setGetThemes({
                dark: {
                    dark: true,
                    colors: {
                        ...ThemeColor?.dark?.colors,
                        ...dark,
                    }
                },

                default: {
                    dark: false,
                    colors: {
                        ...ThemeColor?.default?.colors,
                        ...defaultColor,
                    }
                }
            })
        }
    }, [scheme])

    return (
        <ThemeContext.Provider value={scheme == 'dark' ? getThemes?.dark : getThemes?.default
        }>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const theme = useContext(ThemeContext);
    return theme;
}
