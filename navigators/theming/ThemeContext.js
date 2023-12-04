import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeColor } from './theme';


const ThemeContext = createContext(ThemeColor?.dark);
export function ThemeProvider({ scheme, theme, children }) {
    const [getThemes, setGetThemes] = useState(ThemeColor);

    useEffect(() => {
        if (theme && Object.values(theme)?.length) {
            const dark = theme?.dark || {};
            const defaultColor = theme?.default || {};
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
            });
        };
    }, [scheme]);

    return (
        <ThemeContext.Provider value={scheme === 'dark' ? getThemes.dark : getThemes.default}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const theme = useContext(ThemeContext);
    return theme;
}
