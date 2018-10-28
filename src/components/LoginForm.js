import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Alert} from 'react-native';
 import Card from './Card';
 import CustomButton from './CustomButton';
 import LoginInputRowView from './LoginInputRowView';
 import CardItem from './CardItem';
 import firebase from "firebase";

export default class LoginForm extends Component {

  constructor(props) {
     super(props);
     this.state = {email: '', password: ''}
   }

  render() {
    return(
       <Card>
       <LoginInputRowView
       value={this.state.email}
       onChangeText={(text) => this.setState({email: text})}
       secureTextEntry = {false}
       label='Email'
       placeholder='abcd@gmail.com'/>
       <LoginInputRowView
       value={this.state.password}
       onChangeText={(text) => this.setState({password: text})}
       secureTextEntry
       label='Password'
        placeholder='at least 6 characters'/>

      <CardItem>
      <CustomButton
      // if we don't bind it then this will not be available in called function
      //so state cannot be accessed
      onPress={this.onLoginPress.bind(this)}
      title= 'Login'
      />
      </CardItem>

      </Card>
    );
  }

  onLoginPress() {
    console.log('loginPressed');
    console.log("email = " + this.state.email);
    console.log("password = " + this.state.password);
    //desctruture
    const {email, password} = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log("Firebase error = " + errorMessage);
      Alert.alert(
  'Firebase Error',
  errorMessage,
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
    });

  }
}
