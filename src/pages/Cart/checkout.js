import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { GlobalContext } from '../../context'
import { Avatar, ListItem } from 'react-native-elements';


export default function Checkout() {

  //chama o carro da Apicontext
  const { cart, totalValue } = useContext(GlobalContext)
  const total = totalValue
  //-------------------------------------------//

  // //tras o carrinho para o foco sempre que chamado, assim atualizando o estado dele
  // const isFocused = useIsFocused()
  // isFocused ? 'focused' : 'unfocused'

  //-------------------------------------------//

  return (
    <View style={styles.container}>
      {/* <View style={styles.containerFlat}>
        <FlatList
          data={cart}
          renderItem={({ index, item }) => {
            return (
              <View >

                <MoletCheckout index={index} img={item.img} cost={item.price.toFixed(2).replace(".", ",")}>
                  {item.name}
                </MoletCheckout>
                <View style={styles.line} />
              </View>
            )
          }}
          keyExtractor={(item) => item.key.toString()}
        />

      </View> */}
      <View style={styles.lineBody} />

      <View style={styles.body}>

        <ListItem containerStyle={{ backgroundColor: '#4B0082' }}
          onPress={() => { }}>

          <Avatar
            size="large"
            icon={{ name: 'payment', color: '#2db4ed', type: 'Icon' }}
            overlayContainerStyle={{ backgroundColor: '#4B0082' }}
            containerStyle={{ width: "20%" }}
          />

          <ListItem.Content>
            <ListItem.Title style={{ color: '#FFF' }}>Cartão de Credito</ListItem.Title>
          </ListItem.Content>
        </ListItem>

        <ListItem containerStyle={{ backgroundColor: '#4B0082' }}
          onPress={() => { }}>

          <Avatar
            size="large"
            icon={{ name: 'article', color: '#2db4ed', type: 'Icon' }}
            overlayContainerStyle={{ backgroundColor: '#4B0082' }}
            containerStyle={{ width: "20%" }}
          />

          <ListItem.Content>
            <ListItem.Title style={{ color: '#FFF' }}>boleto bancários</ListItem.Title>
          </ListItem.Content>
        </ListItem>



        <ListItem containerStyle={{ backgroundColor: '#4B0082' }}
          onPress={() => { }}>

          <Avatar
            size="large"
            icon={{ name: 'assessment', color: '#2db4ed', type: 'Icon' }}
            overlayContainerStyle={{ backgroundColor: '#4B0082' }}
            containerStyle={{ width: "20%" }}
          />

          <ListItem.Content>
            <ListItem.Title style={{ color: '#FFF' }}>PIX</ListItem.Title>
          </ListItem.Content>
        </ListItem>

      </View>

      <View style={styles.footerContainer}>

        <View style={styles.viewProduto}>
          <Text style={styles.textProduto}>Produtos</Text>
        </View>

        <View style={styles.viewValor}>
          <Text style={styles.text}>Qtd: {cart.length} </Text>
          <Text style={styles.text}>Valor: R$ {total.toFixed(2).replace(".", ",")}</Text>
        </View>
      </View>
    </View>



  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#4B0082',
  },
  containerFlat: {
    height: '30%'
  },
  body: {
    height: '85%'
  },
  footerContainer: {
    flexDirection: 'row',
    backgroundColor: '#4B0082',
    height: "15%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewProduto: {
    paddingLeft: 20,
    width: '45%',
    alignSelf: 'center',
    justifyContent: 'center'

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
    backgroundColor: '#4B0082',
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
    alignSelf: 'center',
    borderBottomColor: '#8a9497',
    borderBottomWidth: 1,
    width: "95%"
  },
  lineBody: {
    alignSelf: 'center',
    borderBottomColor: '#4B0082',
    borderBottomWidth: 3,
    width: "100%"
  }
})
