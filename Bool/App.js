import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
// import {
// } from 'react-native'
import { 
  Font, 
  SplashScreen, 
  Asset
} from 'expo';

import LogoScreen from './src/screens/LogoScreen';
import AccountScreen from './src/screens/AccountScreen';
import HomeScreen from './src/screens/HomeScreen';

const AuthStack = createStackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: {
        header: null,
    },
  },
});
const AppStack = createStackNavigator({Home: HomeScreen});
const LogoStackTemp = createStackNavigator({Logo: LogoScreen});

const AppNavigator = createSwitchNavigator({
  // App: AppStack,
  Logo: LogoScreen,
  Auth: AuthStack,
  // Account: AccountScreen,
});

const AppContainer = createAppContainer(AppNavigator);


function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}


class App extends React.Component {
  state = { ready: false };

  constructor(props) {
    super(props);
    SplashScreen.preventAutoHide();
  }

  componentDidMount() {
    this._loadAssetsAsync()
      .then(() => {this.setState({ ready: true })})
      .catch(error => console.error(`Error while loading: ${error.stack}`));
  }

  render() {
    if(!this.state.ready) {
      return null;
    }
    return(
      <AppContainer />
    )
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([ require('./assets/splash.png'),]);
    const fontAssets = cacheFonts([
      {'montserrat-medium': require('./assets/fonts/Montserrat-Medium.otf')},
      {'gotham-rounded-bold': require('./assets/fonts/Gotham-Rounded-Bold.otf')},
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }
}

export default App;