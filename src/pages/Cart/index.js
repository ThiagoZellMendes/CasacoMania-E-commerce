import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler'
import MoletCart from '../../component/MoletCart'
import  { useCart }  from '../../context'
// import { useFocusEffect } from '@react-navigation/native'

export default function CartProduct() {

const { cart } = useCart()

// const { cart } = objeto;

// useFocusEffect(() => {
//     console.log(objeto)
//     // console.log(cart)

// })
    
    return (
    <View style={styles.container}> 
        <View style={styles.headerContainer}>
            
            <View style={styles.viewProduto}>
                <Text style={styles.textProduto}>Produtos</Text>
            </View>
            
            <View style={styles.viewValor}>
                <Text style={styles.textLimpar}>Qtd: $0.00</Text>
                <Text style={styles.textLimpar}>Valor: $0.00</Text>
            </View>
            
            <View style={styles.viewLimpar}>
                <TouchableOpacity style={styles.touchLimpar} onPress={()=>{}}>
                    <Text style={styles.textLimpar}>LIMPAR</Text>
                </TouchableOpacity>
           </View>
        </View>


        <FlatList
        data={cart}
        keyExtractor={(item) => item.key}
        renderItem={({item})=> {
          return (
        <View> 

              <MoletCart img={item.img} cost={item.price}> 
              {item.name}
              </MoletCart>
            
         </View>  
        )
        }}
        />
   </View>
   
);
}
const styles = StyleSheet.create({
container:{
    flex: 1,
    width: "100%",
    backgroundColor: '#4B0082',
    paddingTop: 60
},
headerContainer:{
    flexDirection: 'row',
    backgroundColor: '#9370DB',
    height: '15%',
    width: "100%",
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:5
    
},
viewProduto:{
     paddingLeft: 10,
     width: '50%',
     alignSelf:'center',
     justifyContent:'center'
     
},
viewValor:{
     width: '25%',
     height:'100%',
     alignSelf:'center',
     alignItems: 'center',
     justifyContent: 'center',

    },
viewLimpar:{
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    

},
touchLimpar:{
     backgroundColor: '#4B0082',
     fontSize: 18,
     color: '#FFF',
     height: '33%',
     width: '70%',
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 5,



},
textLimpar:{
    color: '#fff',
    fontWeight: 'bold',

},
textProduto:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
}
})
