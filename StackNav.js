import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";
import News from './News';
import DetailNews from './DetailNews';

const stackNav = StackNavigator({
    Main: {
        screen: News,
        navigationOptions:({navigation}) => ({
            title: "News",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <IOSIcon name="ios-menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    Detail: {
        screen: DetailNews,
        navigationOptions: (props) => ({
            title: "CMU",
        })
    }
})

export default stackNav;