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
exports.default = Input;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Toast_1 = __importDefault(require("../toast/Toast"));
const global_1 = require("../global");
const StyledText_1 = __importDefault(require("../text/StyledText"));
const navigators_1 = require("../../navigators");
function Input({ asset, type = "text", defaultValue = '', value, setValue = () => { }, placeholder = 'Write something..', pattern, containerStyle, style = {}, toast = 'Please input valid info', multiline = false, autoFocus = false, }) {
    const [error, setError] = (0, react_1.useState)('');
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const onChangeTextHandle = (text) => {
        setError('');
        if (pattern) {
            if (!(pattern === null || pattern === void 0 ? void 0 : pattern.test(text === null || text === void 0 ? void 0 : text.trim())) && pattern) {
                setError(toast);
            }
            else {
                setError('');
            }
        }
        setValue(text === null || text === void 0 ? void 0 : text.trim());
        setInputValue(text === null || text === void 0 ? void 0 : text.trim());
    };
    const { colors } = (0, navigators_1.useTheme)();
    const onBlurHandle = () => {
        if (!(pattern === null || pattern === void 0 ? void 0 : pattern.test(inputValue)) && pattern) {
            setValue('');
            (0, Toast_1.default)({ text: toast });
        }
        else {
            setValue(inputValue);
            setError('');
        }
    };
    const styles = react_native_1.StyleSheet.create({
        input: {
            backgroundColor: colors.card,
            borderColor: colors.border,
            color: colors.text,
            borderRadius: 4,
            borderWidth: 1,
            paddingLeft: 16,
            flex: 1,
            height: 48,
        },
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        Boolean(error) &&
            react_1.default.createElement(react_native_1.View, { style: { paddingVertical: 3 } },
                react_1.default.createElement(StyledText_1.default, { style: [{ color: colors.danger }, global_1.global_styles.text_xs] }, error)),
        react_1.default.createElement(react_native_1.View, { style: [containerStyle] },
            react_1.default.createElement(react_native_1.View, { style: (asset ? [
                    styles.input,
                    {
                        display: "flex",
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 4,
                    },
                    style
                ] : [{ height: 48 }, style]) },
                asset ?
                    react_1.default.createElement(react_native_1.Image, { source: asset, style: {
                            width: 20,
                            height: 20,
                            objectFit: 'contain',
                            position: 'absolute',
                            left: 6,
                            marginLeft: 4
                        } })
                    :
                        react_1.default.createElement(react_1.default.Fragment, null),
                react_1.default.createElement(react_native_1.TextInput, { autoFocus: autoFocus, multiline: multiline, onBlur: (text) => onBlurHandle(), defaultValue: defaultValue, placeholderTextColor: 'grey', onChangeText: onChangeTextHandle, secureTextEntry: type == 'password', value: inputValue, placeholder: placeholder, style: ([(asset ? {
                            flex: 1,
                            paddingLeft: 20,
                            fontSize: 16,
                            color: colors === null || colors === void 0 ? void 0 : colors.text,
                        } : Object.assign(Object.assign({}, styles.input), style))]) })))));
}
