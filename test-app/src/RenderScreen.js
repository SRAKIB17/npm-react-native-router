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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const NavigationContainer_1 = require("./NavigationContainer");
const RouterContext_1 = require("./router/RouterContext");
const Footer_1 = __importDefault(require("./shared/Footer"));
const MainNavbar_1 = __importDefault(require("./shared/MainNavbar"));
const NavbarTitleBackButton_1 = __importDefault(require("./shared/NavbarTitleBackButton"));
const ThemeContext_1 = require("./theming/ThemeContext");
class RenderScreen {
    constructor() {
        this.Render = this.Render.bind(this);
    }
    Render({ children }) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const { NavigationPropertyPass: NavigationProps, title, setTitle } = (0, react_1.useContext)(NavigationContainer_1.NavigationContext);
        const config = NavigationProps === null || NavigationProps === void 0 ? void 0 : NavigationProps.config;
        // const { setDrawerConfig, drawerConfig } = userDrawer()
        const { colors } = (0, ThemeContext_1.useTheme)();
        const router = (0, RouterContext_1.useRouter)();
        const { path, asPath, push, basePath } = router;
        const rest = {
            params: NavigationProps === null || NavigationProps === void 0 ? void 0 : NavigationProps.params,
            navigate: push,
            setTitle: setTitle
            // customDynamicNavbar,
            // setCustomDynamicNavbar,
            // loadingComponent,
            // setLoadingComponent,
        };
        // const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity: 0
        // useEffect(() => {
        //     // Fade in animation when Screen1 mounts
        //     Animated.timing(fadeAnim, {
        //         toValue: 1,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }).start();
        // }, [fadeAnim]);
        if (Array.isArray(children)) {
            const findScreen = (children === null || children === void 0 ? void 0 : children.find((component) => {
                var _a, _b, _c;
                let routePath = (_a = component === null || component === void 0 ? void 0 : component.props) === null || _a === void 0 ? void 0 : _a.path;
                if (routePath === null || routePath === void 0 ? void 0 : routePath.endsWith('/')) {
                    routePath = routePath.slice(0, -1);
                }
                let params = getParams({
                    path: path || "",
                    urlPattern: routePath
                });
                rest.params = params;
                NavigationProps.params = params === null || params === void 0 ? void 0 : params.params;
                const check_path = routePath == path || (params === null || params === void 0 ? void 0 : params.success);
                const privateCheck = (((_b = component === null || component === void 0 ? void 0 : component.props) === null || _b === void 0 ? void 0 : _b.isPrivate) ? (_c = component === null || component === void 0 ? void 0 : component.props) === null || _c === void 0 ? void 0 : _c.privateState : true);
                return check_path && (privateCheck);
            })) || (children === null || children === void 0 ? void 0 : children.find((not_found) => {
                var _a;
                return ((_a = not_found === null || not_found === void 0 ? void 0 : not_found.props) === null || _a === void 0 ? void 0 : _a.path) == '*';
            }));
            // useEffect(() => {
            //     if (findScreen?.props?.drawerConfig && Object?.values(findScreen?.props?.drawerConfig)?.length) {
            //         setDrawerConfig({
            //             ...drawerConfig,
            //             ...findScreen?.props?.drawerConfig
            //         })
            //     }
            //     return () => {
            //     }
            // }, [findScreen])
            (0, react_1.useEffect)(() => {
                var _a;
                setTitle((_a = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _a === void 0 ? void 0 : _a.title);
                return () => {
                    var _a;
                    setTitle((_a = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _a === void 0 ? void 0 : _a.title);
                };
            }, [path, asPath]);
            const Render = ((_a = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _a === void 0 ? void 0 : _a.screen) || function () {
                return (react_1.default.createElement(react_native_1.View, { style: {
                        backgroundColor: colors.background,
                        flex: 1,
                    } },
                    react_1.default.createElement(react_native_1.View, { style: {
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            gap: 16
                        } },
                        react_1.default.createElement(react_native_1.Text, { style: { color: colors.text, fontSize: 36, fontWeight: '700' } }, "NOT FOUND"),
                        react_1.default.createElement(react_native_1.Button, { title: 'Home', onPress: () => {
                                push(basePath);
                            } }))));
            };
            return (react_1.default.createElement(react_1.default.Fragment, null,
                // Boolean(customDynamicNavbar) ?
                //     customDynamicNavbar
                //     :
                (((_b = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _b === void 0 ? void 0 : _b.headerBar) ||
                    (((_c = [undefined, true]) === null || _c === void 0 ? void 0 : _c.includes((_d = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _d === void 0 ? void 0 : _d.hasHeaderBar)) ?
                        react_1.default.createElement(react_native_1.View, null, basePath == asPath ?
                            react_1.default.createElement(react_1.default.Fragment, null, (config === null || config === void 0 ? void 0 : config.mainHeader) ?
                                config === null || config === void 0 ? void 0 : config.mainHeader
                                :
                                    react_1.default.createElement(MainNavbar_1.default, { title: title }))
                            :
                                react_1.default.createElement(react_1.default.Fragment, null, (config === null || config === void 0 ? void 0 : config.headerBar) ?
                                    config === null || config === void 0 ? void 0 : config.headerBar
                                    :
                                        react_1.default.createElement(NavbarTitleBackButton_1.default, { title: title })))
                        :
                            null)),
                react_1.default.createElement(react_native_1.View, { style: {
                        flex: 1,
                        backgroundColor: colors === null || colors === void 0 ? void 0 : colors.background
                    } }, 
                // loadingComponent ?
                //     <LoaderComponent /> :
                react_1.default.createElement(Render, Object.assign({}, rest))),
                (((_e = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _e === void 0 ? void 0 : _e.bottomTabs) ||
                    (((_f = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _f === void 0 ? void 0 : _f.hasBottomTabs) &&
                        react_1.default.createElement(react_1.default.Fragment, null, (config === null || config === void 0 ? void 0 : config.bottomTabs) ?
                            config === null || config === void 0 ? void 0 : config.bottomTabs :
                            react_1.default.createElement(Footer_1.default, null))))));
        }
        // ONLY ONE CHILDREN
        else {
            let params = getParams({
                path: path,
                urlPattern: (_g = children === null || children === void 0 ? void 0 : children.props) === null || _g === void 0 ? void 0 : _g.path
            });
            rest.params = params;
            NavigationProps.params = params === null || params === void 0 ? void 0 : params.params;
            setTitle((_h = children === null || children === void 0 ? void 0 : children.props) === null || _h === void 0 ? void 0 : _h.title);
            const privateCheck = (((_j = children === null || children === void 0 ? void 0 : children.props) === null || _j === void 0 ? void 0 : _j.isPrivate) ? (_k = children === null || children === void 0 ? void 0 : children.props) === null || _k === void 0 ? void 0 : _k.privateState : true);
            const Render = (privateCheck && ((_l = children === null || children === void 0 ? void 0 : children.props) === null || _l === void 0 ? void 0 : _l.screen)) || function () {
                return (react_1.default.createElement(react_native_1.View, { style: {
                        flex: 1,
                    } },
                    react_1.default.createElement(react_native_1.View, { style: {
                            backgroundColor: colors.background,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            gap: 16
                        } },
                        react_1.default.createElement(react_native_1.Text, { style: { color: colors.text, fontSize: 36, fontWeight: '700' } }, "NOT FOUND"),
                        react_1.default.createElement(react_native_1.Button, { title: 'Home', onPress: () => {
                                push(basePath);
                            } }))));
            };
            return (react_1.default.createElement(react_1.default.Fragment, null,
                // Boolean(customDynamicNavbar) ?
                //     customDynamicNavbar
                //     :
                (((_m = children === null || children === void 0 ? void 0 : children.props) === null || _m === void 0 ? void 0 : _m.navbar) ||
                    (((_o = [undefined, true]) === null || _o === void 0 ? void 0 : _o.includes((_p = children === null || children === void 0 ? void 0 : children.props) === null || _p === void 0 ? void 0 : _p.hasNavbar)) ?
                        react_1.default.createElement(react_native_1.View, null, basePath == asPath ?
                            react_1.default.createElement(react_1.default.Fragment, null, (config === null || config === void 0 ? void 0 : config.mainHeader) ?
                                config === null || config === void 0 ? void 0 : config.mainHeader
                                :
                                    react_1.default.createElement(MainNavbar_1.default, { title: title }))
                            :
                                react_1.default.createElement(react_1.default.Fragment, null, (config === null || config === void 0 ? void 0 : config.headerBar) ?
                                    config === null || config === void 0 ? void 0 : config.headerBar
                                    :
                                        react_1.default.createElement(NavbarTitleBackButton_1.default, { title: title })))
                        :
                            null)),
                react_1.default.createElement(react_native_1.View, { style: {
                        flex: 1,
                        backgroundColor: colors === null || colors === void 0 ? void 0 : colors.background
                    } }, 
                // loadingComponent ?
                //     <LoaderComponent /> :
                react_1.default.createElement(Render, Object.assign({}, rest))),
                (((_q = children === null || children === void 0 ? void 0 : children.props) === null || _q === void 0 ? void 0 : _q.footer) || (((_r = children === null || children === void 0 ? void 0 : children.props) === null || _r === void 0 ? void 0 : _r.hasFooter) &&
                    react_1.default.createElement(react_1.default.Fragment, null, (config === null || config === void 0 ? void 0 : config.bottomTabs) ?
                        config === null || config === void 0 ? void 0 : config.bottomTabs :
                        react_1.default.createElement(Footer_1.default, null))))));
        }
    }
    screen({ screen, path: link, hasHeaderBar: hasNavbar = true }) {
        return null;
    }
}
exports.default = RenderScreen;
function getParams({ path, urlPattern }) {
    const params = {};
    // Trim leading and trailing slashes
    path = path.replace(/^\/+|\/+$/g, '');
    urlPattern = urlPattern.replace(/^\/+|\/+$/g, '');
    // Split into segments
    const pathSegments = path.split('/');
    const patternSegments = urlPattern.split('/');
    // If segment counts don't match and there's no wildcard or optional segments, return failure
    if (pathSegments.length !== patternSegments.length && !urlPattern.includes('*') && !(urlPattern === null || urlPattern === void 0 ? void 0 : urlPattern.includes("?"))) {
        return {
            success: false,
            params: {}
        };
    }
    // Iterate through segments
    for (let i = 0; i < patternSegments.length; i++) {
        const patternSegment = patternSegments[i];
        const pathSegment = pathSegments[i];
        // Handle wildcard segments
        if (patternSegment === '*') {
            params['wildcard'] = pathSegments.slice(i).join('/');
            return {
                success: true,
                params,
            }; // Stop further processing
        }
        // Handle optional segments (ending with '?')
        if (patternSegment.startsWith(':') && patternSegment.endsWith('?')) {
            const paramName = patternSegment.slice(1, -1); // Remove the '?'
            params[paramName] = pathSegment || null; // Use null if segment is missing
        }
        // Handle dynamic segments (starting with ':')
        else if (patternSegment.startsWith(':')) {
            const paramName = patternSegment.slice(1); // Remove the ':'
            if (/^[a-zA-Z0-9_]+$/.test(paramName)) { // Validate dynamic segment name
                params[paramName] = pathSegment;
            }
            else {
                return {
                    success: false,
                    params: {}
                }; // Return empty object if segment name is invalid
            }
        }
        // Handle static segments (must match exactly)
        else if (patternSegment !== pathSegment) {
            return {
                success: false,
                params: {}
            }; // If static segments don't match, return empty object
        }
    }
    return {
        success: true,
        params
    };
}
