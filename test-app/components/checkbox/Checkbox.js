"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const assets_images_1 = require("../../assets/assets_images");
// import { assets_images } from 'h';
const Checkbox = ({ isChecked = false, setChecked = () => { }, style, asset }) => {
    const toggleCheckbox = () => {
        setChecked(!isChecked);
    };
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: toggleCheckbox }, isChecked ? (react_1.default.createElement(react_native_1.Image, { source: (asset ? asset.checked : assets_images_1.assets_images.checkbox_round_checked), style: [{ width: 24, height: 24 }, style] })) : (react_1.default.createElement(react_native_1.Image, { source: (asset ? asset.unchecked : assets_images_1.assets_images.checkbox_round), style: [{ width: 24, height: 24 }, style] }))));
};
exports.default = Checkbox;
