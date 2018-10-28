import React, {Component} from 'react';
import {View, Text} from 'react-native';

// props are properties arguments which can be passed
//props is javascript object
// Whenver we use javascript object in jsx we use { }
const Header = (props) => {

  const {textStyle} = styles; //destructing
  return (
    <View style={styles.container}>
    <Text style={textStyle}> {props.headerText} </Text>
    </View>);
}

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: 'steelblue',
    height: 90,
    paddingTop: 30,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 1,
    position: 'relative',
  },

  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
};

export default Header;
// export default Header extends Component {
//
//   render() {
//
//   }
// }
