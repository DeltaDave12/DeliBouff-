import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';


class Header extends React.Component {
    render() {
        return (
            <SafeAreaView style={layout.flexbox1}>
                <View>
                    <Text style={layout.text_bienvenue}>
                        Bienvenue chez
                    </Text>
                </View>
                <View style={layout.flexbox2}>
                    <Image 
                    source={require('../assets/DelibouffeLogo.png')}
                    style={image.logo}
                    />
                </View>
            </SafeAreaView>
               
        )
    }
}

const layout = StyleSheet.create({
    flexbox1: {
        marginTop: 100,
        flexDirection: "column",
        alignItems: "center",
    },

    flexbox2: {
        marginTop: 20,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    text_bienvenue: {
        fontSize: 30,
        fontFamily: 'sans-serif'
    }
});

const image = StyleSheet.create({
    fleche: {
        width: 0,
        height: 100,
        resizeMode: 'cover',
    },

    logo: {
        width: 150,
        height: 150,
    }  
  });

export default Header