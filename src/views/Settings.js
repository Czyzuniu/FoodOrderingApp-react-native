import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

import {Input, Header, Button} from 'react-native-elements'

import HeaderBar from '../components/HeaderBar'

export default class Settings extends Component {

  render() {
    return (
      <View style={styles.container}>
      <HeaderBar navigation={this.props.navigation}/>
      <Text style={{fontSize:30, textAlign:'center', justifyContent:'flex-start'}}>Settings</Text>
      <View style={styles.rows}>
          <Input
            placeholder='Name'
            leftIcon={{name: 'person' }}
            containerStyle={styles.inputContainer}
          />

          <Input
            placeholder='Email'
            leftIcon={{name: 'email' }}
            containerStyle={styles.inputContainer}
          />

          <Input
            placeholder='Mobile Number'
            leftIcon={{ name: 'phone' }}
            containerStyle={styles.inputContainer}
          />

          <Button title='Save' />
      </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rows: {
    flexDirection:'column',
    backgroundColor: 'white',
    padding:20,
    justifyContent:'center',
    flex:1
  },
  inputContainer: {
    height:75
  }
});