"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const Toast = ({ type, text }) => {
    if (type == 'gravity-offset') {
        return react_native_1.ToastAndroid.showWithGravityAndOffset(text, react_native_1.ToastAndroid.LONG, react_native_1.ToastAndroid.BOTTOM, 25, 50);
    }
    else if (type == 'gravity') {
        return react_native_1.ToastAndroid.showWithGravity(text, react_native_1.ToastAndroid.SHORT, react_native_1.ToastAndroid.CENTER);
    }
    else {
        return react_native_1.ToastAndroid.show(text, react_native_1.ToastAndroid.SHORT);
    }
};
exports.default = Toast;
