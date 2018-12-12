import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View } from 'react-native';
import { Provider } from 'react-redux';
import { Drawer } from './src/Router';
import store from './src/redux/store';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
console.disableYellowBox = true;

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Drawer />
      </Provider>
    );
  }
}
