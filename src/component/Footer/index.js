import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProdutosFooter from '../ProdutosFooter';

export default function Footer() {
 return (
   <View>
     <Text style={styles.title}>PRODUTOS RELACIONADOS</Text>
     <View style={{flexDirection: 'row'}}>
       
         <ProdutosFooter />

     </View>
   </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    marginVertical: '2%',
    paddingHorizontal: '2%',
    color: '#4B0082'
  }
})