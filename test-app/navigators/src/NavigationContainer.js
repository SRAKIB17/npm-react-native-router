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
exports.NavigationContext = exports.NavigationPropertyPass = void 0;
exports.default = NavigationContainer;
exports.useNavigation = useNavigation;
exports.useParams = useParams;
const react_1 = __importStar(require("react"));
const RouterContext_1 = require("./router/RouterContext");
const ThemeContext_1 = require("./theming/ThemeContext");
class NavigationPropertyPass {
}
exports.NavigationPropertyPass = NavigationPropertyPass;
NavigationPropertyPass.router = [];
NavigationPropertyPass.basePath = '';
exports.NavigationContext = (0, react_1.createContext)({
    loadingComponent: false,
    title: "",
    setTitle: () => { },
    NavigationPropertyPass: NavigationPropertyPass,
    setLoadingComponent: () => { },
    customDynamicNavbar: undefined,
    setCustomDynamicNavbar: () => { },
});
function NavigationContainer({ children, basePath, theme, config = {}, scheme = 'default', }) {
    NavigationPropertyPass.basePath = basePath;
    NavigationPropertyPass.config = config;
    const [title, setTitle] = (0, react_1.useState)('');
    const [loadingComponent, setLoadingComponent] = (0, react_1.useState)(false);
    const [customDynamicNavbar, setCustomDynamicNavbar] = (0, react_1.useState)(undefined);
    return (react_1.default.createElement(exports.NavigationContext.Provider, { value: {
            setTitle,
            title,
            NavigationPropertyPass: NavigationPropertyPass,
            customDynamicNavbar: customDynamicNavbar,
            setCustomDynamicNavbar: setCustomDynamicNavbar,
            loadingComponent: loadingComponent,
            setLoadingComponent: setLoadingComponent,
        } },
        react_1.default.createElement(ThemeContext_1.ThemeProvider, { scheme: scheme, theme: theme },
            react_1.default.createElement(RouterContext_1.RouterProvider, { title: title, basePath: basePath, setLoadingComponent: setLoadingComponent }, children))));
}
function useNavigation() {
    const { customDynamicNavbar, loadingComponent, setLoadingComponent, setCustomDynamicNavbar, setTitle, title, } = (0, react_1.useContext)(exports.NavigationContext);
    return {
        setTitle,
        title,
        customDynamicNavbar,
        loadingComponent,
        setLoadingComponent,
        setCustomDynamicNavbar
    };
}
function useParams() {
    const { NavigationPropertyPass: NavigationProps } = (0, react_1.useContext)(exports.NavigationContext);
    return NavigationProps.params;
}
