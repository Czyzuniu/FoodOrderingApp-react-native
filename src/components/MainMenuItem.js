
import React, { Component } from 'react';
import { Text } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


type Props = {};
export default class MainMenuItem extends Component<Props> {
  render() {
    return (
      <ImageBackground style={styles.container} source={this.props.path}>
        <View style={styles.overlay}>
            <Text h2 style={styles.itemText} fontFamily="notoserif">{this.props.menuItemName}</Text>
        </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    borderColor:'black',
    borderWidth:1,
    margin:5, 
  },
  overlay: {
    height:150,
    width:width - (width / 100) * 3.5,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
    itemText: {
    color:'white'
  }

})