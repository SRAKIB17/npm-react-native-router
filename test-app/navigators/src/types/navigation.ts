
export type ParamsProps = {
    [key: string]: string | number
}

export type NavigationProviderProps = {
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    title: string,
    isLoading: boolean,
    loadingScreen: boolean,
    setLoadingScreen: React.Dispatch<React.SetStateAction<boolean>>,
    NavigationPropertyPass: any,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    customDynamicNavbar: React.ReactNode,
    setCustomDynamicNavbar: React.Dispatch<React.SetStateAction<React.ReactNode>>,
}


export type AppConfig = ConfigCommon & {
    mainHeader?: React.ReactNode | React.JSX.Element,
}
export type ConfigCommon = {
    headerBar?: React.ReactNode | React.JSX.Element,
    loadingOverlay?: React.ReactNode | React.JSX.Element,
    loadingScreen?: React.ReactNode | React.JSX.Element,
    bottomTabs?: React.ReactNode | React.JSX.Element,
}

