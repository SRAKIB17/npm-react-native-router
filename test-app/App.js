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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Root;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const navigation_1 = __importStar(require("./@dbnx/navigation"));
const Screen_1 = __importDefault(require("./@dbnx/navigation/Screen"));
const app = new navigation_1.default('/home');
const Router = () => app.Router({
    router: [
        {
            path: '/home/',
            title: 'Home',
            screen: Home,
        },
        {
            path: '/about',
            title: 'About',
            screen: About,
        },
        {
            path: '/settings',
            title: 'Settings',
            screen: Settings,
        }
    ]
});
function Root() {
    return (react_1.default.createElement(navigation_1.NavigationContainer, null,
        react_1.default.createElement(Screen, null),
        react_1.default.createElement(react_native_1.View, { style: { padding: 100 } },
            react_1.default.createElement(Router, null))));
}
function Screen() {
    const Render = new Screen_1.default();
    return (react_1.default.createElement(Render.Render, null,
        react_1.default.createElement(Render.screen, { path: '/home', title: 'Home', 
            // hasNavbar={true}
            // navbar={<MainNavbar
            //   title='Ahliya' children={<Home />}
            // />}
            isPrivate: true, privateState: true, screen: Home }),
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
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: () => navigate("/about") },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Go to About")),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: () => navigate("/settings") },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Go to Settings"))));
};
const About = ({ navigate }) => {
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.Text, { style: styles.title }, "\u2139\uFE0F About"),
        react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.button, onPress: () => navigate("/home") },
            react_1.default.createElement(react_native_1.Text, { style: styles.buttonText }, "Back to Home"))));
};
const Settings = ({ navigate }) => {
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
