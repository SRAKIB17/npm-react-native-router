import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { useRouter } from '../router/RouterContext';
import { useTheme } from '../theming/ThemeContext';
import { urlParse } from '../utils/url';
type TabsType =
    {
        icon: {
            select: ImageSourcePropType;
            default: ImageSourcePropType;
        };
        title: string;
        path: string;
    }[]

export default function BottomTabs({
    tabs = [],
    style,
    children,
    buttonStyle,
    iconStyle,
}: {
    children?: React.ReactNode,
    tabs?: TabsType,
    style?: ViewStyle | TextStyle | ImageStyle | object
    buttonStyle?: ViewStyle | TextStyle | ImageStyle | object
    iconStyle?: ViewStyle | TextStyle | ImageStyle | object
}) {
    const router = useRouter();
    const { colors } = useTheme()

    const styles = StyleSheet.create({
        footer: {
            backgroundColor: colors.card,
            // borderTopEndRadius: 20,
            // borderTopStartRadius: 20,
            padding: 16,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderColor: colors.border,
            borderWidth: 0.5,
            shadowColor: "#000",
            height: 64,
            width: '100%',
        },
        button: {
            gap: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: 48,
            minWidth: 48,
            padding: 4,
        },
    });

    return (
        <View style={[styles.footer, style]}>
            {
                children ?
                    children
                    :
                    tabs?.map((r, index) => {
                        const check = router.path === urlParse(r.path).path;
                        return (
                            <View key={index}>
                                <Pressable
                                    // style={[styles.button, buttonStyle]}
                                    // underlayColor={colors?.background}
                                    onPress={() => router.push(r?.path)}
                                    disabled={check}
                                >
                                    <View style={[styles.button, buttonStyle]}>
                                        <View>
                                            <Image
                                                source={
                                                    check ? r?.icon?.select as ImageSourcePropType : r?.icon?.default as ImageSourcePropType
                                                }
                                                style={[{
                                                    height: 24, width: 24, objectFit: 'contain',
                                                }, iconStyle]}
                                            />
                                        </View>
                                        <Text style={{
                                            fontSize: 10,
                                            color: check ? colors?.primary : colors.grey
                                        }}>
                                            {
                                                r?.title
                                            }
                                        </Text>
                                    </View>
                                </Pressable>
                            </View>
                        )
                    })
            }

        </View>
    );
}

