import { StatusBar, View } from 'react-native';
import { DrawerContainer, NavbarTitleBackButton, NavigationContainer, RenderScreen, useRouter, useTheme } from './navigators';
import { PressableButton } from './components';

export default function App() {
  return (
    <NavigationContainer
      // scheme={scheme !== 'dark' ? 'dark' : 'default'}
      basePath={'/home'}
    >
      <WrapScreen />
    </NavigationContainer>
  );
}

const WrapScreen = () => {
  const { dark, colors } = useTheme();
  return (
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

  )
}

function Screen(): JSX.Element {
  const Render = new RenderScreen()
  return (
    <Render.Render>
      <Render.screen
        path={'/home'}
        title='Home'
        // hasNavbar={true}
        navbar={<NavbarTitleBackButton
          title='' children={<Home />}
        />}
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

const Home = () => {
  const router = useRouter()
  return (
    <View>
      <PressableButton text={"About"} onPress={() => { router.push('/about') }} />
    </View>
  )
}
const About = () => {
  const router = useRouter()
  return (
    <View>
      <PressableButton text={"Settings"} onPress={() => { router.push('/settings') }} />
    </View>
  )
}

const Settings = () => {
  const router = useRouter()
  return (
    <View>
      <PressableButton text={"Home"} onPress={() => { router.push('/home') }} />
    </View>
  )
}
