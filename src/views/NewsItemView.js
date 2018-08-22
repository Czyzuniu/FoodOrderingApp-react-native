import React, { Component } from 'react';
import { Header } from 'react-native-elements'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

import HeaderBar from '../components/HeaderBar'

export default class NewsItemView extends Component {

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'Error');
    const description = navigation.getParam('description', 'Error');
    const img = navigation.getParam('img', 'Error');

  return (
    <View style={styles.container}>
     <HeaderBar navigation={this.props.navigation}/>
      <View style={styles.main}>
        <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Image source={{uri:img}} style={styles.newsImg} resizeMode='stretch' />
        <Text style={{fontSize:23}}>{title}</Text>
        <Text style={{fontSize:18}}>{description}</Text>
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
  },
  newsImg: {
    width:undefined,
    height:undefined,
    flex:0.5
  }
});