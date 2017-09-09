import React, { Component } from 'react';
import { Provider } from 'react-redux';
console.disableYellowBox = true;
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeScreen from './src/Components';

export default class CoffeeGram extends Component {
  render() {
    return (
      <Provider>
        <HomeScreen />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('CoffeeGram', () => CoffeeGram);
