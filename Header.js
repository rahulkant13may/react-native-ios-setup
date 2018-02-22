import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Icon } from "react-native-elements";


const HeaderRN = () => {
    return (
        <View>
            <View style={headerContainer}>
                <View style={{position: 'absolute', left: 12, top: 12}}>
                    <Icon
                      name="menu"
                      size={30}
                      iconStyle={{
                        width: 50,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      type="material"
                      color="white"
                    />
                </View>
                <View>
                    <Text style={header}>
                        Top Cryptocurrency List
                    </Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        alignItems: "center",
        backgroundColor:"#331052",


    },
    header: {
        fontWeight: "bold",        
        fontSize: 20,
        color:"white",
        padding:15
    }
})

const { headerContainer, header } = styles;


export default HeaderRN