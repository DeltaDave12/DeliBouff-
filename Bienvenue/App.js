import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from "./components/header"
import Main from "./components/main"

export default function App() {
  return (
    <SafeAreaView style={incription_styles.container}>
      <View>
        <Header />
      </View>
      <View>
        <Main />
      </View>
    </SafeAreaView>
    
  );
}


const incription_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(117,77,137,255)',
  }  
});
