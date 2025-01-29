"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ThemeContext_1 = require("../theming/ThemeContext");
const MainNavbar = ({ title, children }) => {
    const { colors } = (0, ThemeContext_1.useTheme)();
    const styles = react_native_1.StyleSheet.create({
        navbar: {
            display: 'flex',
            backgroundColor: colors.card,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            color: 'black',
            height: 64,
            paddingHorizontal: 10,
            alignContent: 'space-between',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 1.00,
            elevation: 3,
        },
        navbar_button: {
            padding: 8,
        },
        button: {
            alignItems: 'center',
            backgroundColor: colors.card,
            padding: 10,
        },
    });
    return (react_1.default.createElement(react_native_1.View, { style: styles.navbar },
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, { style: {
                    fontSize: 24,
                    fontWeight: '600',
                    color: colors.primary
                } }, title)),
        react_1.default.createElement(react_native_1.View, null, children)));
};
exports.default = MainNavbar;
