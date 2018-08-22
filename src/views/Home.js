import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  RefreshControl,
  Button,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import { createBottomTabNavigator } from 'react-navigation'

import { Header } from 'react-native-elements'

import HeaderBar from '../components/HeaderBar'

import SideMenu from 'react-native-side-menu'
import Menu from '../components/Menu'
import MainMenuItem from '../components/MainMenuItem'
import NewsItem from '../components/NewsItem'
import TopNewsItem from '../components/TopNewsItem'

import NewsItemView from './NewsItemView'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

let newsFeed = null
const newsAPIKey = 'cc165221c6c64362afda62452209ec67'
const newsURL = 'https://newsapi.org/v2/top-headlines?'
const defaultNewsSource = "bbc-news"


const barList = [
  {
    title: 'Home',
    source:'bbc-news'
  },
  {
    title: 'Sports',
    source:'bbc-sport'
  },
  {
    title: 'Technology',
    source:'ars-technica'
  }
]

export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        refreshing: false,
        newsSource:defaultNewsSource,
        newsFeed:[]
      };
    }

    componentDidMount() {
      this._reloadNews()
      //this.props.navigation.navigate("IncidentsView")
    }

    async _setNewsCategory(cat) { 
      this.state.newsSource = cat
      this._reloadNews()
    }

    _startLoading() {
      this.setState({
        loading:true
      })
    }

    _stopLoading() {
      this.setState({
        loading:false
      })
    }

    _viewNews(data) {
      this.props.navigation.navigate("NewsItemView",{
        "title":data.title,
        "description":data.description,
        "img":data.urlToImage
      })
    }

    _renderNewsItem = ({item,index}) => {
      if (index === 0) {
        return <TopNewsItem heading={item.title} path={item.urlToImage} time={item.publishedAt} category={item.source.name} onPress={() => {this._viewNews(item)}}></TopNewsItem>
      } else {
        return <NewsItem heading={item.title} path={item.urlToImage} time={item.publishedAt} category={item.source.name} onPress={() => {this._viewNews(item)}}></NewsItem>
      }
    }

    _onRefresh = async () => {
      this.setState({refreshing: true});
        await this._reloadNews()
        this.setState({refreshing: false});
    }

   async _reloadNews() {

      this._startLoading()
      let source = this.state.newsSource

      let url = `${newsURL}sources=${source}&apiKey=${newsAPIKey}`

      try {
        let response = await fetch(
          url
        );
        let responseJson = await response.json();
        if (responseJson){
          this.setState({
            newsFeed:responseJson.articles
          })
        }
        this._stopLoading()
      } catch (error) {
        console.error(error);
      }

    }

  render() {
    return (
      <View style={styles.container}>
      <HeaderBar navigation={this.props.navigation}/>
      <View style={styles.topBar}>
        {
          barList.map((l, i) => (
            <TouchableOpacity onPress={() => this._setNewsCategory(l.source)}>
              <Text>{l.title}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
        <View style={styles.rows}>
          <FlatList
            data={this.state.newsFeed}
            renderItem={this._renderNewsItem}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
          }
          keyExtractor={(item, index) => index.toString()}
          />
        </View>

        {this.state.loading &&
        <View style={styles.loading}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
        }

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4ECEA'
  },
  rows: {
    flexDirection:'column',
    flexWrap:'wrap'
  },
  topBar: {
    justifyContent:'space-around',
    flexDirection:'row',
    alignItems:'center',
    height:25,
    alignSelf:'stretch'
  },
   loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F5FCFF88'
  }
});