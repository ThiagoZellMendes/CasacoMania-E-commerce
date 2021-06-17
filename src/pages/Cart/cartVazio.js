import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function cartVazio() {
 return (
   <View style={styles.container}>
       <Text style={styles.text}>Carrinho Vazio</Text>
       <Ionicons name= "cart-outline" color= "#fff" size={50} />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4B0082',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color:'#fff'
    }
})