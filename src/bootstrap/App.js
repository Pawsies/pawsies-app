import React from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import { getNativeBaseTheme } from '../conventions';
import { configureStore } from '../utils';
import { AppNavigator } from '../bootstrap';

export default class App extends React.Component {

  state = {
    store: configureStore()
  }

  render() {
    return (
      <StyleProvider style={ getNativeBaseTheme() }>
        <Provider store={ this.state.store }>
          <AppNavigator />
        </Provider>
      </StyleProvider>
    );
  }

}