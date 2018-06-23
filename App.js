/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MainMenuItem from './src/components/MainMenuItem.js'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

const menuItems = [
  {
    name:'Food',
    path:require('./src/assets/img/food.jpg')
  },
  {
    name:'Drinks',
    path:require('./src/assets/img/drinks.jpg')
  },
  {
    name:'Deserts',
    path:require('./src/assets/img/deserts.jpg')
  }]

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          renderItem={({item}) => <MainMenuItem menuItemName={item.name} path={item.path}></MainMenuItem>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection:'row',
    flexWrap:'wrap'
  }
});
