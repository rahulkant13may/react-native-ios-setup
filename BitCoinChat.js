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


export default class BitCoinChat extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: "Bitcoin Live Chat ?",
    drawerIcon: () => (
      <Image
        source={require('./chat.png')}
        style={[styles.icon]}
      />
    ),
  });

   navigateToBrowser(url){
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
   }

  render() {   

    return (
      <View style={{flex: 1}}>
        {this.navigateToBrowser("https://www.ccn.com/bitcoin-chat/")}
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
