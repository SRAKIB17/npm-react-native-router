"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.global_styles = void 0;
const react_native_1 = require("react-native");
const text = react_native_1.StyleSheet.create({
    text_5xl: {
        fontSize: 40,
    },
    text_4xl: {
        fontSize: 32,
    },
    text_3xl: {
        fontSize: 28,
    },
    text_2xl: {
        fontSize: 24,
    },
    text_xl: {
        fontSize: 20,
    },
    text_lg: {
        fontSize: 18
    },
    text_base: {
        fontSize: 16
    },
    text_sm: {
        fontSize: 14
    },
    text_xs: {
        fontSize: 12
    },
});
const font = react_native_1.StyleSheet.create({
    font_thin: {
        fontWeight: "100"
    },
    font_extralight: {
        fontWeight: "200"
    },
    font_light: {
        fontWeight: "300"
    },
    font_normal: {
        fontWeight: "400"
    },
    font_medium: {
        fontWeight: "500"
    },
    font_semibold: {
        fontWeight: "600"
    },
    font_bold: {
        fontWeight: "700"
    },
    font_extrabold: {
        fontWeight: "800"
    }
});
exports.global_styles = react_native_1.StyleSheet.create(Object.assign(Object.assign({ container: {
        paddingVertical: 16,
        // paddingTop: StatusBar.currentHeight,
        marginHorizontal: 10,
    } }, text), font));
