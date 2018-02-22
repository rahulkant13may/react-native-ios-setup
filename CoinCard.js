import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20, 
    },
    containerSecond: {
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        marginBottom: 15,
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",  
        color: "black"      
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        color: "black"
    },
    coinRank: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        fontWeight: "bold",
        color: "black"
    },
    seperator: {
        marginTop: 10,
        color: "black"
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",  
        color: "black"      
    },
    image: {
        width: 50,
        height: 50,
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "white",
        borderTopWidth: 1,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00b950",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "red",
        fontWeight: "bold",
        marginLeft: 5
    }
})

const { 
    container,
    containerSecond,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinRank,
    coinPrice,
    statisticsContainer,
    seperator,
    percentChangePlus,
    percentChangeMinus
} = styles;

const CoinCard = ({ rank, symbol, coin_name, price_usd, percent_change_1h, percent_change_24h, percent_change_7d }) => {
 
    
    return (
        <View style={container}>
            <View style={styles.containerSecond}>
                <Image
                    style={styles.image}
                    source={{ uri: `https://files.coinmarketcap.com/static/img/coins/32x32/${coin_name.replace(/\s+/g, '-').toLowerCase()}.png` }}
                />
            </View>
            <View style={upperRow}>
                    <Text style={coinRank}>{rank}</Text>
                    <Text style={coinSymbol}>{symbol}</Text>
                    <Text style={seperator}>|</Text>
                    <Text style={coinName}>{coin_name}</Text>
                    <Text style={coinPrice}>{price_usd}
                        <Text style={moneySymbol}> $ </Text>
                    </Text>
            </View>

            <View style={statisticsContainer}>

                <Text style={{color:"black"}}>1 hour:
                     <Text style={percent_change_1h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_1h} % </Text>
                </Text>
                <Text style={{color:"black"}}>24 hour:
                     <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text style={{color:"black"}}>7 day:
                    <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
                </Text>

            </View>

        </View> 
    );
}



export default CoinCard;