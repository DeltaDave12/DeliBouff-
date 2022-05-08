import React from 'react';
import { StyleSheet, Alert, Text, View, Button, SafeAreaView, Image, InputAccessoryView, ScrollView, TextInput, TouchableOpacity } from 'react-native';




class Main extends React.Component {
    render() {
        return (
            <View style={styles.flexbox}>
                <View>
                    <TextInput style={styles.input} placeholder="Nouveau Identifiant"/>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="Nouveau mot de passe"/>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="Confirmez mot de passe"/>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Vous êtes bien inscite')}>
                        <Text style={styles.button_text}>Inscritpion</Text>
                    </TouchableOpacity>  
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
        width: 250,
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
        flexDirection: 'column',
        alignItems: 'center',
    }
});

export default Main