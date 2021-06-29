import React, { useContext } from 'react';
import { View } from 'react-native';
import {FlatList} from 'react-native-gesture-handler'
import Molet from '../Molet'
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../../context'


export default function ProdutosFooter() {
 const navigation = useNavigation();
 const { description } = useContext(GlobalContext)
 return (
   <View>
       <FlatList
        data={description}
        horizontal
        keyExtractor={(item) => item.key}
        renderItem={({item})=> {
          return (
        <View>    
            
              <Molet img={item.img} cost={item.price} onClick={() => {navigation.navigate(item.detalhe)}}>
               {item.name} 
              </Molet>
            
         </View>  
    )
    }}
       />
   </View>
  );
}
