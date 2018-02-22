import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Linking, Image } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import CoinCard from './CoinCard';
import HeaderRN from './Header';
import { DrawerNavigator } from 'react-navigation';
import { Icon } from "react-native-elements";
import IOSIcon from "react-native-vector-icons/Ionicons";
import EthereumNews from './EthereumNews';
import LiteCoinNews from './LiteCoinNews';
import AltCoinNews from './AltCoinNews';
import WhatIsBitCoin from './WhatIsBitCoin';
import WhatIsEthereum from './WhatIsEthereum';
import WhatIsBitCryptoCurrency from './WhatIsBitCryptoCurrency';
import WhatIsAltCoin from './WhatIsAltCoin';
import BitCoinAnalysis from './BitCoinAnalysis';
import BitCoinCalculator from './BitCoinCalculator';
import BitCoinChat from './BitCoinChat';
import StackNav from './StackNav';
// import {
//   AdMobBanner,
//   AdMobRewarded,
//   AdMobInterstitial,
//   PublisherBanner,
// } from 'react-native-admob';

class FlatListApp extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Home Screen",
    drawerIcon: () => (
      <Image
        source={require('./home.png')}
        style={[styles.icon]}
      />
    ),
  });

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      filter_data:[],
      
      seed: 1,
      error: null,
      refreshing: false,
      page: 0,
      start:0,
      search_text:'',
      search_flag: false,
      length_search_zero:false

    };
  }

  componentWillMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, start } = this.state;
    const url = `https://api.coinmarketcap.com/v1/ticker/?start=${start}&limit=50`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        this.setState({
          // data: res,
          data: page === 0 ? res : [...this.state.data, ...res],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 0,
        start:0

      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
        start: this.state.start + 50
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  coinSearch(e) {
      if(e.length == 0){
          console.log("length reaches zero")
          this.setState({
            length_search_zero: true
          });            
      }

      this.setState({
        search_flag: true,
        search_text: e,
        length_search_zero:false
      }); 
  }


  filterCoinCardsFirstPage() {
    var updatedList = this.state.data;
    var first_page_filtered_searched_result=[]
    
    for (var i=0; i< updatedList.length; i++ ){

      var common_objects = updatedList[i].name.toLowerCase().startsWith(this.state.search_text.toLowerCase());
      if (common_objects==true){
        first_page_filtered_searched_result.push(updatedList[i])
      }
    }

      return  (  
        <View>
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList
              data={first_page_filtered_searched_result}
              renderItem={({ item, index }) => (
                    <CoinCard 
                        key={index}
                        rank={item.rank}
                        coin_name={item.name}
                        symbol={item.symbol}
                        price_usd={item.price_usd}
                        percent_change_1h={item.percent_change_1h}
                        percent_change_24h={item.percent_change_24h}
                        percent_change_7d={item.percent_change_7d}
                    />
              )}
              keyExtractor={item => item.id}
              // ListHeaderComponent={this.renderHeader}
              ListFooterComponent={this.renderFooter}
              onRefresh={this.handleRefresh}
              refreshing={this.state.refreshing}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={.5}
            />        
          </List>
        </View>
      )


  }

  renderHeader = () => {
    return <SearchBar placeholder="Search Coin" onChangeText={(e) => this.coinSearch(e)}/>;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <View>

        <View>
            <View style={headerContainer}>
                <View style={{position: 'absolute', left: 12, top: 12}}>
                <IOSIcon name="ios-menu" size={30} onPress={() => this.props.navigation.navigate('DrawerOpen')}/>

                </View>
                <View>
                    <Text style={header}>
                        Top Cryptocurrency Listkk
                    </Text>
                </View>
            </View>
            <SearchBar lightTheme placeholder="Search Coin" onChangeText={(e) => this.coinSearch(e)}/>
        </View>

          { this.state.search_flag 

            ?

            this.filterCoinCardsFirstPage()

            :
              <View>            
                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                  <FlatList
                    data={this.state.data}
                    renderItem={({ item , index}) => (
                          <CoinCard 
                              key={index}
                              rank={item.rank}
                              coin_name={item.name}
                              symbol={item.symbol}
                              price_usd={item.price_usd}
                              percent_change_1h={item.percent_change_1h}
                              percent_change_24h={item.percent_change_24h}
                              percent_change_7d={item.percent_change_7d}
                          />
                    )}
                    keyExtractor={item => item.id}
                    // ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={.1}
                  />        
                </List>
              </View>
          }
    </View>
    );
  }
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: 20
        // backgroundColor:"#331052",
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

const { headerContainer, header } = styles;

const  SimpleAppNavigator = DrawerNavigator({
  Home: { screen: FlatListApp },
  StackNav: {screen: StackNav},
  BitCoinAnalysis: {screen: BitCoinAnalysis},
  BitCoinCalculator: { screen: BitCoinCalculator },
  BitCoinChat: { screen: BitCoinChat },
  EthereumNews: {screen: EthereumNews},
  LiteCoinNews: {screen: LiteCoinNews},
  AltCoinNews: {screen: AltCoinNews},
  WhatIsBitCoin: {screen: WhatIsBitCoin},
  WhatIsEthereum: {screen: WhatIsEthereum},
  WhatIsBitCryptoCurrency: {screen: WhatIsBitCryptoCurrency},
  WhatIsAltCoin: {screen: WhatIsAltCoin}
  
});


export default SimpleAppNavigator;
