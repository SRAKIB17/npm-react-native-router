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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterProvider = RouterProvider;
exports.useRouter = useRouter;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const url_1 = require("../utils/url");
const RouterContext = (0, react_1.createContext)({
    hash: "",
    hostname: "",
    origin: "",
    title: "",
    password: "",
    path: "",
    basePath: "",
    port: "",
    protocol: "",
    query: {},
    username: "",
    asPath: "",
    history: {
        back() {
        },
        get() {
            return [];
        },
    },
    push: (url, option) => __awaiter(void 0, void 0, void 0, function* () { }),
});
function RouterProvider({ basePath: basePath, children, setLoadingComponent, title }) {
    const navigationStack = (0, react_1.useRef)([]); // Manually manage navigation stack
    const parseBasePath = (0, url_1.urlParse)(basePath).path || '';
    const [screen, setScreen] = (0, react_1.useState)(parseBasePath);
    const locationParse = (0, url_1.urlParse)(screen);
    class history {
        constructor() {
            this.back = () => __awaiter(this, void 0, void 0, function* () {
                var _a, _b;
                if (((_a = navigationStack.current) === null || _a === void 0 ? void 0 : _a.length) >= 1) {
                    setLoadingComponent(true);
                    navigationStack.current.pop();
                    setScreen(navigationStack.current[((_b = navigationStack === null || navigationStack === void 0 ? void 0 : navigationStack.current) === null || _b === void 0 ? void 0 : _b.length) - 1] || parseBasePath);
                    setLoadingComponent(false);
                }
                else {
                    setLoadingComponent(true);
                    setScreen(parseBasePath);
                    setLoadingComponent(false);
                }
            });
        }
        get() {
            return navigationStack.current;
        }
    }
    function push(path, option) {
        return __awaiter(this, void 0, void 0, function* () {
            // setLoadingComponent(true)
            setScreen(path);
            navigationStack.current.push(path);
            // setLoadingComponent(false)
        });
    }
    const historyConstructor = new history();
    const send_date = Object.assign({ basePath: parseBasePath, title: title, push, history: historyConstructor }, locationParse);
    (0, react_1.useEffect)(() => {
        const backAction = () => {
            if (navigationStack.current.length >= 1) {
                // If there are screens in the navigation stack, navigate back manually
                // navigationStack.current.pop(); // Remove current screen
                // console.log(navigationStack.current.pop(), 'sfsdlfsdlf')
                historyConstructor === null || historyConstructor === void 0 ? void 0 : historyConstructor.back();
                return true; // Return true to prevent default back button behavior
            }
            else {
                // If there are no more screens in the stack, show an exit confirmation alert
                react_native_1.Alert.alert('Exit App', 'Do you want to exit the app?', [
                    { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                    { text: 'OK', onPress: () => react_native_1.BackHandler.exitApp() },
                ], { cancelable: false });
                return true; // Return true to prevent default back button behavior
            }
        };
        const backHandler = react_native_1.BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => backHandler.remove();
    }, [navigationStack, screen]);
    return (react_1.default.createElement(RouterContext.Provider, { value: send_date }, children));
}
function useRouter() {
    const location = (0, react_1.useContext)(RouterContext);
    return location;
}
