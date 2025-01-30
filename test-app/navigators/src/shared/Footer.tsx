import { Image, Pressable, StyleSheet, View } from 'react-native';
import { StyledText } from '../../../components';
import { useRouter } from '../router/RouterContext';
import { useTheme } from '../theming/ThemeContext';

export default function Footer() {
    const router = useRouter();
    const { colors, dark } = useTheme()
    const footerMenuButton = [
        {

            title: "Home",
            link: '',
        },
        {
            title: "Home",
            link: '',
        },
        {
            title: "Home",
            link: '',
        },
        {
            title: "Home",
            link: '',
        },
        {
            title: "Home",
            link: '',
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
                footerMenuButton?.map((r: any, index) => {
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

