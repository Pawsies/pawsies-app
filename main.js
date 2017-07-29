import Expo, { AppLoading } from 'expo';
import React from 'react';
import { Platform } from 'react-native';
import { App } from './src/bootstrap';

class Main extends React.Component {

  state = {
    isReady: false
  }

  async componentWillMount() {
    if (Platform.OS === 'android') {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    } else {
      return <App />;
    }
  }

}

Expo.registerRootComponent(Main);
