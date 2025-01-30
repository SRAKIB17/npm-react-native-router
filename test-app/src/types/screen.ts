import type { NavigatePushProps } from "./router";

export type ScreenProps = {
    navigate: NavigatePushProps,
    setTitle: (title: string) => void;
    params: {
        [key: string]: any;
    };
}

export type RenderRoutesType = {
    path: string,
    screen: (props: any) => React.ReactNode | React.JSX.Element,
    title: string,
    headerBar?: React.JSX.Element,
    bottomTabs?: React.JSX.Element,
    isPrivate?: boolean,
    privateState?: boolean,
    hasBottomTabs?: boolean,
    hasHeaderBar?: boolean,
    drawerConfig?: {
        drawerWidth?: number,
        drawerPosition?: "left" | "right" | undefined,
        renderNavigationView?: React.JSX.Element | undefined
    }
}