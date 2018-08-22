import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

import {Input, Header, Button} from 'react-native-elements'
import RNFS from 'react-native-fs';

import HeaderBar from '../components/HeaderBar'

import ImagePicker from 'react-native-image-picker'

export default class Incidents extends Component {

  constructor(props) {
    super(props)

    this.state = {
      'valid':true,
      'pickedImage':null
    };

  }


 _createIncident = () => {

    let img64 = null

    RNFS.readFile(this.state.pickedImage.uri, 'base64')
    .then(res =>{
      img64 = res
      

    let data = {  
       "imageData":`data:image/jpeg;base64,${img64}`,
       "incidentCorrectiveAction":this.state.incidentCorrectiveAction,
       "incidentRef":this.state.incidentRef,
       "incidentText":this.state.incidentText,
       "latitude":"51.2146815",
       "loggedDate":"2018-08-21T14:14:33.000Z",
       "longditude":"-1.510166",
       "reportedBy":"57434"
    }

    console.log('incident saved', data)

    // let hello = fetch('https://mobsync.stannah.co.uk/MobilePopRest/incidents/createIncident', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization':"3ACADF8DC6FC09F"
    //   },
    //   body: JSON.stringify(data),
    // }).then(function(res){ return res.json(); })
    // .then(function(data){ console.log( JSON.stringify( data ) ) })


    console.log(hello)

    });
 } 

 pickImageHandler = () => {
  console.log('hello')
   ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600}, res => {
     if (res.didCancel) {
       console.log("User cancelled!");
     } else if (res.error) {
       console.log("Error", res.error);
     } else {

        console.log('hello')

       this.setState({
         pickedImage: { uri: res.uri }
       });

     }
   });

 }

  render() {
    return (
      <View style={styles.container}>
      <HeaderBar navigation={this.props.navigation}/>
      <Text style={{fontSize:30, textAlign:'center', justifyContent:'flex-start'}}>Incidents</Text>
      <View style={styles.rows}>
          <Input
            placeholder='Field1'
            leftIcon={{name: 'person' }}
            onChangeText={(text) => this.setState({incidentCorrectiveAction:text})}
            containerStyle={styles.inputContainer}
          />

          <Input
            placeholder='Field2'
            leftIcon={{name: 'email' }}
            onChangeText={(text) => this.setState({incidentRef:text})}
            containerStyle={styles.inputContainer}
          />

          <Input
            placeholder='Field3'
            leftIcon={{ name: 'phone' }}
            onChangeText={(text) => this.setState({incidentText:text})}
            containerStyle={styles.inputContainer}
          />

          {this.state.pickedImage && 
            <Image source={this.state.pickedImage} style={styles.previewImage} />
          }
      </View>
        <Button title="Pick Image" onPress={this.pickImageHandler} />
        {this.state.valid &&
        <View style={styles.saveButton}>
            <Button title='Save' onPress={this._createIncident} />
        </View>
        }

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
  previewImage: {
    width:undefined,
    height:undefined,
    flex:0.7,
    borderWidth:1,
    borderColor:'black',
    margin:5
  },
  saveButton: {
    flex:0.5,
    justifyContent:'center',
    alignItems:'center'
  },
  inputContainer: {
    height:55
  }
});