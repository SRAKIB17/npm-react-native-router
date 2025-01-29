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
const LoaderComponent_1 = __importDefault(require("./LoaderComponent"));
const NavigationContainer_1 = require("./NavigationContainer");
const DrawerContainer_1 = require("./drawer/DrawerContainer");
const RouterContext_1 = require("./router/RouterContext");
const Footer_1 = __importDefault(require("./shared/Footer"));
const MainNavbar_1 = __importDefault(require("./shared/MainNavbar"));
const NavbarTitleBackButton_1 = __importDefault(require("./shared/NavbarTitleBackButton"));
const ThemeContext_1 = require("./theming/ThemeContext");
class RenderScreen {
    Render({ children }) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const { customDynamicNavbar, setCustomDynamicNavbar, loadingComponent, setLoadingComponent, } = (0, NavigationContainer_1.useNavigation)();
        const { setDrawerConfig, drawerConfig } = (0, DrawerContainer_1.userDrawer)();
        const { colors } = (0, ThemeContext_1.useTheme)();
        const { setAllParams, params, config: navFooterConfig, setTitle } = (0, NavigationContainer_1.userRenderContext)();
        const checkNavFooterConfig = (navFooterConfig) && Boolean((_a = Object === null || Object === void 0 ? void 0 : Object.values(navFooterConfig)) === null || _a === void 0 ? void 0 : _a.length);
        const router = (0, RouterContext_1.useRouter)();
        const { query, hash, path, asPath, push, basePath } = router;
        const rest = {
            params,
            setTitle,
            customDynamicNavbar,
            setCustomDynamicNavbar,
            loadingComponent,
            setLoadingComponent,
        };
        const [fadeAnim] = (0, react_1.useState)(new react_native_1.Animated.Value(0)); // Initial opacity: 0
        (0, react_1.useEffect)(() => {
            // Fade in animation when Screen1 mounts
            react_native_1.Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        }, [fadeAnim]);
        if (Array.isArray(children)) {
            let params = {};
            const findScreen = (children === null || children === void 0 ? void 0 : children.find((component) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                const getPath = (path && (path === null || path === void 0 ? void 0 : path.lastIndexOf('/')) == (path === null || path === void 0 ? void 0 : path.length) - 1) ? path.slice(0, -1) : path;
                const routePath = (((_a = component === null || component === void 0 ? void 0 : component.props) === null || _a === void 0 ? void 0 : _a.path) && ((_c = (_b = component === null || component === void 0 ? void 0 : component.props) === null || _b === void 0 ? void 0 : _b.path) === null || _c === void 0 ? void 0 : _c.lastIndexOf('/')) == ((_e = (_d = component === null || component === void 0 ? void 0 : component.props) === null || _d === void 0 ? void 0 : _d.path) === null || _e === void 0 ? void 0 : _e.length) - 1) ? (_f = component === null || component === void 0 ? void 0 : component.props) === null || _f === void 0 ? void 0 : _f.path.slice(0, -1) : (_g = component === null || component === void 0 ? void 0 : component.props) === null || _g === void 0 ? void 0 : _g.path;
                params = getParams({
                    path: getPath,
                    urlPattern: routePath
                });
                const check_path = routePath == getPath || ((_h = Object === null || Object === void 0 ? void 0 : Object.values(params)) === null || _h === void 0 ? void 0 : _h.length);
                const privateCheck = (((_j = component === null || component === void 0 ? void 0 : component.props) === null || _j === void 0 ? void 0 : _j.isPrivate) ? (_k = component === null || component === void 0 ? void 0 : component.props) === null || _k === void 0 ? void 0 : _k.privateState : true);
                return check_path && (privateCheck);
            })) ||
                (children === null || children === void 0 ? void 0 : children.find((not_found) => {
                    var _a;
                    return ((_a = not_found === null || not_found === void 0 ? void 0 : not_found.props) === null || _a === void 0 ? void 0 : _a.path) == '*';
                }));
            (0, react_1.useEffect)(() => {
                var _a, _b, _c, _d;
                if (((_a = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _a === void 0 ? void 0 : _a.drawerConfig) && ((_c = Object === null || Object === void 0 ? void 0 : Object.values((_b = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _b === void 0 ? void 0 : _b.drawerConfig)) === null || _c === void 0 ? void 0 : _c.length)) {
                    setDrawerConfig(Object.assign(Object.assign({}, drawerConfig), (_d = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _d === void 0 ? void 0 : _d.drawerConfig));
                }
                return () => {
                };
            }, [findScreen]);
            (0, react_1.useEffect)(() => {
                var _a;
                setAllParams(params);
                rest.params = params;
                setTitle((_a = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _a === void 0 ? void 0 : _a.title);
                return () => {
                    var _a;
                    rest.params = params;
                    setTitle((_a = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _a === void 0 ? void 0 : _a.title);
                    setAllParams(params);
                };
            }, [path, asPath]);
            const Render = ((_b = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _b === void 0 ? void 0 : _b.screen) || function () {
                return (react_1.default.createElement(react_native_1.View, { style: {
                        flex: 1,
                    } },
                    react_1.default.createElement(react_native_1.View, { style: {
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            gap: 16
                        } },
                        react_1.default.createElement(react_native_1.Text, { style: { color: "black", fontSize: 32, fontWeight: '700' } }, "NOT FOUND"),
                        react_1.default.createElement(react_native_1.Button, { title: 'Home', onPress: () => {
                                push(basePath);
                            } }))));
            };
            return (react_1.default.createElement(react_1.default.Fragment, null,
                Boolean(customDynamicNavbar) ?
                    customDynamicNavbar
                    :
                        (((_c = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _c === void 0 ? void 0 : _c.navbar) ||
                            (((_d = [undefined, true]) === null || _d === void 0 ? void 0 : _d.includes((_e = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _e === void 0 ? void 0 : _e.hasNavbar)) ?
                                react_1.default.createElement(react_native_1.View, null, basePath == asPath ?
                                    react_1.default.createElement(react_1.default.Fragment, null, (checkNavFooterConfig && (navFooterConfig === null || navFooterConfig === void 0 ? void 0 : navFooterConfig.homeNavbar)) ?
                                        navFooterConfig === null || navFooterConfig === void 0 ? void 0 : navFooterConfig.homeNavbar
                                        :
                                            react_1.default.createElement(MainNavbar_1.default, { title: (_f = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _f === void 0 ? void 0 : _f.title }))
                                    :
                                        react_1.default.createElement(react_1.default.Fragment, null, (checkNavFooterConfig && (navFooterConfig === null || navFooterConfig === void 0 ? void 0 : navFooterConfig.navbar)) ?
                                            navFooterConfig === null || navFooterConfig === void 0 ? void 0 : navFooterConfig.navbar :
                                            react_1.default.createElement(NavbarTitleBackButton_1.default, { title: (_g = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _g === void 0 ? void 0 : _g.title })))
                                :
                                    null)),
                react_1.default.createElement(react_native_1.View, { style: {
                        flex: 1,
                        backgroundColor: colors === null || colors === void 0 ? void 0 : colors.background
                    } }, loadingComponent ?
                    react_1.default.createElement(LoaderComponent_1.default, null) :
                    react_1.default.createElement(Render, Object.assign({}, rest))),
                (((_h = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _h === void 0 ? void 0 : _h.footer) ||
                    (((_j = findScreen === null || findScreen === void 0 ? void 0 : findScreen.props) === null || _j === void 0 ? void 0 : _j.hasFooter) &&
                        react_1.default.createElement(react_1.default.Fragment, null, (checkNavFooterConfig && (navFooterConfig === null || navFooterConfig === void 0 ? void 0 : navFooterConfig.footer)) ?
                            navFooterConfig === null || navFooterConfig === void 0 ? void 0 : navFooterConfig.footer :
                            react_1.default.createElement(Footer_1.default, null))))));
        }
        // ONLY ONE CHILDREN
        else {
            let params = getParams({
                path: path,
                urlPattern: (_k = children === null || children === void 0 ? void 0 : children.props) === null || _k === void 0 ? void 0 : _k.path
            });
            (0, react_1.useEffect)(() => {
                var _a;
                setAllParams(params);
                rest.params = params;
                setTitle((_a = children === null || children === void 0 ? void 0 : children.props) === null || _a === void 0 ? void 0 : _a.title);
                return () => {
                    var _a;
                    setAllParams(params);
                    rest.params = params;
                    setTitle((_a = children === null || children === void 0 ? void 0 : children.props) === null || _a === void 0 ? void 0 : _a.title);
                };
            }, [path, asPath]);
            const Render = ((_l = children === null || children === void 0 ? void 0 : children.props) === null || _l === void 0 ? void 0 : _l.screen) || function () {
                return (react_1.default.createElement(react_native_1.View, { style: {
                        flex: 1,
                    } },
                    react_1.default.createElement(react_native_1.View, { style: {
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            gap: 16
                        } },
                        react_1.default.createElement(react_native_1.Text, { style: { color: "black", fontSize: 32, fontWeight: '700' } }, "NOT FOUND"),
                        react_1.default.createElement(react_native_1.Button, { title: 'Home', onPress: () => {
                                push(basePath);
                            } }))));
            };
            return (react_1.default.createElement(react_1.default.Fragment, null,
                Boolean(customDynamicNavbar) ?
                    customDynamicNavbar
                    :
                        (((_m = children === null || children === void 0 ? void 0 : children.props) === null || _m === void 0 ? void 0 : _m.navbar) ||
                            (((_o = [undefined, true]) === null || _o === void 0 ? void 0 : _o.includes((_p = children === null || children === void 0 ? void 0 : children.props) === null || _p === void 0 ? void 0 : _p.hasNavbar)) ?
                                react_1.default.createElement(react_native_1.View, null, basePath == asPath ?
                                    react_1.default.createElement(react_1.default.Fragment, null, (checkNavFooterConfig && (navFooterConfig === null || navFooterConfig === void 0 ? void 0 : navFooterConfig.homeNavbar)) ?
                                        navFooterConfig === null || navFooterConfig === void 0 ? void 0 : navFooterConfig.homeNavbar
                                        :
                                            react_1.default.createElement(MainNavbar_1.default, { title: (_q = children === null || children === void 0 ? void 0 : children.props) === null || _q === void 0 ? void 0 : _q.title }))
                                    :
                                        react_1.default.createElement(react_1.default.Fragment, null, (checkNavFooterConfig && (navFooterConfig === null || navFooterConfig === void 0 ? void 0 : navFooterConfig.navbar)) ?
                                            navFooterConfig === null || navFooterConfig === void 0 ? void 0 : navFooterConfig.navbar
                                            :
                                                react_1.default.createElement(NavbarTitleBackButton_1.default, { title: (_r = children === null || children === void 0 ? void 0 : children.props) === null || _r === void 0 ? void 0 : _r.title })))
                                :
                                    null)),
                react_1.default.createElement(react_native_1.View, { style: {
                        flex: 1,
                        backgroundColor: colors === null || colors === void 0 ? void 0 : colors.background
                    } }, loadingComponent ?
                    react_1.default.createElement(LoaderComponent_1.default, null) :
                    react_1.default.createElement(Render, Object.assign({}, rest))),
                (((_s = children === null || children === void 0 ? void 0 : children.props) === null || _s === void 0 ? void 0 : _s.footer) || (((_t = children === null || children === void 0 ? void 0 : children.props) === null || _t === void 0 ? void 0 : _t.hasFooter) &&
                    react_1.default.createElement(react_1.default.Fragment, null, (checkNavFooterConfig && (navFooterConfig === null || navFooterConfig === void 0 ? void 0 : navFooterConfig.footer)) ?
                        navFooterConfig === null || navFooterConfig === void 0 ? void 0 : navFooterConfig.footer :
                        react_1.default.createElement(Footer_1.default, null))))));
        }
    }
    screen({ screen, path: link, hasNavbar = true }) {
        return null;
    }
}
exports.default = RenderScreen;
const getParams = ({ urlPattern, path }) => {
    var _a;
    const patternSegments = urlPattern === null || urlPattern === void 0 ? void 0 : urlPattern.split('/');
    const pathSegments = path === null || path === void 0 ? void 0 : path.split('/');
    if ((patternSegments === null || patternSegments === void 0 ? void 0 : patternSegments.length) === (pathSegments === null || pathSegments === void 0 ? void 0 : pathSegments.length) && urlPattern !== path) {
        const paramRegex = /\/:([^/]+)/g;
        const parameterRegex = new RegExp(urlPattern === null || urlPattern === void 0 ? void 0 : urlPattern.replace(/:[^/]+/g, '([^/]+)'));
        const match = path === null || path === void 0 ? void 0 : path.match(parameterRegex);
        if (match) {
            const parameterValues = match === null || match === void 0 ? void 0 : match.slice(1);
            const paramsKeyValue = (_a = urlPattern === null || urlPattern === void 0 ? void 0 : urlPattern.match(paramRegex)) === null || _a === void 0 ? void 0 : _a.map((key, index) => {
                return {
                    [key === null || key === void 0 ? void 0 : key.slice(2)]: parameterValues[index]
                };
            });
            if (paramsKeyValue === null || paramsKeyValue === void 0 ? void 0 : paramsKeyValue.length) {
                return paramsKeyValue.reduce(function (total, value) {
                    return Object.assign(Object.assign({}, total), value);
                }, {});
            }
            else {
                return {};
            }
        }
        else {
            // console.log("Path does not match the expected pattern.");
            return {};
        }
    }
    else {
        // console.log("Path does not match the expected pattern.");
        return {};
    }
};
