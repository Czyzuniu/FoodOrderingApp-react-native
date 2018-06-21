
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';


let height = Dimensions.get('window').height
let width = Dimensions.get('window').width


type Props = {};
export default class MainMenuItem extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      		<Text>{this.props.menuItemName}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderColor:'black',
    borderWidth:1,
    margin:5, 
    height:150,
    width:width - (width / 100) * 3.5
  }


})