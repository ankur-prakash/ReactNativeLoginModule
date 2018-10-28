import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const CustomButton = (props) => {

return (
  <TouchableOpacity
   onPress = {props.onPress}
   style={styles.buttonStyle}>
  <Text style = {styles.textStyle}>{props.title}</Text>
  </TouchableOpacity>
);

};

const styles = {
  textStyle: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#007aff'
  },

  buttonStyle: {
    flex: 1, // i want it to expand as much as possible
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
};

export default CustomButton;
