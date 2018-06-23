import React, { Component } from 'react';
import { Text, ListItem} from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,FlatList
} from 'react-native';


const list = [
  {
    title: 'Konrad Kolpak',
    icon: 'person-pin'
  },
  {
    title: 'My orders',
    icon: 'receipt'
  },
  {
    title: 'My Reviews',
    icon: 'rate-review'
  },
  {
    title: 'My Favourite Restuarants',
    icon: 'star'
  }
]

export default class MenuComponent extends Component<Props> {
    
    render() {
        return (
            list.map((l, i) => (
        <ListItem
            key={i}
            leftIcon={{ name: l.icon }}
            title={l.title}
            subtitle={l.subtitle}
        />
    ))  
        );
    }
}


const styles = StyleSheet.create({
  menu: {
    flex: 1, 
    justifyContent:'center',
    alignItems:'center',
    paddingTop:50
  }
})