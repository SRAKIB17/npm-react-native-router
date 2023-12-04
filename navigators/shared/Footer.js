import { View, Pressable, Image, StyleSheet } from 'react-native';
import StyledText from '../../components/text/StyledText';
import { useRouter } from '../router/RouterContext';
import { useTheme } from '../theming/ThemeContext';
import { assets_images } from '../../assets/assets_images';

export default function Footer() {
    const router = useRouter();
    const { colors } = useTheme()
    const footerMenuButton = [
        {
            dark: assets_images.home_dark,
            title: "Home",
            link: "/",
        },
        {
            dark: assets_images.search_dark,
            title: "Search",
            link: "/"
        },
        {
            dark: assets_images.profile_dark,
            title: "Profile",
            link: "/wishlists"
        },
        {
            dark: assets_images.info_dark,
            title: "Info",
            link: "/info",
        },
    ]
    const styles = StyleSheet.create({
        footer: {
            backgroundColor: colors?.card,
            padding: 16,
            paddingHorizontal: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderColor: colors.border,
            borderWidth: 1,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 1.00,
            elevation: 1,

            height: 64,
            width: '100%',
        },
        select_button: {
            marginTop: -24,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: 12,
            borderRadius: 99999,
            backgroundColor: colors.primary,
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
                    // const check = navigation.pathname === r.link;
                    return (
                        <View key={index}>
                            <Pressable
                                onPress={() => router.push(r?.link)}
                            >
                                <View style={styles.button}>
                                    <View>
                                        <Image
                                            source={
                                                r?.dark
                                            }
                                            style={{
                                                height: 24, width: 24, objectFit: 'contain',
                                            }}
                                        />
                                    </View>
                                    <StyledText style={{ fontSize: 10 }}>
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

