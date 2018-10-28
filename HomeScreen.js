/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput,Image, Dimensions} from 'react-native';
import Header from './src/components/Header';
import LoginForm from './src/components/LoginForm';
import firebase from "firebase";

type Props = {};
export default class App extends Component<Props> {

  static navigationOptions = {
    title: 'Login',
  };

// WHY FIREBASE INSTALLED HERE
  componentWillMount() {

    var config = {
   apiKey: 'AIzaSyC9Q9uPii5vTCYwUsfSvTnPRumrV_BZwG0',
   authDomain: 'auth-80140.firebaseapp.com',
   databaseURL: 'https://auth-80140.firebaseio.com',
   projectId: 'auth-80140',
   storageBucket: 'auth-80140.appspot.com',
   messagingSenderId: '145871084887'
   };

     firebase.initializeApp(config);
  }
// <Header headerText='Login' />
  render() {
    return (
      <View>
      <Image
        style= {styles.imageStyle}
        source={require('./resources/images/logo.png')}
      />
      <LoginForm />
      <Button
      style={styles.forgotPasswordStyle}
      onPress={() => console.log('forgot password called')}
      title='Forgot Password?'
      />

      <View style = {styles.signUpContainer}>
      <Text style = {styles.signUpBannerTextStyle}> Don't have an account? </Text>
      <Button
      onPress={this.signUpPressed.bind(this)}
      title='SignUp'
      />
      </View>

      </View>
    );
  }

  signUpPressed() {
    console.log('signup Pressed');
    this.props.navigation.navigate('SignUp',{name:'Jane'});
  }
}

const styles = StyleSheet.create({
  signUpBannerTextStyle: {
    fontSize: 18,
    fontWeight: '400'
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPasswordStyle: {
    alignSelf: 'center',

  },
  imageStyle: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});
