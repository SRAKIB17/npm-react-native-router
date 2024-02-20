import React, { useRef } from 'react';
import { Animated, PanResponder, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { PressableButton, StyledText } from './components';
import { DrawerContainer, MainNavbar, NavigationContainer, RenderScreen, useRouter, useTheme, useNavigation, } from './navigators';


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
  const x = useNavigation()
  console.log(x)
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
        navbar={<MainNavbar
          title='Ahliya' children={<Home />}
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
  const router = useRouter();

  return (
    <ScrollView>
      <PressableButton text={"About"} onPress={() => { router.push('/about') }} />
      <CustomDrawer />
    </ScrollView>
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


const CustomDrawer = () => {
  const drawerWidth = 300;
  const offsetX = useRef(new Animated.Value(-drawerWidth)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        offsetX.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx < -100) {
          // Close drawer
          Animated.timing(offsetX, {
            toValue: -drawerWidth,
            duration: 300,
            useNativeDriver: false,
          }).start();
        } else {
          // Open drawer
          Animated.timing(offsetX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;


  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [{ translateX: offsetX }],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <StyledText>
          Drawer Content
        </StyledText>
      </Animated.View>
      <View style={styles.mainContent}>
        <Text>Main Content</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 300, // Change as needed
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderColor: '#ccc',
    zIndex: 1,
    elevation: 5,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

