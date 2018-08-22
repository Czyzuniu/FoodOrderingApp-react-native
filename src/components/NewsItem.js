
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

const fontFamily = (Platform.OS === 'ios') ? 'Arial Rounded MT Bold' : 'Arial'

type Props = {};
export default class NewsItem extends Component<Props> {

  render() {
    Moment.locale('en');
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
        <Image source={{uri:this.props.path}} style={styles.newsImg} resizeMode='stretch' />
          <View style={styles.header}>
            <Text style={{fontSize:14, margin:5, fontFamily:fontFamily, textAlign:'left'}}>{this.props.heading}</Text>
            <Text style={{textAlign:'left',fontSize:12, color:'red', marginLeft:5}}>{Moment(this.props.time).format('DD MMM')} | {this.props.category}</Text>
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
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    height:70
  },
  newsImg: {
    flex:0.4,
    width:undefined,
    height:undefined
  },
  header: {
    flex:0.6,
    justifyContent:'space-between'
  }
})