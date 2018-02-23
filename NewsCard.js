import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Linking
} from 'react-native';

import { ListItem } from "react-native-elements";
// import DetailNews from "./DetailNews";

import {
  AdMobBanner,
  AdMobRewarded,
  AdMobInterstitial,
  PublisherBanner,
} from 'react-native-admob';

export default class NewsCard extends Component {


    showInterAd(){
        AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
        const { navigate } = this.props.navigation;
        navigate('Detail', { url: this.props.url });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
        <TouchableOpacity
                  onPress={() => this.showInterAd()}
        >
             <ListItem

                title={this.props.title}
                avatar={this.props.urlToImage}
                subtitle={this.props.date}
              />
        </TouchableOpacity> 
        );
    }
}
