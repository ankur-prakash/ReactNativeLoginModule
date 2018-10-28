import React from 'react';
import ReactNative from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  SignUp: { screen: SignUpScreen }
});

export default App;
