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

export default class AltCoinNews extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: "Altcoin News",
    drawerIcon: () => (
      <Image
        source={require('./altcoin.png')}
        style={[styles.icon]}
      />
    ),
  });
  render() { 
    return (
      <View style={{flex: 1}}>
        <CustomHeader navigation={this.props.navigation}/>
        <View style={{flex:1}}>
          <WebView
          ref={WEBVIEW_REF}
          automaticallyAdjustContentInsets={false}
          source={{uri: "https://www.ccn.com/altcoin-news/"}}          
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

