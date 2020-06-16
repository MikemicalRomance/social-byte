import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Login from "./src/screens/Login";
import Navigate from "./src/screens/Navigate";
import Stats from "./src/screens/Stats";
import Profile from "./src/screens/Profile";
import Walkthrough from "./src/screens/Walkthrough";
import Stats1 from "./src/screens/Stats1";
import Stats2 from "./src/screens/Stats2";
import Login1 from "./src/screens/Login1";
import Navigate1 from "./src/screens/Navigate1";
import Stats3 from "./src/screens/Stats3";

const DrawerNavigation = createDrawerNavigator({
  Login: Login,
  Navigate: Navigate,
  Stats: Stats,
  Profile: Profile,
  Walkthrough: Walkthrough,
  Stats1: Stats1,
  Stats2: Stats2,
  Login1: Login1,
  Navigate1: Navigate1,
  Stats3: Stats3
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Login: Login,
    Navigate: Navigate,
    Stats: Stats,
    Profile: Profile,
    Walkthrough: Walkthrough,
    Stats1: Stats1,
    Stats2: Stats2,
    Login1: Login1,
    Navigate1: Navigate1,
    Stats3: Stats3
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "karla-700italic": require("./src/assets/fonts/karla-700italic.ttf"),
      "karla-regular": require("./src/assets/fonts/karla-regular.ttf"),
      "karla-700": require("./src/assets/fonts/karla-700.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
