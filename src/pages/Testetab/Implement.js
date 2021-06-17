import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default function Implement() {
 return (
   <View style={styles.container}>
       <Text style={styles.text}> Nova Implementação</Text>
       <Ionicons name= "home" color= "#fff" size={50} />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#4B0082',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    }
})