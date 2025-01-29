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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const assets_images_1 = require("../../assets/assets_images");
const MultipleCheckbox = ({ style, storeValue, setStoreValue, data, asset }) => {
    const [isChecked, setChecked] = (0, react_1.useState)(storeValue === null || storeValue === void 0 ? void 0 : storeValue.includes(data));
    (0, react_1.useEffect)(() => {
        setChecked(storeValue === null || storeValue === void 0 ? void 0 : storeValue.includes(data));
    }, [storeValue]);
    const toggleCheckbox = () => {
        const filter = storeValue.filter((check) => check != data);
        if (!isChecked) {
            setChecked(true);
            setStoreValue([...filter, data]);
        }
        else {
            setChecked(false);
            setStoreValue([...filter]);
        }
    };
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: toggleCheckbox },
        react_1.default.createElement(react_native_1.View, { style: { padding: 4 } }, isChecked ? (react_1.default.createElement(react_native_1.Image, { source: (asset ? asset.checked : assets_images_1.assets_images.checkbox_round_checked), style: [{ width: 24, height: 24 }, style] })) : (react_1.default.createElement(react_native_1.Image, { source: (asset ? asset.unchecked : assets_images_1.assets_images.checkbox_round), style: [{ width: 24, height: 24 }, style] })))));
};
exports.default = MultipleCheckbox;
