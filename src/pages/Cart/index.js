import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler'
import MoletCart from '../../component/MoletCart'
import { GlobalContext } from '../../context'
import { useNavigation } from '@react-navigation/core'

export default function CartProduct() {
//chama o carro da Apicontext
  const { cart, totalValue} = useContext(GlobalContext)
  const navigation = useNavigation();
//-------------------------------------------//
 
//tras o carrinho para o foco sempre que chamado, assim atualizando o estado dele
  // const isFocused = useIsFocused() 
  // isFocused ? 'focused' : 'unfocused'
  
 //-------------------------------------------//
 
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>

        <View style={styles.viewProduto}>
          <Text style={styles.textProduto}>Produtos</Text>
        </View>

        <View style={styles.viewValor}>
          <Text style={styles.text}>Quantidade: {cart.length} </Text>
          <Text style={styles.text}>Valor: R$ {totalValue.toFixed(2).replace("." , ",")}</Text>
        </View>

        <View style={styles.viewPagamento}>
          <TouchableOpacity style={styles.touchPagamento} onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.text}>{'\r'}{'\r'}{'\r'}{'\r'}Ir para {'\n'} pagamento</Text>
          </TouchableOpacity>
        </View>
      </View>


      <FlatList
        data={cart}
        renderItem={({ index, item }) => {
          return (
            <View >
              <View style={styles.line} />
              <MoletCart index={index} img={item.img} cost={item.price.toFixed(2).replace("." , ",")}>
                {item.name}
              </MoletCart>
              <View style={styles.line} />
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
    backgroundColor: '#FFF',
    paddingTop: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#4B0082',
    height: '15%',
    width: "100%",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 1

  },
  viewProduto: {
    paddingLeft: 10,
    width: '30%',
    alignSelf: 'center',
    justifyContent: 'center',
  

  },
  viewValor: {
    width: '30%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
  viewPagamento: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchPagamento: {
    backgroundColor: '#2db4ed',
    fontSize: 18,
    color: '#FFF',
    height: '50%',
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textProduto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  line: {
    borderBottomColor: '#8a9497',
    borderBottomWidth: 1,
  },
})
