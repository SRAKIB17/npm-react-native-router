import DrawerContainer, { userDrawer } from "./drawer/DrawerContainer";
import HeaderBar from "./shared/HeaderBar";

// !DONE
import NavigationContainer, { useNavigation, useParams } from "./NavigationContainer";
import RenderScreen from "./RenderScreen";
import { useRouter } from "./router/RouterContext";
import BottomTabs from "./shared/BottomTabs";
import LoadingOverlay, { LoadingScreen } from "./shared/LoaderComponent";
import MainHeader from "./shared/MainHeader";
import { useTheme } from "./theming/ThemeContext";

export {
    BottomTabs,
    HeaderBar, LoadingOverlay, MainHeader,
    LoadingScreen,
    NavigationContainer, RenderScreen, useNavigation, useParams,
    useRouter,
    useTheme
};

// !DONE TYPE
import {
    AppConfig,
    NavigatePushProps,
    ParamsProps, RenderRoutesType, RouterProps, SchemeThemeProps, ScreenProps,
    ThemeColorNameProps, ThemeProps
} from "./types";

export {
    AppConfig as ConfigType,
    NavigatePushProps, ParamsProps, RenderRoutesType, RouterProps, SchemeThemeProps, ScreenProps,
    ThemeColorNameProps, ThemeProps
};
// ! ************************************

export {
    DrawerContainer,
    userDrawer
};

