import { ConfigCommon, AppConfig } from "./navigation";
import type { NavigatePushProps, RouterProps } from "./router";

export type ScreenProps = {
    router: RouterProps,
    title: string,
    isLoading: boolean,
    setLoading: (state: boolean) => void,
    loadingScreen: boolean,
    setLoadingScreen: (state: boolean) => void,
    navigate: NavigatePushProps,
    setConfig: (config: AppConfig) => void;
    setTitle: (title: string) => void;
    params: {
        [key: string]: any;
    };
}

export type ScreenConfig = {
    showBottomTabs?: boolean,
    showHeaderBar?: boolean,
} & ConfigCommon;

export type RenderRoutesType = {
    path: string,
    screen: (props: ScreenProps) => React.ReactNode | React.JSX.Element,
    title: string,
    config?: ScreenConfig;
    isPrivate?: boolean,
    privateState?: boolean,
    drawerConfig?: {
        drawerWidth?: number,
        drawerPosition?: "left" | "right" | undefined,
        renderNavigationView?: React.JSX.Element | undefined
    }
}