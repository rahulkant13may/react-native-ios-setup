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
        padding: 80, 
    }
})

const { 
    container
} = styles;

const BlankCard = () => {
 
    
    return (
        <View style={container}>


        </View> 
    );
}



export default BlankCard;