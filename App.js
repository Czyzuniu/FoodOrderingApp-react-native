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

const menuItems = ['Pizza','Drink' ,'Deserts']

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          renderItem={({item}) => <MainMenuItem menuItemName={item}></MainMenuItem>}
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
