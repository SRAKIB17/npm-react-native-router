
import React, { useContext, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContext } from './NavigationContainer';
import { useRouter } from './router/RouterContext';
import Footer from './shared/Footer';
import MainNavbar from './shared/MainNavbar';
import NavbarTitleBackButton from './shared/NavbarTitleBackButton';
import { useTheme } from './theming/ThemeContext';
import type { ConfigType, RenderRoutesType, ScreenProps } from './types';

type arrayProps = {
    children: RenderRoutesType
}

export default class RenderScreen {
    constructor() {
        this.Render = this.Render.bind(this);
    }
    Render({ children }: { children: { props: RenderRoutesType } | arrayProps[] | any }) {

        const { NavigationPropertyPass: NavigationProps, title, setTitle } = useContext(NavigationContext);
        const config: ConfigType = NavigationProps?.config
        // const { setDrawerConfig, drawerConfig } = userDrawer()
        const { colors } = useTheme();

        const router = useRouter()
        const { path, asPath, push, basePath } = router

        const rest: ScreenProps = {
            params: NavigationProps?.params,
            navigate: push,
            setTitle: setTitle
            // customDynamicNavbar,
            // setCustomDynamicNavbar,
            // loadingComponent,
            // setLoadingComponent,
        }



        // const [fadeAnim] = useState(new Animated.Value(0)); // Initial opacity: 0

        // useEffect(() => {
        //     // Fade in animation when Screen1 mounts
        //     Animated.timing(fadeAnim, {
        //         toValue: 1,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }).start();
        // }, [fadeAnim]);


        if (Array.isArray(children)) {
            const findScreen: { props: RenderRoutesType } = children?.find((component: { props: RenderRoutesType | any }) => {
                let routePath = component?.props?.path
                if (routePath?.endsWith('/')) {
                    routePath = routePath.slice(0, -1)
                }

                let params = getParams({
                    path: path || "",
                    urlPattern: routePath
                })
                rest.params = params;
                NavigationProps.params = params?.params;
                const check_path = routePath == path || params?.success
                const privateCheck = (component?.props?.isPrivate ? component?.props?.privateState : true)
                return check_path && (privateCheck)
            }) || children?.find((not_found: { props: RenderRoutesType | any }) => {
                return not_found?.props?.path == '*';
            })


            // useEffect(() => {
            //     if (findScreen?.props?.drawerConfig && Object?.values(findScreen?.props?.drawerConfig)?.length) {
            //         setDrawerConfig({
            //             ...drawerConfig,
            //             ...findScreen?.props?.drawerConfig
            //         })
            //     }
            //     return () => {

            //     }
            // }, [findScreen])

            useEffect(() => {
                setTitle(findScreen?.props?.title);

                return () => {
                    setTitle(findScreen?.props?.title);
                }
            }, [path, asPath])


            const Render = findScreen?.props?.screen || function () {
                return (
                    <View style={{
                        backgroundColor: colors.background,
                        flex: 1,
                    }}>
                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            gap: 16
                        }}>
                            <Text style={{ color: colors.text, fontSize: 36, fontWeight: '700' }}>
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
                        // Boolean(customDynamicNavbar) ?
                        //     customDynamicNavbar
                        //     :
                        (findScreen?.props?.headerBar ||
                            (
                                [undefined, true]?.includes(findScreen?.props?.hasHeaderBar) ?
                                    <View>
                                        {
                                            basePath == asPath ?
                                                <>
                                                    {
                                                        (config?.mainHeader) ?
                                                            config?.mainHeader
                                                            :
                                                            <MainNavbar
                                                                title={title}
                                                            />
                                                    }
                                                </>
                                                :
                                                <>
                                                    {
                                                        config?.headerBar ?
                                                            config?.headerBar
                                                            :
                                                            <NavbarTitleBackButton
                                                                title={title}
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
                            // loadingComponent ?
                            //     <LoaderComponent /> :
                            <Render {...rest} />
                        }
                    </View>
                    {
                        (
                            findScreen?.props?.bottomTabs ||
                            (
                                findScreen?.props?.hasBottomTabs &&
                                <>
                                    {
                                        config?.bottomTabs ?
                                            config?.bottomTabs :
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
                path: path as string,
                urlPattern: children?.props?.path
            })

            rest.params = params;
            NavigationProps.params = params?.params;
            setTitle(children?.props?.title)

            const privateCheck = (children?.props?.isPrivate ? children?.props?.privateState : true)

            const Render = (privateCheck && children?.props?.screen) || function () {
                return (
                    <View style={{
                        flex: 1,
                    }}>
                        <View style={{
                            backgroundColor: colors.background,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            gap: 16
                        }}>
                            <Text style={{ color: colors.text, fontSize: 36, fontWeight: '700' }}>
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
                        // Boolean(customDynamicNavbar) ?
                        //     customDynamicNavbar
                        //     :
                        (children?.props?.navbar ||
                            (
                                [undefined, true]?.includes(children?.props?.hasNavbar) ?
                                    <View>
                                        {
                                            basePath == asPath ?
                                                <>
                                                    {
                                                        config?.mainHeader ?
                                                            config?.mainHeader
                                                            :
                                                            <MainNavbar
                                                                title={title}
                                                            />
                                                    }
                                                </>
                                                :
                                                <>
                                                    {
                                                        config?.headerBar ?
                                                            config?.headerBar
                                                            :
                                                            <NavbarTitleBackButton
                                                                title={title}
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
                            // loadingComponent ?
                            //     <LoaderComponent /> :
                            <Render {...rest} />
                        }
                    </View>
                    {
                        (children?.props?.footer || (children?.props?.hasFooter &&
                            <>
                                {
                                    config?.bottomTabs ?
                                        config?.bottomTabs :
                                        <Footer />
                                }
                            </>
                        ))
                    }
                </>
            )
        }
    }

    screen({
        screen,
        path: link,
        hasHeaderBar: hasNavbar = true
    }: RenderRoutesType) {
        return null
    }
}

function getParams({ path, urlPattern }: { path: string; urlPattern: string }): { success: boolean, params: Record<string, string> } {
    const params: any = {};
    // Trim leading and trailing slashes
    path = path.replace(/^\/+|\/+$/g, '');
    urlPattern = urlPattern.replace(/^\/+|\/+$/g, '');
    // Split into segments
    const pathSegments = path.split('/');
    const patternSegments = urlPattern.split('/');

    // If segment counts don't match and there's no wildcard or optional segments, return failure
    if (pathSegments.length !== patternSegments.length && !urlPattern.includes('*') && !urlPattern?.includes("?")) {
        return {
            success: false,
            params: {}
        };
    }
    // Iterate through segments
    for (let i = 0; i < patternSegments.length; i++) {
        const patternSegment = patternSegments[i];
        const pathSegment = pathSegments[i];

        // Handle wildcard segments
        if (patternSegment === '*') {
            params['wildcard'] = pathSegments.slice(i).join('/');
            return {
                success: true,
                params,
            }; // Stop further processing
        }

        // Handle optional segments (ending with '?')
        if (patternSegment.startsWith(':') && patternSegment.endsWith('?')) {
            const paramName = patternSegment.slice(1, -1); // Remove the '?'
            params[paramName] = pathSegment || null; // Use null if segment is missing
        }
        // Handle dynamic segments (starting with ':')
        else if (patternSegment.startsWith(':')) {
            const paramName = patternSegment.slice(1); // Remove the ':'
            if (/^[a-zA-Z0-9_]+$/.test(paramName)) { // Validate dynamic segment name
                params[paramName] = pathSegment;
            } else {
                return {
                    success: false,
                    params: {}
                }; // Return empty object if segment name is invalid
            }
        }

        // Handle static segments (must match exactly)
        else if (patternSegment !== pathSegment) {
            return {
                success: false,
                params: {}
            }; // If static segments don't match, return empty object
        }
    }
    return {
        success: true,
        params
    };
}