"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ThemeContext_1 = require("./theming/ThemeContext");
const LoaderComponent = () => {
    const { colors } = (0, ThemeContext_1.useTheme)();
    return (react_1.default.createElement(react_native_1.View, { style: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        } },
        react_1.default.createElement(react_native_1.ActivityIndicator, { size: "large", animating: true, color: colors.primary })));
};
exports.default = LoaderComponent;
