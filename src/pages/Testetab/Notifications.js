import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { AdMobBanner } from 'expo-ads-admob';


export default function Notifications() {
 return (
   
   <View style={styles.container}>
       <AdMobBanner
        adUnitID= "ca-app-pub-3940256099942544/6300978111" 
        bannerSize= 'leaderboard'
        style={styles.adMobbanner}
        />

       <Text style={styles.text}> Sem Notificações</Text>
       <Ionicons name= "notifications-off-outline" color= "#2db4ed" size={50} />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#4B0082',
        alignItems: 'center',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: "60%"
    },
    adMobbanner:{
      paddingTop: "20%"
    }
})