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

import { Icon } from "react-native-elements";
import IOSIcon from "react-native-vector-icons/Ionicons";
import {
  AdMobBanner,
  AdMobRewarded,
  AdMobInterstitial,
  PublisherBanner,
} from 'react-native-admob';

export default class CustomHeader extends Component {
    render() {
        return (
        <View>
            <View style={styles.headerContainer}>
                <View style={{position: 'absolute', left: 12, top: 12}}>
                <IOSIcon name="ios-menu" size={30} onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
                </View>
                <View>
                    <Text style={styles.header}>
                        CMU
                    </Text>
                </View>
            </View>
              <AdMobBanner
                adSize="smartBannerPortrait"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                ref={el => (this._smartBannerExample = el)}
                // styles={{marginTop:10}}
              />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 20
        // backgroundColor:"#f8f8f8",


    },
    header: {
        fontWeight: "bold",        
        fontSize: 20,
        color:"black",
        padding:15
    },
    icon: {
      width: 24,
      height: 24,
    },
})



