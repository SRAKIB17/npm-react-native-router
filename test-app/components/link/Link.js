"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Link;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const navigators_1 = require("../../navigators");
const StyledText_1 = __importDefault(require("../text/StyledText"));
function Link({ href = '', children, style = {} }) {
    const { colors } = (0, navigators_1.useTheme)();
    const router = (0, navigators_1.useRouter)();
    return (react_1.default.createElement(react_native_1.Pressable, { onPress: () => router.push(href) },
        react_1.default.createElement(StyledText_1.default, { style: [{ color: colors.link }, style] }, children)));
}
