import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import ProdutosList from '../../component/ProdutosList';

export default function Home() {
 return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
        source={require('../../assets/banner.png')}
        style={styles.image}
        />

        <View style={styles.textcontainer}>
          <Text style={styles.text}>MOLETONS</Text>
          <Text style={[ styles.text, { color: '#9370DB'},{paddingLeft: 10, paddingRight:10} ]}>•</Text>
          <Text style={[ styles.text, { color: '#9370DB'} ]}>CASACO MANIA</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center',paddingTop:5}}>
            <MaterialIcons
            name="search"
            size={35}
            color="#4B0082"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={ styles.line} />
        
        <Text style={ [styles.text, { paddingLeft:10}]}>LANÇAMENTOS</Text>
 
  <ScrollView horizontal={true} style={styles.scrollContainer}>
    
    <ProdutosList />  
  
  </ScrollView>
    
  </View>
 )
 }

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textcontainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
    color: '#4B0082'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  },
  scrollContainer:{
      flex: 1,
      width: '100%',
      backgroundColor: '#FFF',
      paddingLeft:20,
      paddingTop:5
      
},
});