import React, {Component} from 'react';
import {StyleSheet, View, TextInput,Text} from 'react-native';
import CardItem from './CardItem';

export default class LoginInputRowView extends Component {
  // In class component props will be auto reffered by this.props
  render() {
    return (
      <CardItem>
      <Text style={styles.titleStyle}>
      {this.props.label}
      </Text>
      <TextInput
      value={this.props.value}
      onChangeText={this.props.onChangeText}
      autoCapitalize = {'none'}
      secureTextEntry = {this.props.secureTextEntry}
      autoCorrect= {false}
      style={styles.textFieldStyle}
      placeholder={this.props.placeholder}
      />
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    paddingLeft: 12,
    textAlign: 'right',
    width: 80,
  },
  textFieldStyle: {
    flex: 1,
    marginLeft: 8,
    height: 40,
  }
});
