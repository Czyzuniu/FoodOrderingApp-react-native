import React, { Component } from 'react';
import { Text, ListItem} from 'react-native-elements'
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  FlatList,
  ScrollView
} from 'react-native';


const menuList = [
    {
        title:"My Info",
        list: [
          {
            title: 'Konrad Kolpak',
            icon: 'person-pin',
            navigator:'HomeView'
          },
          {
            title: 'My orders',
            icon: 'receipt',
            navigator:'MyOrdersView'
          },
          {
            title: 'My Reviews',
            icon: 'rate-review'
          },
          {
            title: 'My Favourite Restuarants',
            icon: 'star',
            color:'yellow'
          }
        ]
    }
]

export default class MenuComponent extends Component<Props> {

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
    const menu = []

    for (let i of menuList) {
        menu.push(
            <ListItem
                key={i}
                title={i.title}
                titleStyle={{color:'white', textAlign:'center'}}
                containerStyle={{ backgroundColor:'gray',padding:12, justifyContent:'center'}}
            />
        )
        for (let s of i.list) {
            menu.push (
                <ListItem
                    key={s}
                    leftIcon={{ name: s.icon, color:'red' }}
                    title={s.title}
                    badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { backgroundColor: 'black' }}}
                    containerStyle={{ backgroundColor:'snow', padding:20, borderBottomWidth:2}}
                    titleStyle={{color:'black', fontSize:18, fontFamily:'notoserif'}}
                    onPress={this.navigateToScreen(s.navigator)}
                /> 
            )
        }
    }
        return (
        <ScrollView style={styles.menu}>
        {menu}
        </ScrollView>  
        );
    }
}


const styles = StyleSheet.create({
  menu: {
    flex:1,
    backgroundColor:'snow',
  }
})



MenuComponent.propTypes = {
  navigation: PropTypes.object
};