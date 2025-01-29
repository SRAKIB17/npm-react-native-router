"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavigationContainer;
exports.userRenderContext = userRenderContext;
exports.useNavigation = useNavigation;
const react_1 = __importStar(require("react"));
const ParamsContext_1 = require("./params/ParamsContext");
const RouterContext_1 = require("./router/RouterContext");
const ThemeContext_1 = require("./theming/ThemeContext");
const RenderContext = (0, react_1.createContext)({
    setAllParams: () => { },
    setTitle: () => { },
    config: {},
    params: {},
});
const NavigationContext = (0, react_1.createContext)({
    loadingComponent: false,
    setLoadingComponent: () => { },
    customDynamicNavbar: undefined,
    setCustomDynamicNavbar: () => { },
});
function NavigationContainer({ children, basePath, theme, config = {}, scheme = 'default', }) {
    const [title, setTitle] = (0, react_1.useState)('');
    const [params, setAllParams] = (0, react_1.useState)({});
    const [loadingComponent, setLoadingComponent] = (0, react_1.useState)(false);
    const [customDynamicNavbar, setCustomDynamicNavbar] = (0, react_1.useState)(undefined);
    const navigationStack = (0, react_1.useRef)([]); // Manually manage navigation stack
    return (react_1.default.createElement(NavigationContext.Provider, { value: {
            customDynamicNavbar: customDynamicNavbar,
            setCustomDynamicNavbar: setCustomDynamicNavbar,
            loadingComponent: loadingComponent,
            setLoadingComponent: setLoadingComponent,
        } },
        react_1.default.createElement(RouterContext_1.RouterProvider, { title: title, basePath: basePath, setLoadingComponent: setLoadingComponent },
            react_1.default.createElement(ThemeContext_1.ThemeProvider, { scheme: scheme, theme: theme },
                react_1.default.createElement(RenderContext.Provider, { value: {
                        params: params,
                        setTitle: setTitle,
                        config: config,
                        setAllParams: setAllParams,
                    } },
                    react_1.default.createElement(ParamsContext_1.ParamsProvider, { value: params }, children))))));
}
function userRenderContext() {
    return (0, react_1.useContext)(RenderContext);
}
function useNavigation() {
    const { customDynamicNavbar, loadingComponent, setLoadingComponent, setCustomDynamicNavbar } = (0, react_1.useContext)(NavigationContext);
    return {
        customDynamicNavbar,
        loadingComponent,
        setLoadingComponent,
        setCustomDynamicNavbar
    };
}
