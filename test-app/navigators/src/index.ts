import DrawerContainer, { userDrawer } from "./drawer/DrawerContainer";
import HeaderBar from "./shared/HeaderBar";

// !DONE
import NavigationContainer, { useNavigation, useParams, useConfig } from "./NavigationContainer";
import RenderScreen from "./RenderScreen";
import { useRouter } from "./router/RouterContext";
import MainHeader from "./shared/MainHeader";
import { useTheme } from "./theming/ThemeContext";
import BottomTabs from "./shared/BottomTabs";

export {
    BottomTabs,
    HeaderBar,
    MainHeader,
    NavigationContainer, RenderScreen,
    useNavigation, useParams,
    useRouter,
    useTheme,
    useConfig,
};

// !DONE TYPE
import {
    ConfigType,
    NavigatePushProps, NavigationProviderProps, ParamsProps, RenderRoutesType, RouterProps, SchemeThemeProps, ScreenProps,
    ThemeColorNameProps, ThemeProps
} from "./types";

export {
    ConfigType,
    NavigatePushProps, NavigationProviderProps, ParamsProps, RenderRoutesType, RouterProps, SchemeThemeProps, ScreenProps,
    ThemeColorNameProps, ThemeProps
}
// ! ************************************

export {
    DrawerContainer,
    userDrawer
};

