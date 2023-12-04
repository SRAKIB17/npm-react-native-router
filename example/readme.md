# react-native-router-screen

## Please upgrade latest version

```npm i```

```npm i react-native-router-screen```

[![Version npm](https://img.shields.io/npm/v/react-native-router-screen.svg?style=flat-square)](https://www.npmjs.com/package/react-native-router-screen)

## Npm install

```
npm i react-native-router-screen
```

NB: Close the project and start anew

## Example: <https://github.com/SRAKIB17/npm-react-native-router-exmple>

### Import

```js
import { NavigationContainer,RenderScreen, useRouter, useNavigation,useParamsScreenProps, DrawerContainer, userDrawer, useTheme} from 'react-native-router-screen';

import {
  Checkbox,Link,Pagination,PressableButton,Ratings,StyledText,Toast,Input,TouchableOpacityButton} from 'react-native-router-screen'
```

### How Setup it

Wrap the whole project with **`NavigationContainer`**

| Property   | Description                                          |
|------------|------------------------------------------------------|
| scheme      | An optional string with `dark` and `default`. Default `default`    |
| theme      | An optional object with dark and default themes.    |
| - dark     | An optional property for the dark theme.             |
| - default  | An optional property for the default theme.          |
| basePath   | A required string representing the base path or URL. |
| children   | A required prop for passing child React elements.    |
| config   | An optional prop for passing child React elements.    |

| Configuration | Type |
| --- | --- |
| `homeNavbar` | React.JSX.Element` |
| `navbar` | React.JSX.Element` |
| `footer` | React.JSX.Element` |

### Example Navbar

#### homeNavbar

```js
const MainNavbar = ({ title }) => {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        navbar: {
            display: 'flex',
            backgroundColor: colors.primary,
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
    });

    return (
        <View style={styles.navbar}>
            <View>
                <Text style={{
                    fontSize: 24,
                    fontWeight: '600',
                    color: colors.primary_text
                }}>
                    {title}
                </Text>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                {/* 
        <View>
          <Pressable onPress={() => setIsVisible(true)}>
            <View
              style={styles.navbar_button}
            >
              <Image
                source={assets_images.search_white}
                style={{ height: 28, width: 28 }}
              />
            </View>
          </Pressable>
        </View> */}
            </View>
        </View>
    );
};

export default MainNavbar;

```

#### navbar

```js
const NavbarTitleBackButton = ({
    title,
    clickAbleFunction,
    style,
    children
}: {
    title: string
    backward: string,
    clickAbleFunction?: () => void,
    children?: React.ReactNode,
    style?: ViewStyle | TextStyle | ImageStyle | object,
}) => {
    const { push, history, basePath } = useRouter()
    const { colors, dark } = useTheme()

    const styles = StyleSheet.create({
        navbar: {
            paddingHorizontal: 20,
            display: 'flex',
            backgroundColor: colors.card,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            color: 'black',
            height: 64,
            paddingLeft: 10,
            paddingRight: 10,
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
    });
    return (
        <View style={[styles.navbar, style]}>
            {/* <Image source={{ uri: svgBase64 }} /> */}
            <View>
                <TouchableOpacityButton
                    key={title}
                    imageStyle={{
                        width: 24,
                        height: 24,
                    }}
                    onPress={() => {
                        if (clickAbleFunction) {
                            clickAbleFunction()
                        }
                        else {
                            if (history.get().length) {
                                history.back()
                            }
                            else {
                                push(basePath)
                            }
                        }
                    }}
                    image={assets_images.arrow_left_indicate}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        width: 36,
                        height: 36,
                        borderWidth: 0,
                    }}
                />
            </View>
            <View style={{
                flex: 1,
                alignItems: 'center',
                left: children ? 0 : -18
            }}>
                <StyledText
                    style={
                        [
                            global_styles.text_xl,
                            global_styles.font_bold,
                            {
                                color: colors.primary
                            }
                        ]
                    }
                >
                    {
                        title
                    }
                </StyledText>
            </View>
            <View>
                {
                    children
                }
            </View>

        </View>
    );
};

export default NavbarTitleBackButton;
```

#### Footer

```js
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { StyledText, useRouter, useTheme } from 'react-native-router-screen';
import { assets_images } from '../../assets/assets_images';
import { useTranslate } from '../../context/TranslateContext';
import navigate_link from '../../navigate_link';


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

```

```js

const theme = {
  dark: {
    background: 'red'
  },
  default: {
    background: 'green',
    primary: 'gold'
  }
}

function App(): JSX.Element {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <NavigationContainer
      scheme={isDarkTheme ? 'dark' : 'default'}
      // scheme={scheme !== 'dark' ? 'dark' : 'default'}
      basePath={home_path}
      config={{
        footer: <Footer />
      }}
    >
      <WrapScreen />
    </NavigationContainer>
  );
}
```

**WrapScreen**:

```js
const WrapScreen = () => {
  const { dark, colors } = useTheme();
  return (
    <AuthenticationCheckProvider>
      <TranslateProvider>
        <DrawerContainer>
          <StatusBar
            animated={true}
            barStyle={dark ? "light-content" : 'dark-content'}
            backgroundColor={colors.card}
            showHideTransition={'slide'}
            hidden={false}
          />
          <Screen />
        </DrawerContainer>
      </TranslateProvider>
    </AuthenticationCheckProvider>

  )
}
```

### Drawer

Wrap the whole project with **`DrawerContainer`**

```js
function App(): JSX.Element {
  return (
    <NavigationContainer
      theme={theme}
      basePath='/home'
    >
      <DrawerContainer>
        <StatusBar
          animated={true}
          barStyle='light-content'
          backgroundColor={colors.primary}
          showHideTransition={'slide'}
          hidden={false}
        />
        <Screen />
      </DrawerContainer>
    </NavigationContainer>
  );
}
```

**props:**
| Property                                  | Description                                      |
| -------------------  | ------------------------------------------------ |
| `drawerConfig`                               | Configuration for a drawer component.           |
| `drawerWidth`                     | The width of the drawer .   Default 300           |
| `drawerPosition`        | The position of the drawer (left, right, or undefined). Default `left` |
| `renderNavigationView`    | Content to render inside the drawer.            |

#### How to use drawer and deferent content

```xml
<Render.screen
        title='home'
        drawerConfig={{
          drawerPosition: 'left',
          drawerWidth: 300,
          renderNavigationView: <DrawerHome/>
        }}
        hasFooter={true}
        path='/home'
        screen={HomeScreen}
/>
```

**Note:** `If you use the navigation drawer in the parent container it will nest in all pages.`
If you don't want to see any screen then follow the example below

```xml
<Render.screen
        title='home'
        drawerConfig={{
          renderNavigationView: undefined
        }}
        hasFooter={true}
        path='/home'
        screen={HomeScreen}
/>
```

Or if you want to add it manually inside the screen component

```js
const Home = (props: ScreenProps) => {
  const router = useRouter()
    const drawer = userDrawer()
    useEffect(() => {
      drawer.setDrawerConfig({
        renderNavigationView: <HomeDrawer />
      })
    }, [])
  return (
    <View>
      <Text>
        Home
      </Text>
      <Link href='/about'>
        About
      </Link>
      <Button
        title='Home'
        onPress={() => {
          router.push('/settings/435345')
        }}
      />
    </View>
  )
}

```

#### Open drawer handler

```js
  const {drawerRef} = userDrawer()
  const openDrawer = () => {
        return drawerRef.current?.openDrawer()
    }
```

#### Close drawer handler

```js
  const {drawerRef} = userDrawer()
  const closeDrawer = () => {
        return drawerRef.current?.closeDrawer()
    }
```

### Theme color

Here's a breakdown of the `themeColorNameProps` type properties and their descriptions:

- `primary`: The primary color used for elements like buttons and highlighting.
- `background`: The background color of the UI.
- `card`: The color of cards or containers in the UI.
- `text`: The text color.
- `link`: The color used for hyperlinks or links.
- `border`: The color of borders and separators.
- `notification`: The color used for notifications or alerts.
- `transparent`: A transparent color.
- `primary_text`: The text color for primary elements.
- `secondary`: A secondary color for elements like secondary buttons.
- `secondary_text`: The text color for secondary elements.
- `success`: The color used to indicate success.
- `success_text`: The text color for success messages.
- `danger`: The color used to indicate danger or errors.
- `danger_text`: The text color for error messages.
- `warning`: The color used to indicate warnings.
- `warning_text`: The text color for warning messages.
- `info`: The color used for informational messages.
- `info_text`: The text color for informational messages.
- `grey`: A general grey color.
- `light_grey`: A lighter shade of grey.
- `dark_grey`: A darker shade of grey.

## Using the operating system preferences

```js
import { useColorScheme } from 'react-native';

function App(): JSX.Element {
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      theme={theme}
      scheme={scheme == 'dark' ? 'dark' : 'default'}
      basePath='/home'
    >
      <DrawerContainer   >
        <StatusBar
          animated={true}
          barStyle='light-content'
          backgroundColor={colors.primary}
          showHideTransition={'slide'}
          hidden={false}
        />
        <N />
      </DrawerContainer>
    </NavigationContainer>
  );
}

```

## Add Screen

Import the **`RenderScreen`** class and declare it in a new variable using the new keyword

```js
  const Render = new RenderScreen()
```

```js
function Screen(): JSX.Element {
  const Render = new RenderScreen()
  return (
    <Render.Render>
          <Render.screen
            path={'/home'}
            title='Home'
            navbar={<Navbar/>}
            // hasNavbar={true}
            isPrivate={true}
            privateState={true}
            screen={Home}
          />

          <Render.screen
            title='Settings'
            // hasNavbar={true}
            path={'/settings'}
            screen={Settings}
          />
          <Render.screen
            title='About'
            // hasNavbar={true}
            path={'/about'}
            screen={About}
          />
    </Render.Render>
  );
}

```

## How loading component work in screen

```js

function SignUpScreen(props: ScreenProps) {
    const router = useRouter()
    const translate = useTranslate()
    const { colors } = useTheme()
    const { push, history, basePath } = useRouter()

    const { isLoading, refetch, role, isLoggedIn, user_info } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            props.setLoadingComponent(true)
            setTimeout(() => {
                history.back()
                props.setLoadingComponent(false)
            }, 100);
        }
        else {
            props.setLoadingComponent(false)
        }
        return () => {
        }
    }, [isLoading, isLoggedIn, refetch])

    const {
        sign_in,
        password_error,
        sign_up,
        password,
        name,
     } = translate

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>()

    const signupHandle = async () => {
       
    }

    return (
        <ScrollView>
          //-----------------------------------------------
          //-----------------------------------------------
          //-----------------------------------------------
          //-----------------------------------------------
          //-----------------------------------------------
        </ScrollView>
    );
}

export default SignUpScreen;
```

```js
export const translate = {
   en: {
        incomplete_order_message: "You have an incomplete order.",
        view_order: "View order",
        discount_high_to_low: "Discount: high to low",
        discount_low_to_high: "Discount: low to high",
        price_high_to_low: "Price: High to low",
        price_low_to_high: "Price: Low to high",
    },
    bn:{
      // ---------------------------------
      // ---------------------------------
      // ---------------------------------
      // ---------------------------------
      // ---------------------------------
    },
    in:{
      // ------------------------------------
      // ------------------------------------
      // ------------------------------------
      // ------------------------------------
      // ------------------------------------
    }
}
```

```js
import React, { useContext, createContext } from 'react';
import { translate, TranslateInterface } from './translate'

const TranslateContext = createContext<TranslateInterface>(translate.bn)
function TranslateProvider({ children }: { children: React.ReactNode }) {
    const bn = translate.bn
    return (
        <TranslateContext.Provider value={bn}>
            {
                children
            }
        </TranslateContext.Provider>
    );
}
export function useTranslate() {
    const translate: TranslateInterface = useContext(TranslateContext);
    return translate
}
export default TranslateProvider;
```

pass parameter:

| Property         | Description                                                        |
|-----------------|--------------------------------------------------------------------|
| `path`           | A string representing a path or identifier for the component.      |
| `screen`         | A function that takes `props` and returns a React element. Used to define the content or component to be rendered in the screen. |
| `title`          | A string representing the title or heading for the component.      |
| `navbar`         | (Optional) A function that renders a navigation bar or header component. It takes `props` and returns a React element. Default: Prebuilt navbar|
| `footer`         | (Optional) A function for rendering a footer component. It takes `props` and returns a React element. |
| `isPrivate`      | A boolean flag that may indicate whether this component requires authentication or authorization to access. It can be used to control access to the component. |
| `privateState`   | A boolean flag that represents the private state of the component. It could be used to determine if the user is currently authenticated or authorized to access the component. |
| `hasFooter`      | A boolean flag that controls whether the component should include a footer. It can be used to toggle the presence of a footer. |
| `hasNavbar`      | A boolean flag that controls whether the component should include a navigation bar or header. It can be used to toggle the presence of a navigation bar. |
| `drawerConfig`      | Drawer configure |

### How to Create a 404 screen

**Use at the end:**

```xml
      <Render.screen
        title='Not Found'
        hasFooter={true}
        hasNavbar={true}
        path='*'
        screen={NotFound}
      />
```

#### How to redirect  to other

```js

export default function NotFound(props: ScreenProps) {
    const router = useRouter();
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setLoadingComponent(true)
        router.push('/home')
        navigation.setLoadingComponent(false)
        return () => {
        }
    }, [])

    return (
        <View>
        </View>
    )
}

```

```js
const Home = (props: ScreenProps) => {
  const router = useRouter()
  return (
    <View>
      <Text>
        Home
      </Text>
      <Link href='/about'>
        About
      </Link>
      <Button
        title='Home'
        onPress={() => {
          router.push('/settings/435345')
        }}
      />
    </View>
  )
}

```

### Dynamic screen

```js
const Navigate = () => {
  const Render = new RenderScreen();
  const navigation = useNavigation();
  const params = useParams()
  const searchparams = useSearchparams()
  return (
    <Render.Render>
      <Render.screen
        title='home'
        // hasNavbar={true}
        path='/settings/:settingID'
        screen={Settings}
      />
      <Render.screen
        title='home'
        // hasNavbar={true}
        path={'/blog/:blogID/:title'}
        screen={About}
      />
    </Render.Render>
  )
}

```

**Note:** Avoid using slashes at the end of path

Bad/not working: `/blog/:blogID/:title/`
Use: `/blog/:blogID/:title`

### Params

```js
const params = useParams()
```

```js
{
  blogID:53455,
  title:"Title"
}
```

| Property       | Details                              |
|----------------|--------------------------------------|
| `key` | Keys of type `string`.              |
| `values` | Values of type `string` or `number`. |

#### Screen component props

| Property               | Details                                        |
|------------------------|------------------------------------------------|
| `loadingComponent`    | Indicates whether a loading component is displayed. |
| `setLoadingComponent` | Function to set the loading component state. |
| `customDynamicNavbar` | Custom dynamic navigation bar component.      |
| `setCustomDynamicNavbar` | Function to set the custom dynamic navbar component. |
| `params`               | Parameters for the screen.                     |

#### Router properties

```js
  const router = useRouter()
  console.log(router)
```

##### navigate a link

```js
 const Home = (props: ScreenProps) => {
  const router = useRouter()
  return (
    <View>
      <Text>
        Home
      </Text>
      <Link href="/settings/435345?search=5435&query=45435&done=true#done">
        Settings
      </Link>
      <Button
        title='Settings'
        onPress={() => {
          router.push('/settings/435345?search=5435&query=45435&done=true#done')
        }}
      />
    </View>
  )
}
```

## Searchparams

```js
  const router = useRouter()
  const searchparams = router?.query
```

**with query:**
<https://example.com/path?name=Branch&product=5345>
| Property       | Details                              |
|----------------|--------------------------------------|
| `key` | Keys of type `string`.              |
| `values` | Values of type `string` or `number`. |

**Note:** Avoid using slashes at the end of link/url

Bad/not working: `/settings/435345/?search=5435&query=45435&done=true#done`
Use: `/settings/435345?search=5435&query=45435&done=true#done`

| Property        | Description                                                          |
|-----------------|----------------------------------------------------------------------|
| path            | A string or `null` representing the path.                           |
| basePath        | A string representing the base path.                                 |
| hash            | A string or `null` representing the hash.                           |
| protocol        | A string or `null` representing the protocol.                       |
| asPath           | A string representing the asPath.                                   |
| origin          | A string or `null` representing the origin.                         |
| username        | A string or `null` representing the username.                       |
| password        | A string or `null` representing the password.                       |
| hostname        | A string or `null` representing the hostname.                       |
| port            | A string or `null` representing the port.                           |
| query           | An object with keys as strings and values of any type.              |
| push            | A function for navigating with options, returning a promise.        |
| history         | An object with methods for navigating history and retrieving history stack. |
| title         | Current screen title |

### Navigation Provider

```js
 const navigation = useNavigation();
```

**Navigation properties:**

| Property       | Details                                      |
|----------------|----------------------------------------------|
| `loadingComponent`    | Indicates whether a loading component is displayed. |
| `setLoadingComponent` | Function to set the loading component state. |
| `customDynamicNavbar` | Custom dynamic navigation bar component.      |
| `setCustomDynamicNavbar` | Function to set the custom dynamic navbar component. |

### Modal

<https://reactnative.dev/docs/modal>

## Components

- StyledText
- PressableButton
- TouchableOpacityButton
- Link
- checkbox
- input
- Toast
- Ratings
- Pagination
- Dropdown picker

## StyledText

```xml
<StyledText>
        Home
</StyledText>
```

| Property        |  Description                                      |
| --------------- | ------------------------------------------------ |
| `children`      |  Child elements or content to be rendered.       |
| `style` (optional) |  Styling information for the component. |
| `numberOfLines` (optional)  Number of lines to limit the content (used in text components). |

## PressableButton or TouchableOpacityButton

```xml
    <PressableButton onPress={()=>{}} text={'Home'} />
```

| Property         | Description                                                                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| `text` (optional) | The text or label to be displayed on the button.                                                                    |
| `onPress` (optional)  | A function to be executed when the button is pressed.                                                               |
| `disableStyle` (optional)  | Styling for the button when it's disabled.                                                                |
| `containerStyle` (optional)  | Additional container style for the button.                                                                           |
| `disabled` (optional)                | If `true`, the button is in a disabled state.                                                                        |
| `image` (optional)            | An image component or source to be displayed on the button.                                                          |
| `image_url` (optional)        | URL or source for the image to be displayed on the button.                                                           |
| `imageStyle` (optional) | Styling for the image component.                                                                   |
| `textStyle` (optional)  | Styling for the text on the button.                                                                 |

These descriptions provide a detailed explanation of each property, its data type, and the role it plays in the `buttonPropsType` type definition. You can use this table to better understand the purpose of each property and how to use them in your code or documentation.

## Link

```xml
     <Link href='/path?name=Branch&products=[Journeys,Email,Universal%20Ads]'>
        lorem
      </Link>
```

| Property   Description                                      |
| --------- | ------------------------------------------------ |
| `href`        | The URL or link destination.                     |
| `children` | Child elements or content to be displayed as the link text. |
| `style` (optional)  | Styling information for the link. |

## Checkbox

```xml
 <Checkbox isChecked={isChecked} setChecked={setChecked}/>
```

| Property      | Description                                       |
| --------------| ------------------------------------------------- |
| `isChecked`                                             | Indicates whether the checkbox is checked.       |
| `setChecked`     | A function to update the `isChecked` state.       |
| `style` (optional)  | Styling information for the checkbox. |
| `asset` (optional)          | Defines assets for the checked and unchecked image. |

## Ratings

```xml
<Ratings rating={10} size={10} />
```

| Property           | Description                                      |
| ---------  | ------------------------------------------------ |
| `size` (optional)                     | Specifies the size of the component.            |
| `rating`                            | Represents the rating value.                   |
| `asset` (optional)| Defines assets for the filled and empty image. |

## Toast

```js
  Toast({ text: noResultsFoundPlaceholder })
```

| Property            | Description                                      |
| ---------  | ------------------------------------------------ |
| `type` (optional)| Specifies the type of the component.            |
| `text`                     | Contains the text content.                      |

## Input

```xml
 <Input
          setValue={setEmail}
          value={email}
          placeholder={"emailTr"}
          toast={"email_error"}
          pattern={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
        />
```

| Property             |Description                                           |
| -------------------| ----------------------------------------------------- |
| `autoFocus` (optional)                           | Determines if the input should receive focus automatically. |
| `containerStyle` (optional)  | Styling information for the container of the input. |
| `style` (optional)  | Styling information for the input component. |
| `asset` (optional)                | Specifies an asset associated with the input. |
| `value`                                 | Contains the current value of the input. |
| `multiline` (optional)                        | Indicates if the input allows multiple lines of text. |
| `setValue`                                      | A function to set or update the input value. |
| `defaultValue` (optional)                       | Provides a default value for the input. |
| `placeholder` (optional)                         | Displays a placeholder text in the input field. |
| `pattern` (optional)                            | Defines a regular expression pattern for input validation. |
| `toast` (optional)                          | A message or toast to display as feedback for the input. |
| `type` (optional)                       | password or text |

## Pagination

```xml
 <Pagination
        currentPage={10}
        getLastPage={100} pageHandle={() => { }}
        disableButton={{
          bg: 'red',
          text: 'white'
        }}
        button={{
          bg: 'gold',
          text: "white",
          borderWidth: 1,
          borderColor: 'red',
        }}
      />
```

| Property                    | Description                                   |
| ---------------------  --------------------------------------------- |
| `disableButton` (optional)                          | Configurations for a disabled button.          |
| `button` (optional)  | Configurations for an enabled button. |
| `pageHandle`                                                             | A function or handler for page management.     |
| `currentPage`                                                              | Represents the current page or state.          |
| `getLastPage`                                                           | A function or handler to retrieve the last page. |

## Dropdown picker

```js
<View>
        <DropDownPicker
          multipleConfig={{
            hasMultiple: true,
            storeValue: storeValue,
            resetTitle: "Reset",
            selectedTitle: "Selected",
            setStoreValue: setStoreValue
          }}

          items={[
            { label: '4545', value: "FFFFFFsFF" },
            { label: '4545', value: "FFFFFfFFF" },
            { label: '4545', value: "FFFFsfFFFF" },
            { label: '4545', value: "FFFFFFFF" },
            { label: '4545', value: "FFFFfFFFF" },
          ]}
        />
      </View>
```

```ts

type DropDownPickerProps = {
    placeholderConfig?: {
        noResultsFoundPlaceholder?: string,
        searchPlaceholder?: string,
        placeholder?: string,
    },

    multipleConfig?: {
        asset?: {
            checked?: number,
            unchecked?: number
        }
        hasMultiple: boolean,
        setStoreValue: React.Dispatch<any[]>,
        storeValue: any[],
        selectedTitle: string,
        resetTitle: string,
    }
    singleConfig?: {
        value: {
            id?: number | string,
            label: string;
            value: string;
        },
        defaultValue: {
            id?: number | string,
            label: string;
            value: string;
        },
        setValue: React.Dispatch<React.SetStateAction<{
            id?: number | string,
            label: string;
            value: string;
        }>>
    }

    hiddenArrow?: boolean,
    imageStyle?: ViewStyle | TextStyle | ImageStyle | object,
    textStyle?: ViewStyle | TextStyle | ImageStyle | object,
    width?: number,
    disable?: boolean,
    disableStyle?: ViewStyle | TextStyle | ImageStyle | object,
    containerStyle?: ViewStyle | TextStyle | ImageStyle | object,
    items: {
        id?: number | string,
        label: string;
        value: string;
    }[],
    animationType?: "slide" | "fade"
    asset?: number,
}
```

| Property                 | Description                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `placeholderConfig`      | Configuration for the placeholder text, including `noResultsFoundPlaceholder`, `searchPlaceholder`, and `placeholder`. |
| `multipleConfig`         | Configuration for multiple selections, including `asset`, `hasMultiple`, `setStoreValue`, `storeValue`, `selectedTitle`, and `resetTitle`. |
| `singleConfig`           | Configuration for single selection, including `value`, `defaultValue`, and `setValue`. |
| `hiddenArrow`            | A boolean indicating whether the arrow icon is hidden.                                                |
| `imageStyle`             | Styling for the image within the component.                                                           |
| `textStyle`              | Styling for the text within the component.                                                            |
| `width`                  | The width of the component.                                                                          |
| `disable`                | A boolean indicating whether the component is disabled.                                                |
| `disableStyle`           | Styling for the disabled component.                                                                   |
| `containerStyle`         | Styling for the component container.                                                                  |
| `items`                  | An array of objects representing selectable items with properties `id`, `label`, and `value`.        |
| `animationType`          | The type of animation for the dropdown, either `'slide'` or `'fade'`.                                  |
| `asset`                  | An optional asset for customization, including `checked` and `unchecked` properties.                |
