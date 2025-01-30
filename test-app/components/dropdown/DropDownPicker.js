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
exports.StatusBarHeight = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const ThemeContext_1 = require("../../src/theming/ThemeContext");
const PressableButton_1 = __importDefault(require("../button/PressableButton"));
const global_1 = require("../global");
const Input_1 = __importDefault(require("../input/Input"));
const MultipleCheckbox_1 = __importDefault(require("../shared/MultipleCheckbox"));
const StyledText_1 = __importDefault(require("../text/StyledText"));
const Toast_1 = __importDefault(require("../toast/Toast"));
const assets_images_1 = require("../../assets/assets_images");
const { height, width } = react_native_1.Dimensions.get('window');
const Width = (num) => width * (num / 100);
const Height = (num) => height * (num / 100);
exports.StatusBarHeight = react_native_1.StatusBar.currentHeight || 0;
function DropDownPicker({ hiddenArrow = false, disableStyle, containerStyle, width, multipleConfig = {
    hasMultiple: false,
    setStoreValue: () => { },
    storeValue: [],
    selectedTitle: "Selected",
    resetTitle: "Reset",
    asset: {}
}, disable = false, singleConfig = {
    value: {
        label: "",
        value: ""
    },
    defaultValue: {
        label: "",
        value: ""
    },
    setValue: () => { }
}, items, placeholderConfig = {
    placeholder: 'Please select',
    searchPlaceholder: "Search for something",
    noResultsFoundPlaceholder: "No results found",
}, imageStyle, textStyle, asset, animationType = 'fade', }) {
    const { colors } = (0, ThemeContext_1.useTheme)();
    const { hasMultiple, asset: checkbox_asset, setStoreValue, storeValue, resetTitle, selectedTitle } = multipleConfig;
    const { placeholder, noResultsFoundPlaceholder, searchPlaceholder } = placeholderConfig;
    const { defaultValue, setValue, value } = singleConfig;
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    const [searchValue, setSearchValue] = (0, react_1.useState)('');
    const [searchItems, setSearchItems] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const filter = items === null || items === void 0 ? void 0 : items.filter(r => {
            var _a, _b, _c, _d;
            const value = (_b = (_a = r === null || r === void 0 ? void 0 : r.value) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
            const label = (_d = (_c = r === null || r === void 0 ? void 0 : r.label) === null || _c === void 0 ? void 0 : _c.toLowerCase()) === null || _d === void 0 ? void 0 : _d.includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLowerCase());
            return value || label;
        });
        if (!Boolean(filter === null || filter === void 0 ? void 0 : filter.length) && Boolean(searchValue)) {
            (0, Toast_1.default)({ text: noResultsFoundPlaceholder });
        }
        if (filter === null || filter === void 0 ? void 0 : filter.length) {
            setSearchItems(filter);
        }
        else {
            setSearchItems(items);
        }
    }, [searchValue, items]);
    (0, react_1.useEffect)(() => {
        if (defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.label) {
            setValue(defaultValue);
        }
        return () => {
        };
    }, [defaultValue]);
    const height = ((storeValue === null || storeValue === void 0 ? void 0 : storeValue.length) > 3 && hasMultiple) ? (storeValue === null || storeValue === void 0 ? void 0 : storeValue.length) / 6 * 48 : 48;
    const styles = react_native_1.StyleSheet.create({
        main_select: {
            position: 'relative',
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            borderColor: colors.border,
            borderRadius: 4,
            borderWidth: 1,
            flex: 1,
            height: height,
            padding: 8,
            // paddingVertical: 18,
        },
        select: {
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            width: width ? width - 20 : Width(95) - 20,
            height: height,
        },
        item: {
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            borderColor: colors.primary,
            borderWidth: 0.5,
            flex: 1,
            height: 48,
            width: '100%',
            paddingHorizontal: 16,
            padding: 8,
        },
        modal: {
            height: '100%',
            padding: 8,
            paddingTop: 16,
            backgroundColor: colors.card,
        },
    });
    const [placeholderValue, setPlaceHolderValue] = (0, react_1.useState)();
    return (react_1.default.createElement(react_native_1.View, { style: [
            styles.main_select,
            (disable ? { backgroundColor: colors.grey } : { backgroundColor: colors.card }),
            (disable ? disableStyle : {}), { width: width },
            containerStyle
        ] },
        react_1.default.createElement(react_native_1.Pressable, { onPress: () => setIsVisible(true), disabled: disable },
            react_1.default.createElement(react_native_1.View, { style: styles.select },
                react_1.default.createElement(react_native_1.View, { style: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignContent: 'flex-start',
                        gap: 4,
                        width: width
                    } },
                    asset ?
                        react_1.default.createElement(react_native_1.View, null,
                            react_1.default.createElement(react_native_1.Image, { source: asset, style: [{
                                        width: 24,
                                        height: 24,
                                        objectFit: 'contain',
                                    }, imageStyle] }))
                        :
                            react_1.default.createElement(react_1.default.Fragment, null),
                    react_1.default.createElement(react_native_1.View, null,
                        react_1.default.createElement(StyledText_1.default, { style: [{
                                    color: (disable ? colors.card : ((value === null || value === void 0 ? void 0 : value.label) ? colors.text : colors.grey)),
                                    textTransform: "capitalize"
                                }, textStyle] }, hasMultiple ?
                            ((storeValue === null || storeValue === void 0 ? void 0 : storeValue.length) ?
                                storeValue === null || storeValue === void 0 ? void 0 : storeValue.join(', ')
                                :
                                    placeholder)
                            :
                                (placeholderValue === null || placeholderValue === void 0 ? void 0 : placeholderValue.label) ? placeholderValue === null || placeholderValue === void 0 ? void 0 : placeholderValue.label : placeholder))),
                hiddenArrow ||
                    react_1.default.createElement(react_native_1.View, { style: { position: "absolute", right: 4, } },
                        react_1.default.createElement(react_native_1.Image, { source: assets_images_1.assets_images.dropdown_arrow_grey, style: {
                                width: 16, height: 16, objectFit: 'contain',
                                transform: [{
                                        rotate: ((!isVisible || !Boolean(items === null || items === void 0 ? void 0 : items.length)) ? "0deg" : "180deg")
                                    }]
                            } })))),
        react_1.default.createElement(react_native_1.Modal, { animationType: animationType, transparent: true, visible: isVisible && Boolean(items === null || items === void 0 ? void 0 : items.length), onRequestClose: () => setIsVisible(false) },
            react_1.default.createElement(react_native_1.View, { style: styles.modal },
                react_1.default.createElement(react_native_1.View, { style: {
                        margin: 4,
                        paddingBottom: ((storeValue === null || storeValue === void 0 ? void 0 : storeValue.length) && hasMultiple) ? 0 : 10
                    } },
                    react_1.default.createElement(StyledText_1.default, { style: [global_1.global_styles.text_xl, global_1.global_styles.font_medium,] }, placeholder)),
                (Boolean(storeValue === null || storeValue === void 0 ? void 0 : storeValue.length) && hasMultiple) &&
                    react_1.default.createElement(react_native_1.View, { style: {
                            flexDirection: 'row',
                            alignItems: "center",
                            margin: 4,
                            paddingBottom: 4,
                            justifyContent: "space-between"
                        } },
                        react_1.default.createElement(StyledText_1.default, null,
                            selectedTitle,
                            " ", storeValue === null || storeValue === void 0 ? void 0 :
                            storeValue.length),
                        react_1.default.createElement(PressableButton_1.default, { text: resetTitle, containerStyle: {
                                backgroundColor: 'transparent',
                                borderWidth: 0,
                            }, textStyle: { color: colors.primary }, onPress: () => { setStoreValue([]); } })),
                react_1.default.createElement(react_native_1.View, { style: { paddingBottom: 10 } },
                    react_1.default.createElement(Input_1.default, { style: { height: 48 }, setValue: setSearchValue, value: searchValue, placeholder: searchPlaceholder })),
                react_1.default.createElement(react_native_1.ScrollView, null, searchItems === null || searchItems === void 0 ? void 0 : searchItems.map((option, index) => {
                    return (react_1.default.createElement(react_native_1.TouchableHighlight, { underlayColor: colors.background, key: index, onPress: () => {
                            if (hasMultiple) {
                                const filter = storeValue.filter((check) => check != (option === null || option === void 0 ? void 0 : option.value));
                                const find = storeValue === null || storeValue === void 0 ? void 0 : storeValue.includes(option === null || option === void 0 ? void 0 : option.value);
                                if (find) {
                                    setStoreValue([...filter]);
                                }
                                else {
                                    setStoreValue([...filter, option === null || option === void 0 ? void 0 : option.value]);
                                }
                            }
                            else {
                                setValue(option);
                                setPlaceHolderValue(option);
                                setIsVisible(false);
                            }
                        } },
                        react_1.default.createElement(react_native_1.View, { style: styles.item },
                            hasMultiple &&
                                react_1.default.createElement(react_native_1.View, { style: { marginRight: 4 } },
                                    react_1.default.createElement(MultipleCheckbox_1.default, { asset: checkbox_asset, data: option === null || option === void 0 ? void 0 : option.value, storeValue: storeValue, style: { width: 24, height: 24 }, setStoreValue: setStoreValue })),
                            react_1.default.createElement(StyledText_1.default, null, option === null || option === void 0 ? void 0 : option.label))));
                }))))));
}
;
exports.default = DropDownPicker;
