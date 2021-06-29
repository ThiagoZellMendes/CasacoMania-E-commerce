import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler'
import MoletCart from '../../component/MoletCart'
import { GlobalContext } from '../../context'
import { useIsFocused } from '@react-navigation/native';

export default function CartProduct() {
      
       //chama o carro da Apicontext
  const { cart } = useContext(GlobalContext)
//-------------------------------------------//
 
//tras o carrinho para o foco sempre que chamado, assim atualizando o estado dele
  const isFocused = useIsFocused()
  
  isFocused ? 'focused' : 'unfocused'
 
//-------------------------------------------//
  console.log(cart)
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>

        <View style={styles.viewProduto}>
          <Text style={styles.textProduto}>Produtos</Text>
        </View>

        <View style={styles.viewValor}>
          <Text style={styles.textLimpar}>Qtd: {cart.length} </Text>
          <Text style={styles.textLimpar}>Valor: $0.00</Text>
        </View>

        <View style={styles.viewLimpar}>
          <TouchableOpacity style={styles.touchLimpar} onPress={() => { }}>
            <Text style={styles.textLimpar}>CONCLUIR</Text>
          </TouchableOpacity>
        </View>
      </View>


      <FlatList
        data={cart}
        renderItem={({index, item }) => {
          return (
            <View >

              <MoletCart img={item.img} cost={item.price}>
                {item.name}
              </MoletCart>

            </View>
          )
        }}
        keyExtractor={(item) => item.key.toString()}
      />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#4B0082',
    paddingTop: 60
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#9370DB',
    height: '15%',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5

  },
  viewProduto: {
    paddingLeft: 20,
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center'

  },
  viewValor: {
    width: '25%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
  viewLimpar: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchLimpar: {
    backgroundColor: '#4B0082',
    fontSize: 18,
    color: '#FFF',
    height: '33%',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textLimpar: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textProduto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
})
