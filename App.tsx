import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.menuText}>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#423F3F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText:{
    color:'#C8C4C4',
    fontSize:20,
    width:250,
    textAlign:'center'
  }
});
