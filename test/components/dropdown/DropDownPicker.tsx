import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet, ScrollView, Image, Pressable, ViewStyle, TextStyle, ImageStyle, TouchableHighlight, Dimensions } from 'react-native';
import { assets_images } from '../../../assets/assets_images';
import Input from '../input/Input';
import Toast from '../toast/Toast';
import StyledText from '../text/StyledText';
import PressableButton from '../button/PressableButton';
import { global_styles } from '../global';
import MultipleCheckbox from '../shared/MultipleCheckbox';
import { useTheme } from '../../navigators/theming/ThemeContext';
import { DropDownPickerProps } from '../types';
import { Width } from '../../../utils';



function DropDownPicker({
    hiddenArrow = false,
    disableStyle,
    containerStyle,
    width,
    multipleConfig = {
        hasMultiple: false,
        setStoreValue: () => { },
        storeValue: [],
        selectedTitle: "Selected",
        resetTitle: "Reset",
        asset: {}
    },
    disable = false,
    singleConfig = {
        value: {
            label: "",
            value: ""
        },
        defaultValue: {
            label: "",
            value: ""
        },
        setValue: () => { }
    },
    items,
    placeholderConfig = {
        placeholder: 'Please select',
        searchPlaceholder: "Search for something",
        noResultsFoundPlaceholder: "No results found",
    },
    imageStyle,
    textStyle,
    asset,
    animationType = 'fade',
}:
    DropDownPickerProps) {

    const { colors } = useTheme()

    const { hasMultiple, asset: checkbox_asset, setStoreValue, storeValue, resetTitle, selectedTitle } = multipleConfig;
    const { placeholder, noResultsFoundPlaceholder, searchPlaceholder }: any = placeholderConfig
    const { defaultValue, setValue, value } = singleConfig
    const [isVisible, setIsVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const [searchItems, setSearchItems] = useState<{
        id?: number | string,
        label: string;
        value: string;
    }[]>([])


    useEffect(() => {

        const filter = items?.filter(r => {
            const value = r?.value?.toLowerCase()?.includes(searchValue?.toLowerCase());
            const label = r?.label?.toLowerCase()?.includes(searchValue?.toLowerCase());
            return value || label
        })
        if (!Boolean(filter?.length) && Boolean(searchValue)) {
            Toast({ text: noResultsFoundPlaceholder })
        }
        if (filter?.length) {
            setSearchItems(filter)
        }
        else {
            setSearchItems(items)
        }
    }, [searchValue, items])

    useEffect(() => {
        if (defaultValue?.label) {
            setValue(defaultValue)
        }
        return () => {

        }
    }, [defaultValue])

    const height = (storeValue?.length > 3 && hasMultiple) ? storeValue?.length / 6 * 48 : 48


    const styles = StyleSheet.create({
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
    const [placeholderValue, setPlaceHolderValue] = useState<{ id?: string | number | undefined; label: string; value: string; }>()

    return (
        <View
            style={[
                styles.main_select,
                (disable ? { backgroundColor: colors.grey } : { backgroundColor: colors.card }),
                (disable ? disableStyle : {}), { width: width },
                containerStyle
            ]}>

            <Pressable
                onPress={() => setIsVisible(true)}
                disabled={disable}
            >
                <View style={styles.select}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignContent: 'flex-start',
                        gap: 4,
                        width: width
                    }}>

                        {
                            asset ?
                                <View>
                                    <Image
                                        source={asset}
                                        style={[{
                                            width: 24,
                                            height: 24,
                                            objectFit: 'contain',
                                        }, imageStyle]}
                                    />
                                </View>
                                :
                                <>
                                </>
                        }
                        <View>
                            <StyledText style={[{
                                color: (disable ? colors.card : (value?.label ? colors.text : colors.grey)),
                                textTransform: "capitalize"
                            }, textStyle]}>
                                {
                                    hasMultiple ?
                                        (storeValue?.length ?
                                            storeValue?.join(', ')
                                            :
                                            placeholder
                                        )
                                        :
                                        placeholderValue?.label ? placeholderValue?.label : placeholder
                                }
                            </StyledText>
                        </View>
                    </View>
                    {
                        hiddenArrow ||
                        <View style={{ position: "absolute", right: 4, }}>
                            <Image
                                source={assets_images.dropdown_arrow_grey}
                                style={{
                                    width: 16, height: 16, objectFit: 'contain',
                                    transform: [{
                                        rotate: (
                                            (!isVisible || !Boolean(items?.length)) ? "0deg" : "180deg"
                                        )
                                    }]
                                }}
                            />
                        </View>
                    }

                </View>
            </Pressable>

            <Modal
                animationType={animationType}
                transparent={true}
                visible={isVisible && Boolean(items?.length)}
                onRequestClose={() => setIsVisible(false)}
            >
                <View style={styles.modal}>

                    <View style={{
                        margin: 4,
                        paddingBottom: ((storeValue?.length) && hasMultiple) ? 0 : 10
                    }}>
                        <StyledText style={[global_styles.text_xl, global_styles.font_medium,]}>
                            {placeholder}
                        </StyledText>
                    </View>

                    {
                        (Boolean(storeValue?.length) && hasMultiple) &&
                        <View style={{
                            flexDirection: 'row',
                            alignItems: "center",
                            margin: 4,
                            paddingBottom: 4,
                            justifyContent: "space-between"
                        }}>
                            <StyledText>
                                {selectedTitle} {storeValue?.length}
                            </StyledText>
                            <PressableButton
                                text={resetTitle}
                                containerStyle={{
                                    backgroundColor: 'transparent',
                                    borderWidth: 0,
                                }}
                                textStyle={{ color: colors.primary }}
                                onPress={() => { setStoreValue([]) }}
                            />
                        </View>
                    }
                    <View style={{ paddingBottom: 10 }}>
                        <Input
                            style={{ height: 48 }}
                            setValue={setSearchValue}
                            value={searchValue}
                            placeholder={searchPlaceholder}
                        />
                    </View>
                    <ScrollView>
                        {searchItems?.map((option, index) => {
                            return (
                                <TouchableHighlight
                                    underlayColor={colors.background}
                                    key={index}
                                    onPress={() => {
                                        if (hasMultiple) {
                                            const filter = storeValue.filter((check) => check != option?.value);
                                            const find = storeValue?.includes(option?.value)

                                            if (find) {
                                                setStoreValue([...filter])
                                            }
                                            else {
                                                setStoreValue([...filter, option?.value])
                                            }
                                        }
                                        else {
                                            setValue(option)
                                            setPlaceHolderValue(option)
                                            setIsVisible(false);
                                        }
                                    }}
                                >
                                    <View style={styles.item}>
                                        {
                                            hasMultiple &&
                                            <View style={{ marginRight: 4 }}>
                                                <MultipleCheckbox
                                                    asset={checkbox_asset}
                                                    data={option?.value}
                                                    storeValue={storeValue}
                                                    style={{ width: 24, height: 24 }}
                                                    setStoreValue={setStoreValue}
                                                />
                                            </View>
                                        }
                                        <StyledText>{option?.label}</StyledText>
                                    </View>
                                </TouchableHighlight>
                            )
                        })}
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};


export default DropDownPicker;
