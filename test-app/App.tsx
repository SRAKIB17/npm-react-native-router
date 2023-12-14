import { StatusBar, View } from 'react-native';
import { DrawerContainer, NavigationContainer, RenderScreen, useTheme } from './navigators';

export default function App() {
  return (
    <NavigationContainer
      // scheme={scheme !== 'dark' ? 'dark' : 'default'}
      basePath={'/'}
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
  return (
    <View>

    </View>
  )
}
const About = () => {
  return (
    <View>

    </View>
  )
}

const Settings = () => {
  return (
    <View>

    </View>
  )
}
