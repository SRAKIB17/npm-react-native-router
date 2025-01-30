"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const components_1 = require("../../components");
const global_1 = require("../../components/global");
const RouterContext_1 = require("../router/RouterContext");
const ThemeContext_1 = require("../theming/ThemeContext");
const assets_images_1 = require("../../assets/assets_images");
const NavbarTitleBackButton = ({ title, clickAbleFunction, style, children }) => {
    const { push, history, basePath } = (0, RouterContext_1.useRouter)();
    const { colors, dark } = (0, ThemeContext_1.useTheme)();
    const styles = react_native_1.StyleSheet.create({
        navbar: {
            paddingHorizontal: 20,
            display: 'flex',
            backgroundColor: colors.card,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            color: 'black',
            height: 64,
            paddingLeft: 10,
            paddingRight: 10,
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
    });
    return (react_1.default.createElement(react_native_1.View, { style: [styles.navbar, style] },
        react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(components_1.TouchableOpacityButton, { image: assets_images_1.assets_images.dropdown_arrow_grey, key: title, imageStyle: {
                    transform: [
                        { rotate: '90deg' }
                    ],
                    width: 24,
                    height: 24,
                }, onPress: () => {
                    if (clickAbleFunction) {
                        clickAbleFunction();
                    }
                    else {
                        if (history.get().length) {
                            history.back();
                        }
                        else {
                            push(basePath);
                        }
                    }
                }, containerStyle: {
                    backgroundColor: 'transparent',
                    width: 36,
                    height: 36,
                    borderWidth: 0,
                } })),
        react_1.default.createElement(react_native_1.View, { style: {
                flex: 1,
                alignItems: 'center',
                left: children ? 0 : -18
            } },
            react_1.default.createElement(components_1.StyledText, { style: [
                    global_1.global_styles.text_xl,
                    global_1.global_styles.font_bold,
                    {
                        color: colors.primary
                    }
                ] }, title)),
        react_1.default.createElement(react_native_1.View, null, children)));
};
exports.default = NavbarTitleBackButton;
