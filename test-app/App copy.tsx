import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import App, { NavigationContainer } from './test/navigation';
import RenderScreen from './test/navigation/Screen';

const app = new App('/home');
const Router = () => app.Router({
  router: [
    {
      path: '/home/',
      title: 'Home',
      screen: Home,
    },
    {
      path: '/about',
      title: 'About',
      screen: About,
    },
    {
      path: '/settings',
      title: 'Settings',
      screen: Settings,
    }
  ]
});

export default function Root() {

  return (
    <NavigationContainer>
      {/* <Header/> */}
      <Screen />
      <View style={{ padding: 100 }}>
        <Router />
      </View>
    </NavigationContainer>
  );
}

function Screen(): JSX.Element {
  const Render = new RenderScreen()
  return (
    <Render.Render>
      <Render.screen
        path={'/home'}
        title='Home'
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("/about")}
      >
        <Text style={styles.buttonText}>Go to About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigate("/settings")}>
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const About = ({ navigate }: { navigate: (screen: string) => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ About</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate("/home")}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const Settings = ({ navigate }: { navigate: (screen: string) => void }) => {
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