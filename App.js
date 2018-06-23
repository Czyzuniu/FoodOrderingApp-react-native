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
import Menu from './src/components/Menu'
import MainMenuItem from './src/components/MainMenuItem'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

  render() {
    const menu = <Menu/>;

    return (

      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
        openMenuOffset={(width / 100) * 75}
      >
        <Header
          leftComponent={{ icon: 'menu', onPress: () => this.toggle() }}
        />
        <View style={styles.container}>
          <View style={styles.rows}>
            <FlatList
              data={menuItems}
              renderItem={({item}) => <MainMenuItem menuItemName={item.name} path={item.path}></MainMenuItem>}
            />
          </View>
        </View>

        </SideMenu>
    );
  }
}



const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rows: {
    flexDirection:'row',
    flexWrap:'wrap'
  }
});