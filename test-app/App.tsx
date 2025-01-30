import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, RenderScreen, useTheme } from './src';
import { ScreenProps } from './src/types';


export default function Root() {

  return (
    <NavigationContainer
      // scheme='dark'

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
    <>
      <StatusBar
        animated={true}
        barStyle={dark ? "light-content" : 'dark-content'}
        backgroundColor={colors.card}
        showHideTransition={'slide'}
        hidden={false}
      />
      <Screen />
    </>
  )
}

function Screen(): JSX.Element {
  const Render = new RenderScreen()

  return (
    <Render.Render>
      <Render.screen
        path={'/home'}
        title='Home'
        hasBottomTabs
        // hasNavbar={true}
        // navbar={<MainNavbar
        //   title='Ahliya' children={<Home />}
        // />}
        isPrivate={true}
        privateState={true}
        screen={Home}
      />
      <Render.screen
        title='Settings'
        // hasNavbar={true}
        path={'/settings/:setting'}
        screen={Settings}
      />
      <Render.screen
        title='About'
        // hasNavbar={true}
        path={'/about/:id'}
        screen={About}
      />
    </Render.Render>
  );
}


const Home = ({ navigate }: ScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate(`/x/${new Date().toDateString()}`)}
      >
        <Text style={styles.buttonText}>Not Found</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate(`/about/${new Date().toDateString()}`)}
      >
        <Text style={styles.buttonText}>Go to About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigate(`/settings/${new Date().getTime()}`)}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const About = ({ navigate, params, setTitle }: ScreenProps) => {
  const { colors, dark } = useTheme();
  useEffect(() => {
    setTitle('testing')
  }, [])
  return (
    <View style={[styles.container, { backgroundColor: colors?.danger }]}>
      <Text style={styles.title}>ℹ️ About</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate("/home")}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const Settings = ({ navigate, params }: ScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate("/home")}>
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