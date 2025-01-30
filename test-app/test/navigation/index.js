"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _App_router, _App_location, _App_basePath;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationContainer = NavigationContainer;
const url_1 = require("./utils/url");
class Navigation {
}
Navigation.router = [];
Navigation.basePath = '';
function NavigationContainer({ children }) {
    const x = Navigation.router;
    return children;
}
class App {
    constructor(basePath, config) {
        _App_router.set(this, []);
        _App_location.set(this, void 0);
        _App_basePath.set(this, '');
        this.Router = ({ router }) => {
            if (!(router === null || router === void 0 ? void 0 : router.length))
                return null;
            __classPrivateFieldSet(this, _App_router, router, "f");
            return this.Render(); // ✅ Arrow function ensures correct `this`
        };
        this.navigate = (path) => {
            __classPrivateFieldSet(this, _App_basePath, path, "f");
            __classPrivateFieldSet(this, _App_location, (0, url_1.urlParse)(__classPrivateFieldGet(this, _App_basePath, "f")), "f");
            this.Router({ router: __classPrivateFieldGet(this, _App_router, "f") });
        };
        this.config = config;
        __classPrivateFieldSet(this, _App_basePath, basePath, "f");
        __classPrivateFieldSet(this, _App_location, (0, url_1.urlParse)(__classPrivateFieldGet(this, _App_basePath, "f")), "f");
        this.Router = this.Router.bind(this); // ✅ Fix binding issue
    }
    Render() {
        var _a;
        const props = {
            navigate: this.navigate
        };
        let parseBasePath = ((_a = __classPrivateFieldGet(this, _App_location, "f")) === null || _a === void 0 ? void 0 : _a.path) || '';
        console.log(__classPrivateFieldGet(this, _App_basePath, "f"));
        const find = __classPrivateFieldGet(this, _App_router, "f").find((route) => {
            var _a;
            return ((_a = (0, url_1.urlParse)(route.path)) === null || _a === void 0 ? void 0 : _a.path) === parseBasePath;
        });
        if (find) {
            return find === null || find === void 0 ? void 0 : find.screen(props);
        }
        return null;
    }
    ;
}
_App_router = new WeakMap(), _App_location = new WeakMap(), _App_basePath = new WeakMap();
exports.default = App;
