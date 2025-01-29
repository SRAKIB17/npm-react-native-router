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
exports.ThemeProvider = ThemeProvider;
exports.useTheme = useTheme;
const react_1 = __importStar(require("react"));
const theme_1 = require("./theme");
const ThemeContext = (0, react_1.createContext)(theme_1.ThemeColor === null || theme_1.ThemeColor === void 0 ? void 0 : theme_1.ThemeColor.dark);
function ThemeProvider({ scheme, theme, children }) {
    const [getThemes, setGetThemes] = (0, react_1.useState)(theme_1.ThemeColor);
    // const getTheme = ThemeColor?.dark;
    (0, react_1.useEffect)(() => {
        var _a, _b, _c;
        // setGetThemes(ThemeColor?.dark)
        if (theme && ((_a = Object.values(theme)) === null || _a === void 0 ? void 0 : _a.length)) {
            const dark = (theme === null || theme === void 0 ? void 0 : theme.dark) || {};
            const defaultColor = (theme === null || theme === void 0 ? void 0 : theme.default) || {};
            setGetThemes({
                dark: {
                    dark: true,
                    colors: Object.assign(Object.assign({}, (_b = theme_1.ThemeColor === null || theme_1.ThemeColor === void 0 ? void 0 : theme_1.ThemeColor.dark) === null || _b === void 0 ? void 0 : _b.colors), dark)
                },
                default: {
                    dark: false,
                    colors: Object.assign(Object.assign({}, (_c = theme_1.ThemeColor === null || theme_1.ThemeColor === void 0 ? void 0 : theme_1.ThemeColor.default) === null || _c === void 0 ? void 0 : _c.colors), defaultColor)
                }
            });
        }
    }, [scheme]);
    return (react_1.default.createElement(ThemeContext.Provider, { value: scheme == 'dark' ? getThemes === null || getThemes === void 0 ? void 0 : getThemes.dark : getThemes === null || getThemes === void 0 ? void 0 : getThemes.default }, children));
}
function useTheme() {
    const theme = (0, react_1.useContext)(ThemeContext);
    return theme;
}
