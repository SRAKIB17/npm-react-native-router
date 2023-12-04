import React, { createContext, useRef, useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, SafeAreaView, Button, useColorScheme } from 'react-native';

import {
  NavigationContainer,
  RenderScreen, useRouter, useNavigation, useParams, ScreenProps, DrawerContainer, userDrawer, useTheme
} from 'react-native-router-screen';

import {
  Link,
  Pagination,
  PressableButton,
  Ratings,
  StyledText,
  Toast,
  Input,
  TouchableOpacityButton
} from 'react-native-router-screen'

// import { } from 'react-native-router-screen/navigators'

const theme = {
  dark: {
    background: 'red'
  },
  default: {
    background: 'green',
    primary: 'gold'
  }
}

function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      theme={theme}
      scheme={scheme == 'dark' ? 'dark' : 'default'}
      basePath='/home'
    >
      <DrawerContainer config={{
        drawerPosition: "right",
        drawerWidth: 100
      }}>
        <StatusBar
          animated={true}
          barStyle='light-content'
          showHideTransition={'slide'}
          hidden={false}
        />
        <N />
      </DrawerContainer>
    </NavigationContainer>
  );
}
const Test = () => {
  return (
    <View>
      <StyledText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus sequi nesciunt totam dolores fuga suscipit reiciendis praesentium, quis ex ab maxime quos eveniet ad ducimus explicabo deserunt mollitia dicta possimus.
      </StyledText>
    </View>
  )
}
const N = () => {
  const Render = new RenderScreen();

  return (
    <Render.Render>
      <Render.screen
        path='/home'
        title='tes'
        hasFooter={true}
        // hasNavbar={true}
        // isPrivate={true}\
        // privateState={true}
        screen={Home}
      />

      <Render.screen
        title='home'

        hasFooter={true}
        // hasNavbar={true}
        path='/settings/:settingID/:rakib'
        screen={Settings}
      />

      {/* NOT FOUND PAGE */}
      {/* <Render.screen
        title='Notfound'
        hasFooter={true}
        hasNavbar={true}
        path='*'
        screen={NotFound}
      /> */}
    </Render.Render>
  )
}
const NotFound = () => {
  return <View></View>
}

const Home = (props: ScreenProps) => {
  const router = useRouter()
  const param = useTheme()
  const theme = useTheme()

  const drawer = userDrawer()
  const [email, setEmail] = useState('');
  return (
    <View>
      <Ratings rating={10} size={10} />
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
      <TouchableOpacityButton onPress={() => { }} text={'Home'} />
      <Link href='/path?name=Branch&products=[Journeys,Email,Universal%20Ads]'>
        lorem
      </Link>
      <Button
        title='Home'
        onPress={() => {
          router.push('/settings/435345/rakib?search=5435&query=45435&done=true#done')
        }}
      />
    </View>
  )
}

const Settings = (props: ScreenProps) => {
  const router = useRouter()
  return (
    <View>
      <Text>
        Settings
      </Text>
      <Button
        title='Home'
        onPress={() => {
          router.push('/settings')
        }}
      />
    </View>
  )
}



export default App;
