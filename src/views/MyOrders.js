import React, { Component } from 'react';
import { Header } from 'react-native-elements'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions
} from 'react-native'

import HeaderBar from '../components/HeaderBar'

export default class MyOrders extends Component {
  render() {
  return (
    <View style={styles.container}>
     <HeaderBar navigation={this.props.navigation}/>
      <View style={styles.main}>
        <Text style={{textAlign:'center'}}>You have no orders :(</Text>
      </View>
    </View>
    )
  }
};






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  main: {
    flex:1,
    alignContent:'center',
    justifyContent:'center',
  }
});