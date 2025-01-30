
export type ParamsProps = {
    [key: string]: string | number
}

export type NavigationProviderProps = {
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    title: string,
    loadingComponent: boolean,
    NavigationPropertyPass: any,
    setLoadingComponent: React.Dispatch<React.SetStateAction<boolean>>,
    customDynamicNavbar: React.ReactNode,
    setCustomDynamicNavbar: React.Dispatch<React.SetStateAction<React.ReactNode>>,
}


export type ConfigType = {
    mainHeader?: React.ReactNode | React.JSX.Element,
    headerBar?: React.ReactNode | React.JSX.Element,
    bottomTabs?: React.ReactNode | React.JSX.Element,
}