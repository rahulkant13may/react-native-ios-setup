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

export default class NewsCard extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
        <TouchableOpacity
                  onPress={() =>
          navigate('Detail', { url: this.props.url })

        }
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
