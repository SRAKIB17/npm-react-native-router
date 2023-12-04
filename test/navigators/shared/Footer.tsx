import { View, Pressable, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { useRouter } from '../router/RouterContext';
import { useTheme } from '../theming/ThemeContext';
import { useTranslate } from '../../../context/TranslateContext';
import { assets_images } from '../../../assets/assets_images';
import navigate_link from '../../../navigate_link';
import { StyledText } from '../../components';

export default function Footer() {
    const router = useRouter();
    const { colors, dark } = useTheme()
    const { wishlist, home, cart, shopping, profile } = useTranslate()
    const footerMenuButton = [
        {
            select: assets_images.home_primary,
            default: assets_images.home,
            title: home,
            link: navigate_link.home,
        },
        {
            select: assets_images.shopping_primary,
            default: assets_images.shopping,
            title: shopping,
            link: navigate_link.shopping
        },
        {
            select: assets_images.wishlist_primary,
            default: assets_images.wishlist,
            title: wishlist,
            link: navigate_link.wishlists
        },
        {
            select: assets_images.carts_primary,
            default: assets_images.carts,
            title: cart,
            link: navigate_link.carts
        },
        {
            select: assets_images.profile_primary,
            default: assets_images.profile,
            title: profile,
            link: navigate_link.account
        }
    ]
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
        buttonGPlusStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#dc4e41',
            borderWidth: 0.5,
            borderColor: '#fff',
            height: 40,
            borderRadius: 5,
            margin: 5,
        },
        buttonFacebookStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#485a96',
            borderWidth: 0.5,
            borderColor: '#fff',
            height: 40,
            borderRadius: 5,
            margin: 5,
        },
        buttonImageIconStyle: {
            padding: 10,
            margin: 5,
            height: 25,
            width: 25,
            resizeMode: 'stretch',
        },
        buttonTextStyle: {
            color: '#fff',
            marginBottom: 4,
            marginLeft: 10,
        },
        buttonIconSeparatorStyle: {
            backgroundColor: '#fff',
            width: 1,
            height: 40,
        },
    });
    return (
        <View style={styles.footer}>
            {
                footerMenuButton?.map((r, index) => {
                    const check = router.path === r.link;
                    return (
                        <View key={index}>
                            <Pressable
                                // style={{
                                //     paddingVertical: 10,
                                //     paddingHorizontal: 4
                                // }}
                                // underlayColor={colors?.background}
                                onPress={() => router.push(r?.link)}
                                disabled={check}
                            >
                                <View style={styles.button}>
                                    <View>
                                        <Image
                                            source={
                                                check ? r?.select : r?.default
                                            }
                                            style={{
                                                height: 24, width: 24, objectFit: 'contain',
                                            }}
                                        />
                                    </View>
                                    <StyledText style={{
                                        fontSize: 10,
                                        color: check ? colors?.primary : colors.grey
                                    }}>
                                        {
                                            r?.title
                                        }
                                    </StyledText>
                                </View>
                            </Pressable>
                        </View>
                    )
                })
            }

        </View>
    );
}

