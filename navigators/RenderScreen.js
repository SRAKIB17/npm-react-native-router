import React, { useEffect, useState } from 'react';
import { useNavigation, userRenderContext } from './NavigationContainer';
import { Image, SafeAreaView, Text, View, Button, Animated } from 'react-native';
import LoaderComponent from './LoaderComponent';
import MainNavbar from './shared/MainNavbar';
import { useTheme } from './theming/ThemeContext';
import NavbarTitleBackButton from './shared/NavbarTitleBackButton';
import { useRouter } from './router/RouterContext';
import Footer from './shared/Footer';
import { userDrawer } from './drawer/DrawerContainer';


export default class RenderScreen {
    Render(
        {
            children
        }) {
        const {
            customDynamicNavbar,
            setCustomDynamicNavbar,
            loadingComponent,
            setLoadingComponent,
        } = useNavigation();

        const { setDrawerConfig, drawerConfig } = userDrawer()

        const { colors } = useTheme();
        const {
            setAllParams,
            params,
            config: navFooterConfig,
            setTitle
        } = userRenderContext()

        const checkNavFooterConfig = (navFooterConfig) && Boolean(Object.values(navFooterConfig)?.length)

        const router = useRouter()
        const { query, hash, path, asPath, push, basePath } = router

        const rest = {
            params,
            setTitle,
            customDynamicNavbar,
            setCustomDynamicNavbar,
            loadingComponent,
            setLoadingComponent,
        }
        const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity: 0

        useEffect(() => {
            // Fade in animation when Screen1 mounts
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        }, [fadeAnim]);

        if (Array.isArray(children)) {

            let params = {}

            const findScreen = children?.find((component) => {
                const getPath = (path && path?.lastIndexOf('/') == path?.length - 1) ? path?.slice(0, -1) : path
                const routePath = (component?.props?.path && component?.props?.path?.lastIndexOf('/') == component?.props?.path?.length - 1) ? component?.props?.path.slice(0, -1) : component?.props?.path
                params = getParams({
                    path: getPath,
                    urlPattern: routePath
                })
                const check_path = routePath == getPath || Object.values(params)?.length
                const privateCheck = (component?.props?.isPrivate ? component?.props?.privateState : true)
                return check_path && (privateCheck)
            }) ||
                children?.find((not_found) => {
                    return not_found?.props?.path == '*';
                })


            useEffect(() => {
                if (findScreen?.props?.drawerConfig && Object.values(findScreen?.props?.drawerConfig)?.length) {
                    setDrawerConfig({
                        ...drawerConfig,
                        ...findScreen?.props?.drawerConfig
                    })
                }
                return () => {

                }
            }, [findScreen])

            useEffect(() => {
                setAllParams(params);
                rest.params = params;
                setTitle(findScreen?.props?.title);

                return () => {
                    rest.params = params;
                    setTitle(findScreen?.props?.title);
                    setAllParams(params);
                }
            }, [path, asPath])



            const Render = findScreen?.props?.screen || function () {
                return (
                    <View style={{
                        flex: 1,
                    }}>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            gap: 16
                        }}>
                            <Text style={{ color: "black", fontSize: 32, fontWeight: '700' }}>
                                NOT FOUND
                            </Text>
                            <Button
                                title='Home'
                                onPress={() => {
                                    push(basePath)
                                }}
                            />
                        </View>
                    </View>
                )
            }

            return (
                <>
                    {
                        Boolean(customDynamicNavbar) ?
                            customDynamicNavbar
                            :
                            (findScreen?.props?.navbar ||
                                (
                                    [undefined, true]?.includes(findScreen?.props?.hasNavbar) ?
                                        <View>
                                            {
                                                basePath == asPath ?
                                                    <>
                                                        {
                                                            (checkNavFooterConfig && navFooterConfig?.homeNavbar) ?
                                                                navFooterConfig?.homeNavbar
                                                                :
                                                                <MainNavbar title={findScreen?.props?.title} />
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            (checkNavFooterConfig && navFooterConfig?.navbar) ?
                                                                navFooterConfig?.navbar :
                                                                <NavbarTitleBackButton
                                                                    title={findScreen?.props?.title}
                                                                />
                                                        }
                                                    </>
                                            }
                                        </View>
                                        :
                                        null
                                )
                            )
                    }

                    <View style={{
                        flex: 1,
                        backgroundColor: colors?.background
                    }}>
                        {
                            loadingComponent ?
                                <LoaderComponent /> :
                                <Render {...rest} />
                        }
                    </View>
                    {
                        (
                            findScreen?.props?.footer ||
                            (
                                findScreen?.props?.hasFooter &&
                                <>
                                    {
                                        (checkNavFooterConfig && navFooterConfig?.footer) ?
                                            navFooterConfig?.footer :
                                            <Footer />
                                    }
                                </>
                            )
                        )
                    }
                </>
            )
        }
        // ONLY ONE CHILDREN
        else {
            let params = getParams({
                path: path,
                urlPattern: children?.props?.path
            })

            useEffect(() => {
                setAllParams(params);
                rest.params = params;
                setTitle(children?.props?.title);
                return () => {
                    setAllParams(params);
                    rest.params = params;
                    setTitle(children?.props?.title);
                }
            }, [path, asPath])

            const Render = children?.props?.screen || function () {
                return (
                    <View style={{
                        flex: 1,
                    }}>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            gap: 16
                        }}>
                            <Text style={{ color: "black", fontSize: 32, fontWeight: '700' }}>
                                NOT FOUND
                            </Text>
                            <Button
                                title='Home'
                                onPress={() => {
                                    push(basePath)
                                }}
                            />
                        </View>
                    </View>
                )
            }
            return (
                <>
                    {
                        Boolean(customDynamicNavbar) ?
                            customDynamicNavbar
                            :
                            (children?.props?.navbar ||
                                (
                                    [undefined, true]?.includes(children?.props?.hasNavbar) ?
                                        <View>
                                            {
                                                basePath == asPath ?
                                                    <>
                                                        {
                                                            (checkNavFooterConfig && navFooterConfig?.homeNavbar) ?
                                                                navFooterConfig?.homeNavbar
                                                                :
                                                                <MainNavbar title={children?.props?.title} />
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            (checkNavFooterConfig && navFooterConfig?.navbar) ?
                                                                navFooterConfig?.navbar
                                                                :
                                                                <NavbarTitleBackButton
                                                                    title={children?.props?.title}
                                                                />
                                                        }
                                                    </>

                                            }
                                        </View>
                                        :
                                        null
                                )
                            )
                    }

                    <View style={{
                        flex: 1,
                        backgroundColor: colors?.background
                    }}>
                        {
                            loadingComponent ?
                                <LoaderComponent /> :
                                <Render {...rest} />
                        }
                    </View>
                    {
                        (children?.props?.footer || (children?.props?.hasFooter &&
                            <>
                                {
                                    (checkNavFooterConfig && navFooterConfig?.footer) ?
                                        navFooterConfig?.footer :
                                        <Footer />
                                }
                            </>
                        ))
                    }
                </>
            )
        }
    }

    screen({ screen, path: link, hasNavbar = true }) {
        return null
    }
}



const getParams = ({ urlPattern, path }) => {
    const patternSegments = urlPattern?.split('/');
    const pathSegments = path?.split('/');
    if (patternSegments?.length === pathSegments?.length && urlPattern !== path) {
        const paramRegex = /\/:([^/]+)/g;
        const parameterRegex = new RegExp(urlPattern?.replace(/:[^/]+/g, '([^/]+)'));
        const match = path?.match(parameterRegex);
        if (match) {
            const parameterValues = match?.slice(1);
            const paramsKeyValue = urlPattern?.match(paramRegex)?.map((key, index) => {
                return {
                    [key?.slice(2)]: parameterValues[index]
                }
            })
            if (paramsKeyValue?.length) {
                return paramsKeyValue.reduce(function (total, value) {
                    return { ...total, ...value }
                }, {});
            }
            else {
                return {}
            }
        } else {
            // console.log("Path does not match the expected pattern.");
            return {}
        }
    }
    else {
        // console.log("Path does not match the expected pattern.");
        return {}
    }
}