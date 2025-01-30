export type ThemeColorNameProps = {
    primary?: string,
    background?: string,
    card?: string,
    text?: string,
    link?: string,
    border?: string,
    notification?: string,
    transparent?: string,
    primary_text?: string,
    secondary?: string,
    secondary_text?: string,
    success?: string,
    success_text?: string,
    danger?: string,
    danger_text?: string,
    warning?: string,
    warning_text?: string,
    info?: string,
    info_text?: string,
    grey?: string,
    light_grey?: string,
    dark_grey?: string,
}

export type ThemeProps = {
    dark: boolean,
    colors: ThemeColorNameProps,
}
export type SchemeThemeProps = { dark?: ThemeColorNameProps, default?: ThemeColorNameProps }