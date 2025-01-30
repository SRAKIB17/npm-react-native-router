import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { assets_images } from './assets/assets_images';
import { BottomTabs, HeaderBar, LoadingOverlay, MainHeader, NavigationContainer, RenderScreen, ScreenProps, useNavigation, useRouter, useTheme } from './navigators';
function Loader() {
  return <LoadingOverlay />
}
function MainNavbar() {
  const router = useRouter();

  return (
    <MainHeader title={router.title || "BdHex"}>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/about")}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </MainHeader>
  )
}

function Navbar() {
  const router = useRouter();
  return (
    <HeaderBar title={router.title || "BdHex"} >
      {/* <View style={{ width: 100 }}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View> */}
    </HeaderBar>
  )
}

function Bottom() {
  const router = useRouter();

  return (
    <BottomTabs
      tabs={[
        {
          icon: {
            default: assets_images.arrow_left_indicate_light,
            select: assets_images.arrow_left_indicate_light
          },
          path: '/about/sf',
          title: "Home"
        }
      ]}
      style={{ backgroundColor: '' }}
      buttonStyle={{
        backgroundColor: 'red',
      }}
    >
      <View>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>

    </BottomTabs>
  )
}


export default function Root() {

  return (
    <NavigationContainer
      // scheme='dark'
      config={{
        loadingOverlay: <Loader />,
        headerBar: <Navbar />,
        mainHeader: <MainNavbar />,
        bottomTabs: <Bottom />
      }}
      // scheme={scheme !== 'dark' ? 'dark' : 'default'}
      basePath={'/home'}
    >
      <WrapScreen />
    </NavigationContainer>
  );
}

const WrapScreen = () => {
  const { dark, colors } = useTheme();
  const navigation = useNavigation();
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
        // hasBottomTabs
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

const About = ({ navigate, params, setLoadingScreen, setTitle, title, setLoading, isLoading }: ScreenProps) => {
  const { colors, dark } = useTheme();

  // useEffect(() => {
  setTitle('testing')
  // }, [])


  const fet = () => {
    setTitle("😍😍😍😍😍😍")
  }

  // const fet = () => {
  //   setLoadingScreen(true)
  //   setTimeout(() => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setTitle("😍😍😍😍😍😍")
  //       setLoading(false);
  //     }, 2000);
  //     setLoadingScreen(false)
  //   }, 3000);
  // }

  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>ℹ️ About</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate("/home")}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => fet()}>
        <Text style={styles.buttonText}>Testing LoadingOverlay</Text>
      </TouchableOpacity>
    </View>
  );
};

const Settings = ({ navigate, params, setConfig }: ScreenProps) => {
  useEffect(() => {
    setConfig({
      bottomTabs: <Navbar />
    })
    // setTimeout(() => {
    //   set({
    //     headerBar: <Bottom />
    //   })
    // }, 2000);
  }, []);

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