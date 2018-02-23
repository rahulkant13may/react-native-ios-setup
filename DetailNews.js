import React, {Component} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Linking,
    WebView
} from 'react-native';
import { Icon } from "react-native-elements";
import CustomHeader from './CustomHeader';
var WEBVIEW_REF = 'webview';
import {
  AdMobBanner,
  AdMobRewarded,
  AdMobInterstitial,
  PublisherBanner,
} from 'react-native-admob';

export default class DetailNews extends Component {
  render() { 
    return (
      <View style={{flex: 1}}>
        <AdMobBanner
          adSize="smartBannerPortrait"
          adUnitID="ca-app-pub-9900815965563824/3882920839"
          ref={el => (this._smartBannerExample = el)}
          styles={{marginTop:10}}
        />
        <View style={{flex:1}}>
          <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          source={{uri:this.props.navigation.state.params.url}}          
          // source={{uri:"https://www.ccn.com/ethereum-news/"}}          
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          scalesPageToFit={true}
          />
        </View>
    </View>
    );   
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

