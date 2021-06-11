import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default function Notifications() {
 return (
   <View style={styles.container}>
       <Text style={styles.text}> Sem Notificações</Text>
       <Ionicons name= "notifications-off-outline" color= "#fff" size={50} />
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