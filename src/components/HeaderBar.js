
import React, { Component } from 'react';
import { Header } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';




type Props = {};
export default class HeaderBar extends Component<Props> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Header
        leftComponent={{ icon: 'menu', onPress: () => this.props.navigation.openDrawer() }}
        outerContainerStyles={{ backgroundColor: 'red' }}
        statusBarProps={{ barStyle: 'light-content' }}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent:'space-around',
    flexDirection:'row',
    alignItems:'center',
    height:25,
    alignSelf:'stretch'
  }
})