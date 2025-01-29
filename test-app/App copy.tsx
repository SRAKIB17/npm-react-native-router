import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import App from './@dbnx/navigation';

import { DrawerContainer, MainNavbar, RenderScreen, useTheme } from './navigators';

const app = new App('/');
const Router = app.Router

export default function Root() {

  return (
    <View style={{ padding: 100 }}>
      <Router
        router={[
          {
            path: '/home',
            title: 'Home',
            screen: Home,
          },
        ]}
      />
    </View>
    // <NavigationContainer
    //   // scheme={scheme !== 'dark' ? 'dark' : 'default'}
    //   basePath={'/home'}
    // >
    //   <WrapScreen />
    // </NavigationContainer>
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
    <Render.Render >
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


const Home = ({ navigate }: { navigate: (screen: string) => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate("About")}>
        <Text style={styles.buttonText}>Go to About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigate("Settings")}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const About = ({ navigate }: { navigate: (screen: string) => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ About</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate("Home")}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const Settings = ({ navigate }: { navigate: (screen: string) => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate("Home")}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: "center",
    alignContent: 'center',
    height: 48,
    borderRadius: 4,
    margin: 5
  },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});