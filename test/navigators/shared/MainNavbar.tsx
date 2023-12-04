import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { useTheme } from '../theming/ThemeContext';
import { PressableButton } from '../../components';
import TouchableHighlightButton from '../../components/button/TouchableHighlightButton';
import { assets_images } from '../../../assets/assets_images';

const MainNavbar = ({ title }: { title: string }) => {
    const { colors } = useTheme()
    const styles = StyleSheet.create({
        navbar: {
            display: 'flex',
            backgroundColor: colors.card,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            color: 'black',
            height: 64,
            paddingHorizontal: 10,
            alignContent: 'space-between',

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.15,
            shadowRadius: 1.00,
            elevation: 3,

        },
        navbar_button: {
            padding: 8,
        },

        button: {
            alignItems: 'center',
            backgroundColor: colors.card,
            padding: 10,
        },
    });


    return (
        <View style={styles.navbar}>

            <View>
                <Text style={{
                    fontSize: 24,
                    fontWeight: '600',
                    color: colors.primary
                }}>
                    {
                        title
                    }
                </Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>

                <View>
                    <TouchableHighlightButton
                        containerStyle={{
                            height: 48,
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            width: 48,
                        }}
                        image={assets_images?.search}
                        imageStyle={{
                            height: 24,
                            width: 24
                        }}
                    // onPress={() => setIsVisible(true)}
                    />
                    {/* <View
                                style={styles.navbar_button}
                            >
                                <Image
                                    source={assets_images.search_white}
                                    style={{ height: 28, width: 28 }}
                                />
                            </View> */}
                </View>

            </View>

            {/* ************** */}
            {/* <SearchScreen isVisible={isVisible} setIsVisible={setIsVisible} /> */}
            {/* <Button title='fsdf' /> */}
        </View>
    );
};


export default MainNavbar;
