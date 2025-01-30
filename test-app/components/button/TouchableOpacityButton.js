"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TouchableOpacityButton;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const StyledText_1 = __importDefault(require("../text/StyledText"));
const global_1 = require("../global");
const src_1 = require("../../navigators/src");
function TouchableOpacityButton({ text, onPress, disableStyle, containerStyle, disabled = false, image = 0, numberOfLines, image_url = '', imageStyle, textStyle }) {
    const { colors } = (0, src_1.useTheme)();
    const styles = react_native_1.StyleSheet.create({
        root: {
            backgroundColor: colors.secondary,
            height: 35,
            display: "flex",
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: colors.border,
        },
    });
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onPress, disabled: disabled },
        react_1.default.createElement(react_native_1.View, { style: [
                styles.root,
                {
                    backgroundColor: (disabled ?
                        colors.grey
                        :
                            styles.root.backgroundColor)
                },
                containerStyle,
                (disabled ? disableStyle : containerStyle)
            ] },
            react_1.default.createElement(react_native_1.View, null,
                Boolean(image) &&
                    react_1.default.createElement(react_native_1.Image, { source: image, style: [{ width: 20, height: 20, objectFit: 'contain' }, imageStyle] }),
                Boolean(image_url) &&
                    react_1.default.createElement(react_native_1.Image, { source: {
                            uri: image_url,
                            cache: 'force-cache'
                        }, style: [{ width: 20, height: 20, objectFit: 'contain' }, imageStyle] })),
            react_1.default.createElement(react_native_1.View, null, Boolean(text) &&
                react_1.default.createElement(StyledText_1.default, { numberOfLines: numberOfLines, style: [global_1.global_styles.text_lg, textStyle] }, text)))));
}
;
