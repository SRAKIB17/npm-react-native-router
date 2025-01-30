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
exports.default = Root;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const src_1 = require("./src");
function Root() {
    return (react_1.default.createElement(src_1.NavigationContainer
    // scheme='dark'
    // scheme={scheme !== 'dark' ? 'dark' : 'default'}
    , { 
        // scheme='dark'
        // scheme={scheme !== 'dark' ? 'dark' : 'default'}
        basePath: '/home' },
        react_1.default.createElement(WrapScreen, null)));
}
const WrapScreen = () => {
    const { dark, colors } = (0, src_1.useTheme)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_native_1.StatusBar, { animated: true, barStyle: dark ? "light-content" : 'dark-content', backgroundColor: colors.card, showHideTransition: 'slide', hidden: false }),
        react_1.default.createElement(Screen, null)));
};
function Screen() {
    const Render = new src_1.RenderScreen();
    return (react_1.default.createElement(Render.Render, null,
        react_1.default.createElement(Render.screen, { path: '/home', title: 'Home', hasBottomTabs: true, 
            // hasNavbar={true}
            // navbar={<MainNavbar
            //   title='Ahliya' children={<Home />}
            // />}
            isPrivate: true, privateState: true, screen: Home }),
        react_1.default.createElement(Render.screen, { title: 'Settings', 
            // hasNavbar={true}
            path: '/settings/:setting', screen: Settings }),
        react_1.default.createElement(Render.screen, { title: 'About', 
            // hasNavbar={true}
            path: '/about/:id', screen: About })));
}
const Home = ({ navigate }) => {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "\uD83C\uDFE0 Home"),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: () => navigate(`/x/${new Date().toDateString()}`) },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Not Found")),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: () => navigate(`/about/${new Date().toDateString()}`) },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Go to About")),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: () => navigate(`/settings/${new Date().getTime()}`) },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Go to Settings"))));
};
const About = ({ navigate, params, setTitle }) => {
    const { colors, dark } = (0, src_1.useTheme)();
    (0, react_1.useEffect)(() => {
        setTitle('testing');
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, { backgroundColor: colors === null || colors === void 0 ? void 0 : colors.danger }] },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "\u2139\uFE0F About"),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: () => navigate("/home") },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Back to Home"))));
};
const Settings = ({ navigate, params }) => {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "\u2699\uFE0F Settings"),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: () => navigate("/home") },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Back to Home"))));
};
const styles = react_native_1.StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 4,
        paddingHorizontal: 10,
        display: 'flex',
        justifyContent: "center",
        alignContent: 'center',
        height: 48,
        borderRadius: 4,
        margin: 5
    },
    buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
