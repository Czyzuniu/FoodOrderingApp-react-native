
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';


let height = Dimensions.get('window').height
let width = Dimensions.get('window').width


type Props = {};
export default class MainMenuItem extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={this.props.path}>
          <Text>{this.props.menuItemName}</Text>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'black',
    borderWidth:1,
    margin:5, 
    height:150,
    width:width - (width / 100) * 3.5
  }


})