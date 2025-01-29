"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Root;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const navigation_1 = __importDefault(require("./@dbnx/navigation"));
const navigators_1 = require("./navigators");
const app = new navigation_1.default('/');
const Router = app.Router;
function Root() {
    return (react_1.default.createElement(react_native_1.View, { style: { padding: 100 } },
        react_1.default.createElement(Router, { router: [
                {
                    path: '/home',
                    title: 'Home',
                    screen: Home,
                },
            ] }))
    // <NavigationContainer
    //   // scheme={scheme !== 'dark' ? 'dark' : 'default'}
    //   basePath={'/home'}
    // >
    //   <WrapScreen />
    // </NavigationContainer>
    );
}
const WrapScreen = () => {
    const { dark, colors } = (0, navigators_1.useTheme)();
    return (react_1.default.createElement(navigators_1.DrawerContainer, null,
        react_1.default.createElement(react_native_1.StatusBar, { animated: true, barStyle: dark ? "light-content" : 'dark-content', backgroundColor: colors.card, showHideTransition: 'slide', hidden: false }),
        react_1.default.createElement(Screen, null)));
};
function Screen() {
    const Render = new navigators_1.RenderScreen();
    return (react_1.default.createElement(Render.Render, null,
        react_1.default.createElement(Render.screen, { path: '/home', title: 'Home', 
            // hasNavbar={true}
            navbar: react_1.default.createElement(navigators_1.MainNavbar, { title: 'Ahliya', children: react_1.default.createElement(Home, null) }), isPrivate: true, privateState: true, screen: Home }),
        react_1.default.createElement(Render.screen, { title: 'Settings', 
            // hasNavbar={true}
            path: '/settings', screen: Settings }),
        react_1.default.createElement(Render.screen, { title: 'About', 
            // hasNavbar={true}
            path: '/about', screen: About })));
}
const Home = ({ navigate }) => {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "\uD83C\uDFE0 Home"),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: () => navigate("About") },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Go to About")),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: () => navigate("Settings") },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Go to Settings"))));
};
const About = ({ navigate }) => {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "\u2139\uFE0F About"),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: () => navigate("Home") },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Back to Home"))));
};
const Settings = ({ navigate }) => {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "\u2699\uFE0F Settings"),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: () => navigate("Home") },
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
