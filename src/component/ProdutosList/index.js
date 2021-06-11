import React from 'react';
import { View } from 'react-native';
import {FlatList} from 'react-native-gesture-handler'
import Molet from '../Molet'
import { useNavigation } from '@react-navigation/native';



const description= [
    {
      key: '1',
      Image: require('../../assets/1.png'),
      detalhe: 'Detail1',
      name: 'Moleton Nicoboco Jack',
      preço: 'R$ 280,90'
    },
    {
      key: '2',
      Image: require('../../assets/2.png'),
      detalhe: 'Detail2',
      name: 'Moletom Suffix Masculino',
      preço: 'R$ 300,90'
    },
    {
      key: '3',
      Image: require('../../assets/3.png'),
      detalhe: 'Detail3',
      name: 'Moletons Liso Flanelado',
      preço: 'R$ 450,99'
    },
    {
      key: '4',
      Image: require('../../assets/4.png'),
      detalhe: 'Detail4',
      name: 'Moletom Fechado Trivalle',
      preço: 'R$ 250,00'
    },
    {
      key: '5',
      Image: require('../../assets/5.png'),
      detalhe: 'Detail5',
      name: 'Moleton Fech Peanuts',
      preço: 'R$ 900,00'
    },
    {
      key: '6',
      Image: require('../../assets/6.png'),
      detalhe: 'Detail6',
      name: 'Moletom Hocks Chumbo Jack',
      preço: 'R$ 700,00'
    },
    

];

 export default function ProdutosList() {
 const navigation = useNavigation();

 return (
   <View>
       <FlatList
        data={description}
        numColumns={2}
        keyExtractor={(item) => item.key}
        renderItem={({item})=> {
          return (
        <View>    
            
              <Molet img={item.Image} cost={item.preço} onClick={() => {navigation.navigate(item.detalhe)}}>
               {item.name} 
              </Molet>
            
         </View>  
    )
    }}
       />
   </View>
  );
}
