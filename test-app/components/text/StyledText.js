"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const src_1 = require("../../src");
const global_1 = require("../global");
const StyledText = ({ children, style, numberOfLines }) => {
    const { colors } = (0, src_1.useTheme)();
    return (react_1.default.createElement(react_native_1.Text, { numberOfLines: numberOfLines, style: [global_1.global_styles.text_base, { color: colors.text }, style] }, children));
};
exports.default = StyledText;
