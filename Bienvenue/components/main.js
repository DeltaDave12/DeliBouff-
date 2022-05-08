import React from 'react';
import { StyleSheet, Alert, Text, View, Button, SafeAreaView, Image, InputAccessoryView, ScrollView, TextInput, TouchableOpacity,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




class Main extends React.Component {
    render() {
        return (
            <View style={styles.flexbox}>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Vers Connexion')}>
                        <Text style={styles.button_text}>Connexion</Text>
                    </TouchableOpacity>  
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Vers inscription')}>
                        <Text style={styles.button_text}>Inscritpion</Text>
                    </TouchableOpacity>  
                </View>
                <View >
                    <Image 
                    source={require('../assets/Cochon_1.png')} 
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 50,
        borderRadius: 50,
        backgroundColor: 'black',
        width: 300,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button_text: {
        color: 'white',
        fontSize: 30,
    },

    input: {
      height: 80,
      width: 300,
      margin: 12,
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor: 'white',
      textDecorationStyle: 'double',
      padding: 10,
    },

    flexbox: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
    }
});

export default Main