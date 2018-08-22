
import React, { Component } from 'react';
import { Text } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';

import Moment from 'moment';


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const fontFamily = (Platform.OS === 'ios') ? 'Arial Rounded MT Bold' : 'Arial'

type Props = {};
export default class TopNewsItem extends Component<Props> {
  render() {

    Moment.locale('en');

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
        <Image source={{uri:this.props.path}} style={styles.newsImg} resizeMode='stretch' />
          <View style={styles.header}>
            <Text style={{fontSize:20, margin:5, fontFamily:fontFamily, textAlign:'left'}}>{this.props.heading}</Text>
            <Text style={{textAlign:'left',fontSize:14, color:'red', marginLeft:5}}>{Moment(this.props.time).format('DD MMM')} | {this.props.category}</Text>
          </View>
        </View>
        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    margin:10,
    margin:5,
    flex:1,
    flexDirection:'column',
    height:250
  },
  newsImg: {
    flex:1,
    height:undefined,
    width:undefined,
  },
  header: {
    flex:0.6,
    justifyContent:'space-between'
  }
})