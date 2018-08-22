import React, { Component } from 'react';
import { Text, ListItem} from 'react-native-elements'
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  View,
  FlatList
} from 'react-native';


const menuList = [
  {
    title: 'Home',
    icon: 'home',
    navigator:'HomeView'
  },
  {
    title: 'Incidents',
    icon: 'warning',
    navigator:'IncidentsView'
  },
  {
    title: 'Expenses',
    icon: 'receipt',
    navigator:'MyOrdersView'
  },
  {
    title: 'Settings',
    icon: 'settings',
    navigator:'SettingsView'
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
    return (
      <View style={styles.container}>
          <FlatList
            data={menuList}
            renderItem={({item}) => (
                <ListItem
                  title={item.title}
                  key={item}
                  leftIcon={{ name: item.icon, color:'red' }}
                  badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { backgroundColor: 'black' }}}
                  containerStyle={{ backgroundColor:'snow', padding:20, borderBottomWidth:2}}
                  titleStyle={{color:'black', fontSize:18, fontFamily:'arial'}}
                  onPress={this.navigateToScreen(item.navigator)}
                />
              )
          }
          keyExtractor={(item, index) => index.toString()}
          />
      </View>
    );
  }
}


                  
   


const styles = StyleSheet.create({
  menu: {
    flex:1,
    flexDirection:'column'
  }
})



MenuComponent.propTypes = {
  navigation: PropTypes.object
};