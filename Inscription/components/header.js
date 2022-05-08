import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';


class Header extends React.Component {
    render() {
        return (
            <View style={layout.flexbox1}>
                <View>
                    <Image 
                    source={require('../assets/arrow-left.png')}
                    style={image.fleche}
                    />
                </View>
                <View style={layout.flexbox2}>
                    <Image 
                    source={require('../assets/DelibouffeLogo.png')}
                    style={image.logo}
                    />
                </View>
            </View>
               
        )
    }
}

const layout = StyleSheet.create({
    flexbox1: {
        flexDirection: "row",
        alignItems: "center",
    },

    flexbox2: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 50,
    }
});

const image = StyleSheet.create({
    fleche: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginLeft: 20
    },

    logo: {
        width: 150,
        height: 150,
    }  
  });

export default Header