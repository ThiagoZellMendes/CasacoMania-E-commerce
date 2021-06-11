import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import  ColorMolet  from '../../component/ColorMolet'
import SizeButton from '../../component/SizeButton'


export default function Detail({navigation}) {

  useEffect(() => { 
    navigation.setOptions({
      headerTitle: 'Moleton Nicoboco Jack',
    }) 
})

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/detail1.png')}
        style={styles.Image}
        resizeMode="cover"
      />

      <View>
        
        <View>
          <Text style={[styles.title,{ fontSize: 24}]}>R$ 280,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title,{ fontSize: 30}]}>Moleton Nicoboco Jack</Text>
        </View>

        <View style={styles.colorMoletContainer}>
          <ColorMolet color="#2379f4" />
          <ColorMolet color="#4546f4" />
          <ColorMolet color="#ddd" />
          <ColorMolet color="#000" />
        </View>

        <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsVerticalScrollIndicator={false}>
            <SizeButton bgColor="#4B0082" color="#FFF">M</SizeButton>
            <SizeButton >G</SizeButton>
            <SizeButton >GG</SizeButton>
            <SizeButton >XG</SizeButton>
          </ScrollView>
        </View>

        
        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
          Moleton Nicoboco Jack
          </Text>
          <Text style={styles.textContent}>
          Aposte no conforto e qualidade do moletom para completar seu visual nos dias mais frios. Fabricado em moletom 50% algodão e 50% poliéster, interior felpado aconchegante, a peça de estilo clássico possui punho, bolso estilo canguru e capuz. O moletom garante a sensação de maciez e te mantém aquecido em dias mais frios.
         
          </Text>
          <Text style={styles.textList}>
            - DEPARTAMENTO: Roupas
          </Text>
          
          <Text style={styles.textList}>
            - MARCA: Trivalle
          </Text>
        </View>

        <View style={styles.containerB}>
        <TouchableOpacity style={styles.btnContainer} onPress={()=>{}}>
            <Text style={styles.titleB}>COMPRAR</Text>
        </TouchableOpacity>
        </View>
      
      
      </View> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%',
    color: '#4B0082'
  },
  colorMoletContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%',
    color: '#4B0082'
  },
  textTitle:{
    fontSize: 22,
    marginVertical: '2%',
    color: '#4B0082' 
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
    textDecorationStyle: 'solid',
    color: '#4B0082'
  },
  containerB:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer:{
    width: '90%',
    height: 50,
    backgroundColor: '#4B0082',
    borderRadius: 5,
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleB:{
    fontSize: 17,
    color: '#FFF'
  }
})