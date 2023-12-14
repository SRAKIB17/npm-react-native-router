import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeColor } from './theme';
import { ThemeColorNameProps, ThemeProps } from '../type/types';

const ThemeContext = createContext<ThemeProps>(ThemeColor?.dark);


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

    const [getThemes, setGetThemes] = useState(ThemeColor)
    // const getTheme = ThemeColor?.dark;
    useEffect(() => {
        // setGetThemes(ThemeColor?.dark)
        if (theme && Object.values(theme)?.length) {
            const dark = theme?.dark || {}
            const defaultColor = theme?.default || {}
            setGetThemes({
                dark: {
                    dark: true,
                    colors: {
                        ...ThemeColor?.dark?.colors,
                        ...dark
                    }
                },

                default: {
                    dark: false,
                    colors: {
                        ...ThemeColor?.default?.colors,
                        ...defaultColor
                    }
                }
            })
        }
    }, [scheme])

    return (
        <ThemeContext.Provider value={scheme == 'dark' ? getThemes?.dark : getThemes?.default}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const theme = useContext(ThemeContext);
    return theme;
}