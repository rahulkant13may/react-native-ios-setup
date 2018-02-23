/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  WebView,
  Linking,
  Image
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Icon } from "react-native-elements";
import NewsCard from './NewsCard';
import BlankCard from './BlankCard';
import {
  AdMobBanner,
  AdMobRewarded,
  AdMobInterstitial,
  PublisherBanner,
} from 'react-native-admob';

export default class News extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Top Cryptocurrency News",
    drawerIcon: () => (
      <Image
        source={require('./topnews.png')}
        style={[styles.icon]}
      />
    ),
  });

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      news_data: [],

    };
  }

  componentWillMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, start } = this.state;
    const url = `https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=ea0ede9511284a71bbab02d0b68d8ff6`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        // this.setState({
        //   data: page === 0 ? res : [...this.state.data, ...res],
        //   error: res.error || null,
        //   loading: false,
        //   refreshing: false
        // });
        this.setState({news_data: res})
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };



fetchNewsCard() {

      if (this.state.news_data.articles){
        return this.state.news_data.articles.map((item, index) => 
            <NewsCard 
                key={index}
                title={item.title}
                url={item.url}
                urlToImage={item.urlToImage}
                author={item.author}
                date={item.publishedAt}
                navigation={this.props.navigation}
            />

        ) 
      }
}


  render() {
    console.log(this.state.news_data)
    return (
      <View>
              <AdMobBanner
                adSize="smartBannerPortrait"
                adUnitID="ca-app-pub-9900815965563824/3882920839"
                ref={el => (this._smartBannerExample = el)}
                // styles={{marginTop:10}}
              />
                <View style={{backgroundColor: 'white'}}>
                    <ScrollView contentContainerStyle={contentContainer}>
                        { this.fetchNewsCard()}
                    </ScrollView> 
                </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 20,
        alignItems: "center",
        backgroundColor:"#331052",


    },
    header: {
        fontWeight: "bold",        
        fontSize: 20,
        color:"white",
        padding:15
    },
    container: {
      flex: 1
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    contentContainer: {
        paddingBottom: 10,
        paddingTop: 55,
        backgroundColor: 'white',
    },
    icon: {
        width: 24,
        height: 24,
      },
})
const { headerContainer, header, contentContainer } = styles;


