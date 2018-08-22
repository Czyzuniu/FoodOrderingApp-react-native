import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions
} from 'react-native'

import { Header } from 'react-native-elements'

import SideMenu from 'react-native-side-menu'
import Menu from '../components/Menu'
import MainMenuItem from '../components/MainMenuItem'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const menuItems = [
  {
    name:'Food',
    path:require('../assets/img/food.jpg')
  },
  {
    name:'Drinks',
    path:require('../assets/img/drinks.jpg')
  },
  {
    name:'Deserts',
    path:require('..//assets/img/deserts.jpg')
  }]

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', onPress: () => this.props.navigation.openDrawer() }}
      />
        <View style={styles.rows}>
          <FlatList
            data={menuItems}
            renderItem={({item}) => <MainMenuItem menuItemName={item.name} path={item.path}></MainMenuItem>}
          />
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  rows: {
    flexDirection:'row',
    flexWrap:'wrap'
  }
});