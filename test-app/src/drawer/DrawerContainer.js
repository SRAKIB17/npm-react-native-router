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
exports.userDrawer = userDrawer;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const DrawerContext = (0, react_1.createContext)({
    drawerRef: { current: null },
    drawerConfig: {}
});
const DrawerContainer = ({ children, config = {
    drawerWidth: 300,
    drawerPosition: 'left',
    renderNavigationView: undefined
}, }) => {
    const [drawerConfig, setDrawerConfig] = (0, react_1.useState)({});
    const drawerRef = (0, react_1.useRef)(null);
    const navigationView = () => (react_1.default.createElement(react_native_1.ScrollView, null, drawerConfig.renderNavigationView));
    (0, react_1.useEffect)(() => {
        setDrawerConfig(config);
        return () => {
        };
    }, []);
    return (react_1.default.createElement(DrawerContext.Provider, { value: {
            drawerRef: drawerRef,
            drawerConfig: drawerConfig,
            setDrawerConfig: setDrawerConfig
        } }, typeof (drawerConfig === null || drawerConfig === void 0 ? void 0 : drawerConfig.renderNavigationView) == 'object' ?
        react_1.default.createElement(react_native_1.DrawerLayoutAndroid, { ref: drawerRef, drawerWidth: drawerConfig === null || drawerConfig === void 0 ? void 0 : drawerConfig.drawerWidth, drawerPosition: drawerConfig === null || drawerConfig === void 0 ? void 0 : drawerConfig.drawerPosition, renderNavigationView: navigationView }, children)
        :
            react_1.default.createElement(react_1.default.Fragment, null, children)));
};
function userDrawer() {
    const drawer = (0, react_1.useContext)(DrawerContext);
    return drawer;
}
exports.default = DrawerContainer;
