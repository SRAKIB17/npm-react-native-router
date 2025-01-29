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
exports.useNavigation = exports.userDrawer = exports.useParams = exports.useTheme = exports.useRouter = exports.RenderScreen = exports.NavbarTitleBackButton = exports.NavigationContainer = exports.MainNavbar = exports.DrawerContainer = void 0;
const NavigationContainer_1 = __importStar(require("./NavigationContainer"));
exports.NavigationContainer = NavigationContainer_1.default;
Object.defineProperty(exports, "useNavigation", { enumerable: true, get: function () { return NavigationContainer_1.useNavigation; } });
const RenderScreen_1 = __importDefault(require("./RenderScreen"));
exports.RenderScreen = RenderScreen_1.default;
const ThemeContext_1 = require("./theming/ThemeContext");
Object.defineProperty(exports, "useTheme", { enumerable: true, get: function () { return ThemeContext_1.useTheme; } });
const ParamsContext_1 = require("./params/ParamsContext");
Object.defineProperty(exports, "useParams", { enumerable: true, get: function () { return ParamsContext_1.useParams; } });
const RouterContext_1 = require("./router/RouterContext");
Object.defineProperty(exports, "useRouter", { enumerable: true, get: function () { return RouterContext_1.useRouter; } });
const DrawerContainer_1 = __importStar(require("./drawer/DrawerContainer"));
exports.DrawerContainer = DrawerContainer_1.default;
Object.defineProperty(exports, "userDrawer", { enumerable: true, get: function () { return DrawerContainer_1.userDrawer; } });
const NavbarTitleBackButton_1 = __importDefault(require("./shared/NavbarTitleBackButton"));
exports.NavbarTitleBackButton = NavbarTitleBackButton_1.default;
const MainNavbar_1 = __importDefault(require("./shared/MainNavbar"));
exports.MainNavbar = MainNavbar_1.default;
