import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { TouchableOpacity } from 'react-native-web';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <View style={styles.container}>
   <Text style={styles.welcome}>DeliBouff'</Text>
   <TextInput 
     style={styles.input}
     placeholder="Identifiant"
   />
    <TextInput 
     style={styles.input}
     placeholder="Mot de passe"q
     secureTextEntry
   />
   <View style={styles.btnContainer}>
     <TouchableOpacity
     style={styles.userBtn}
     onPress={() => alert("Connexion Réussie")}
     >
       <Text style={styles.btnTxt}>Connexion</Text>
     </TouchableOpacity>
   </View>
  
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#754D89',
    alignItems: 'center',
    justifyContent: 'center'
  },

  welcome:{
   fontSize: 30,
   textAlign: 'center',
   margin: 10,
   fontWeight: 'bold'
  },

  input:{
    width: "90%",
    backgroundColor: '#FFFFFF',
    padding: 15
  },
    
  
  userBtn:{
    backgroundColor: '#000000'?
    padding: 15,
    width: "70%"
  },
   
  btnTxt:{
    fontSize: 18,
    textAlign: "center",
    color: '#FFFFFF'
  }

});
