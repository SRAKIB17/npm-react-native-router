"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
const react_native_1 = require("react-native");
const components_1 = require("../../../components");
const RouterContext_1 = require("../router/RouterContext");
const ThemeContext_1 = require("../theming/ThemeContext");
function Footer() {
    const router = (0, RouterContext_1.useRouter)();
    const { colors, dark } = (0, ThemeContext_1.useTheme)();
    const footerMenuButton = [
        {
            title: "Home",
            link: '',
        },
        {
            title: "Home",
            link: '',
        },
        {
            title: "Home",
            link: '',
        },
        {
            title: "Home",
            link: '',
        },
        {
            title: "Home",
            link: '',
        }
    ];
    const styles = react_native_1.StyleSheet.create({
        footer: {
            backgroundColor: colors.card,
            // borderTopEndRadius: 20,
            // borderTopStartRadius: 20,
            padding: 16,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderColor: colors.border,
            borderWidth: 0.5,
            shadowColor: "#000",
            height: 64,
            width: '100%',
        },
        button: {
            gap: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: 48,
            minWidth: 48,
            padding: 4,
        },
        buttonGPlusStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#dc4e41',
            borderWidth: 0.5,
            borderColor: '#fff',
            height: 40,
            borderRadius: 5,
            margin: 5,
        },
        buttonFacebookStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#485a96',
            borderWidth: 0.5,
            borderColor: '#fff',
            height: 40,
            borderRadius: 5,
            margin: 5,
        },
        buttonImageIconStyle: {
            padding: 10,
            margin: 5,
            height: 25,
            width: 25,
            resizeMode: 'stretch',
        },
        buttonTextStyle: {
            color: '#fff',
            marginBottom: 4,
            marginLeft: 10,
        },
        buttonIconSeparatorStyle: {
            backgroundColor: '#fff',
            width: 1,
            height: 40,
        },
    });
    return (React.createElement(react_native_1.View, { style: styles.footer }, footerMenuButton === null || footerMenuButton === void 0 ? void 0 : footerMenuButton.map((r, index) => {
        const check = router.path === r.link;
        return (React.createElement(react_native_1.View, { key: index },
            React.createElement(react_native_1.Pressable
            // style={{
            //     paddingVertical: 10,
            //     paddingHorizontal: 4
            // }}
            // underlayColor={colors?.background}
            , { 
                // style={{
                //     paddingVertical: 10,
                //     paddingHorizontal: 4
                // }}
                // underlayColor={colors?.background}
                onPress: () => router.push(r === null || r === void 0 ? void 0 : r.link), disabled: check },
                React.createElement(react_native_1.View, { style: styles.button },
                    React.createElement(react_native_1.View, null,
                        React.createElement(react_native_1.Image, { source: check ? r === null || r === void 0 ? void 0 : r.select : r === null || r === void 0 ? void 0 : r.default, style: {
                                height: 24, width: 24, objectFit: 'contain',
                            } })),
                    React.createElement(components_1.StyledText, { style: {
                            fontSize: 10,
                            color: check ? colors === null || colors === void 0 ? void 0 : colors.primary : colors.grey
                        } }, r === null || r === void 0 ? void 0 : r.title)))));
    })));
}
