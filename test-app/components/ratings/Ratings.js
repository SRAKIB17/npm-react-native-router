"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Ratings;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const assets_images_1 = require("../../assets/assets_images");
function Ratings({ size = 20, rating = 0, asset }) {
    const ratings = Math.round(rating);
    return (react_1.default.createElement(react_native_1.View, { style: { flexDirection: 'row', gap: 1 } }, [...Array(5)].map((r, index) => {
        const check = index + 1 <= ratings ?
            ((asset === null || asset === void 0 ? void 0 : asset.fill) ? asset.fill : assets_images_1.assets_images)
            :
                ((asset === null || asset === void 0 ? void 0 : asset.fill) ? asset.empty : assets_images_1.assets_images.ratings_full_empty);
        return (react_1.default.createElement(react_native_1.View, { key: index },
            react_1.default.createElement(react_native_1.Image, { source: check, style: { width: size, height: size } })));
    })));
}
