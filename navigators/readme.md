# react-native-router-screen

[![Version npm](https://img.shields.io/npm/v/react-native-router-screen.svg?style=flat-square)](https://www.npmjs.com/package/react-native-router-screen)

## Npm install

```
npm i react-native-router-screen
```

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
| `homeNavbar` | `(props: any) => React.ReactNode \| React.JSX.Element` |
| `navbar` | `(props: any) => React.ReactNode \| React.JSX.Element` |
| `footer` | `(props: any) => React.ReactNode \| React.JSX.Element` |

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

  return (
    <NavigationContainer
      theme={theme}
      basePath='/home'
    >
      <StatusBar
        animated={true}
        barStyle='light-content'
        backgroundColor={colors.primary}
        showHideTransition={'slide'}
        hidden={false}
      />
      <Screen />

    </NavigationContainer>
  );
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
| Property            | Type                              | Description                                      |
| ------------------- | --------------------------------- | ------------------------------------------------ |
| `drawerConfig`      | Object                            | Configuration for a drawer component.           |
| `drawerWidth`       | number (optional)                 | The width of the drawer .   Default 300           |
| `drawerPosition`    | "left" or "right" or undefined    | The position of the drawer (left, right, or undefined). Default `left` |
| `renderNavigationView` | React.ReactNode (optional) or undefined      | Content to render inside the drawer.            |

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
const Home = (props: screenPropsType) => {
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

export default function NotFound(props: screenPropsType) {
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
const Home = (props: screenPropsType) => {
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
 const Home = (props: screenPropsType) => {
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
