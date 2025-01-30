"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const src_1 = require("../../navigators/src");
const PressableButton_1 = __importDefault(require("../button/PressableButton"));
const global_1 = require("../global");
const Pagination = ({ pageHandle = () => { }, currentPage, getLastPage, button, disableButton, }) => {
    const page = parseInt(currentPage);
    const lastPage = parseInt(getLastPage);
    const { colors } = (0, src_1.useTheme)();
    const styles = react_native_1.StyleSheet.create({
        pagination: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
        },
        pageButton: {
            // width: 36,
            paddingHorizontal: 9,
            minWidth: 36,
            padding: 4,
            height: 36,
            backgroundColor: (button === null || button === void 0 ? void 0 : button.bg) ? button === null || button === void 0 ? void 0 : button.bg : colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            // borderRadius: 20,
            borderWidth: (button === null || button === void 0 ? void 0 : button.borderWidth) ? button === null || button === void 0 ? void 0 : button.borderWidth : ((button === null || button === void 0 ? void 0 : button.borderWidth) == 0 ? button === null || button === void 0 ? void 0 : button.borderWidth : 0.5),
            borderColor: (button === null || button === void 0 ? void 0 : button.borderColor) ? button === null || button === void 0 ? void 0 : button.borderColor : colors.border,
        },
        buttonText: {
            textAlign: 'center',
            color: (button === null || button === void 0 ? void 0 : button.bg) ? button === null || button === void 0 ? void 0 : button.text : colors.primary_text
        },
    });
    return (React.createElement(react_native_1.View, { style: styles.pagination },
        //  CASE: 01 AND 02
        page > 3 &&
            React.createElement(React.Fragment, null,
                React.createElement(PressableButton_1.default, { textStyle: styles.buttonText, containerStyle: styles.pageButton, onPress: () => pageHandle(1), text: 1 }),
                React.createElement(PressableButton_1.default, { textStyle: styles.buttonText, containerStyle: styles.pageButton, onPress: () => pageHandle(2), text: 2 }),
                // CASE: 03
                page == 4 ||
                    React.createElement(PressableButton_1.default, { textStyle: styles.buttonText, containerStyle: styles.pageButton, onPress: () => pageHandle(3), text: 3 }),
                // CASE: 04
                page > 5 &&
                    React.createElement(PressableButton_1.default, { textStyle: [
                            styles.buttonText, global_1.global_styles.font_extrabold, {
                                color: disableButton === null || disableButton === void 0 ? void 0 : disableButton.text
                            }
                        ], containerStyle: [styles.pageButton, {
                                backgroundColor: disableButton === null || disableButton === void 0 ? void 0 : disableButton.bg
                            }], disabled: true, text: "..." })),
        // CASE: 05
        page > 1 &&
            React.createElement(PressableButton_1.default, { textStyle: styles.buttonText, containerStyle: styles.pageButton, onPress: () => pageHandle(page - 1), text: page - 1 }),
        React.createElement(PressableButton_1.default, { textStyle: [
                styles.buttonText, global_1.global_styles.font_bold, {
                    color: disableButton === null || disableButton === void 0 ? void 0 : disableButton.text
                }
            ], containerStyle: [styles.pageButton, {
                    backgroundColor: disableButton === null || disableButton === void 0 ? void 0 : disableButton.bg
                }], disabled: true, text: page }),
        //CASE: 06;
        page == lastPage || page == lastPage - 3 ||
            React.createElement(React.Fragment, null,
                React.createElement(PressableButton_1.default, { textStyle: styles.buttonText, containerStyle: styles.pageButton, onPress: () => pageHandle(page + 1), text: page + 1 }),
                //CASE: 07
                page >= lastPage - 2 || page == lastPage - 4 ||
                    React.createElement(PressableButton_1.default, { disabled: true, textStyle: [
                            styles.buttonText, global_1.global_styles.font_extrabold, {
                                color: disableButton === null || disableButton === void 0 ? void 0 : disableButton.text
                            }
                        ], containerStyle: [styles.pageButton, {
                                backgroundColor: disableButton === null || disableButton === void 0 ? void 0 : disableButton.bg
                            }], text: "..." })),
        page < lastPage - 2 &&
            React.createElement(React.Fragment, null,
                React.createElement(PressableButton_1.default, { textStyle: styles.buttonText, containerStyle: styles.pageButton, onPress: () => pageHandle(lastPage - 2), text: lastPage - 2 }),
                React.createElement(PressableButton_1.default, { textStyle: styles.buttonText, containerStyle: styles.pageButton, onPress: () => pageHandle(lastPage - 1), text: lastPage - 1 }),
                React.createElement(PressableButton_1.default, { textStyle: styles.buttonText, containerStyle: styles.pageButton, onPress: () => pageHandle(lastPage), text: lastPage })),
        lastPage - 2 == page &&
            React.createElement(PressableButton_1.default, { textStyle: styles.buttonText, containerStyle: styles.pageButton, onPress: () => pageHandle(lastPage), text: lastPage })));
};
exports.default = Pagination;
