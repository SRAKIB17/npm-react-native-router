import React, { Component } from "react";
import { urlParse } from "./utils/url";

type ScreenProps = {
    navigate: (path: string) => void;
    param: any;
}

type RoutesType = {
    path: string;
    screen: (props: any) => React.ReactNode | React.JSX.Element;
    title: string;
    navbar?: React.JSX.Element;
    footer?: React.JSX.Element;
    isPrivate?: boolean;
    privateState?: boolean;
    hasFooter?: boolean;
    hasNavbar?: boolean;
    drawerConfig?: {
        drawerWidth?: number;
        drawerPosition?: "left" | "right" | undefined;
        renderNavigationView?: React.JSX.Element | undefined;
    };
};

type LocationType = {
    path: string | null;
    hash: string | null;
    protocol: string | null;
    origin: string | null;
    username: string | null;
    password: string | null;
    hostname: string | null;
    href: string;
    port: string | null;
    query: any;
};

type ConfigType = {
    homeNavbar?: React.ReactNode | React.JSX.Element;
    navbar?: React.ReactNode | React.JSX.Element;
    footer?: React.ReactNode | React.JSX.Element;
};

class Navigation {
    static router: RoutesType[] = [];
    static config?: ConfigType;
    static location: LocationType | undefined;
    static basePath: string = '';
}

export function NavigationContainer({ children }: { children: React.ReactNode }) {
    const x = Navigation.router;
    return children;
}


export default class App {
    #router: RoutesType[] = [];
    private config?: ConfigType;
    #location: LocationType | undefined;
    #basePath: string = '';
    constructor(basePath: string, config?: ConfigType) {
        this.config = config;
        this.#basePath = basePath;
        this.#location = urlParse(this.#basePath);
        this.Router = this.Router.bind(this); // ✅ Fix binding issue
    }

    Router = ({ router }: { router: RoutesType[] }) => {
        if (!router?.length) return null;
        this.#router = router;
        return this.Render(); // ✅ Arrow function ensures correct `this`
    }
    navigate = (path: string) => {
        this.#basePath = path;
        this.#location = urlParse(this.#basePath);
        this.Router({ router: this.#router });
    }
    Render() {
        const props = {
            navigate: this.navigate
        }
        let parseBasePath = this.#location?.path || '';
        const find = this.#router.find((route) => {
            return urlParse(route.path)?.path === parseBasePath;
        });
        if (find) {
            return find?.screen(props);
        }

        return null;
    };
}
