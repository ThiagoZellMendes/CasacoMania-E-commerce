import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import firebase from 'firebase'
import 'firebase/firestore'



export default function RegisterPage({ navigation }) {

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'ALTERAR DADOS'
    })
  })

  const db = firebase.firestore().collection('Users')
  // const  dados =  db.doc(firebase.auth().currentUser.uid).get().then( doc =>  {
  //   const  resposta  = doc.data()
  //   console.log(resposta)
  // })
  const  dados = db.doc(firebase.auth().currentUser.uid).get().then(() => 'cep')
  
  console.log(dados)
  //setstate dos formularios      
  // console.log(dados)
  const [nome, setNome] = useState(firebase.auth().currentUser?.displayName);
  const [email, setEmail] = useState(firebase.auth().currentUser?.email);
  const [cep, setCep] = useState()
  const [endereco, setEndereco] = useState();
  const [numero, setNumero] = useState();
  const [cidade, setCidade] = useState();
  const [senha, setSenha] = useState('123456');
  const [rsenha, setrSenha] = useState('123456');
  //___________________________________________//

  //validação dos campos do formulario.
  const [nomeError, setNomeError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [cepError, setCepError] = useState(null);
  const [enderecoError, setEnderecoError] = useState(null);
  const [numeroError, setNumeroError] = useState(null);
  const [cidadeError, setCidadeError] = useState(null);
  const [senhaError, setSenhaError] = useState(null);
  const [rsenhaError, setRsenhaError] = useState(null);
  //___________________________________________//

  //     //referencia a caixa de texto(CPF) para validação do mesmo.
  let cpfField = null
  //     //___________________________________________//

  //     //função de validação

  //     const Validar = () => {
  //         let error = false
  //         setCpfError(null)
  //         setNomeError(null)
  //         setEmailError(null)
  //         setSenhaError(null)
  //         setRsenhaError(null)
  //         var re = /\S+@\S+\.\S+/

  //         if (!cpfField.isValid()){
  //             setCpfError("Preencha seu CPF")
  //             error = true
  //         }
  //         if (nome == null){
  //             setNomeError("Preencha seu Nome");
  //             error = true
  //             }
  //         if (!re.test(email)){
  //             setEmailError("Preencha seu E-mail");
  //             error = true
  //         }
  //         if (senha == null){
  //             setSenhaError("Preencha sua Senha");
  //             error = true
  //         }
  //         if (rsenha != senha){
  //             setRsenhaError("Senhas não coencidem");
  //             error = true
  //         } 
  //         if (isSelected == false){
  //             error = true
  //         }   
  //     return !error
  //     //___________________________________________//

  // }
  //função de do butão de cadastrar
  

  const Atualizar = () => {
    //if (Validar(true)){
    firebase.auth().currentUser?.updateProfile({ displayName: nome })
    firebase.auth().currentUser?.updatePassword(senha)
      .then(() => {
        db.doc(firebase.auth().currentUser.uid).update({
          cep:cep,
          endereco:endereco,
          numero:numero,
          cidade:cidade
      })
        Alert.alert('Atualizado com Sucesso!');
      })
      .catch(erro => {
        Alert.alert('Erro ao Atualizar Dados!');
        console.log(erro)
      })


    //}
  }
  //___________________________________________// 
  return (

    <View style={styles.container}>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.descriptionText}>
          <Text style={styles.text}> Novo Nome: </Text>
          <Text style={styles.errorMessage}>{nomeError}</Text>
        </View>
        <View style={styles.viewMask}>
          <TextInputMask
            style={styles.inputText}
            label="Editar Nome"
            placeholder="Digite Nome"
            placeholderTextColor="#9370DB"
            type={'custom'}
            options={{ mask: '********************************************' }}
            value={nome}
            onChangeText={value => {
              setNome(value)
              setNomeError(null)
            }}
          />
        </View>






        <View style={styles.descriptionText}>
          <Text style={styles.text}> E-mail: </Text>
          <Text style={styles.errorMessage}>{emailError}</Text>
        </View>
        <View style={styles.viewMaskno}>
          <TextInputMask
            editable={false}
            style={styles.inputText}
            label="E-mail"
            placeholder="Digite E-mail"
            placeholderTextColor="#9370DB"
            type={'custom'}
            options={{ mask: '********************************************' }}
            keyboardType="email-address"
            value={email}
            onChangeText={value => {
              setEmail(value)
              setEmailError(null)
            }}
          />
        </View>


        <View style={styles.descriptionText}>
          <Text style={styles.text}> CEP: </Text>
          <Text style={styles.errorMessage}>{cepError}</Text>
        </View>
        <View style={styles.viewMask}>
          <TextInputMask
            style={styles.inputText}
            label="CEP"
            placeholder="Digite CEP"
            placeholderTextColor="#9370DB"
            type={'zip-code'}
            value={cep}
            onChangeText={value => {
              setCep(value)
              setCepError(null)
            }}
          />
        </View>

        <View style={styles.descriptionText}>
          <Text style={styles.text}> Endereço: </Text>
          <Text style={styles.errorMessage}>{enderecoError}</Text>
        </View>
        <View style={styles.viewMask}>
          <TextInputMask
            style={styles.inputText}
            label="Endereço"
            placeholder="Digite Rua/Avenida - bairro"
            placeholderTextColor="#9370DB"
            type={'custom'}
            options={{ mask: '********************************************' }}
            value={endereco}
            onChangeText={value => {
              setEndereco(value)
              setEnderecoError(null)
            }}
          />
        </View>

        <View style={styles.descriptionText}>
          <Text style={styles.text}> Numero: </Text>
          <Text style={styles.errorMessage}>{numeroError}</Text>
        </View>
        <View style={styles.viewMask}>
          <TextInputMask
            style={styles.inputText}
            label="Numero"
            placeholder="Digite Rua/Avenida - bairro"
            placeholderTextColor="#9370DB"
            type={'custom'}
            options={{ mask: '********************************************' }}
            value={numero}
            onChangeText={value => {
              setNumero(value)
              setNumeroError(null)
            }}
          />
        </View>
        
        <View style={styles.descriptionText}>
          <Text style={styles.text}> Cidade/Estado: </Text>
          <Text style={styles.errorMessage}>{cidadeError}</Text>
        </View>
        <View style={styles.viewMask}>
          <TextInputMask
            style={styles.inputText}
            label="Cidade/estado"
            placeholder="Cidade - Estado"
            placeholderTextColor="#9370DB"
            type={'custom'}
            options={{ mask: '********************************************' }}
            value={cidade}
            onChangeText={value => {
              setCidade(value)
              setCidadeError(null)
            }}
          />
        </View>
        <View style={styles.descriptionText}>
          <Text style={styles.text}> Nova Senha: </Text>
          <Text style={styles.errorMessage}>{senhaError}</Text>
        </View>
        <View style={styles.viewMask}>
          <TextInputMask
            style={styles.inputText}
            label="Nova Senha"
            placeholder="Digite Senha"
            placeholderTextColor="#9370DB"
            type={'custom'}
            options={{ mask: '********************************************' }}
            value={senha}
            secureTextEntry={true}
            onChangeText={value => {
              setSenha(value)
              setSenhaError(null)
            }}
          />
        </View>
        <View style={styles.descriptionText}>
          <Text style={styles.text}> Repetir Nova Senha: </Text>
          <Text style={styles.errorMessage}>{rsenhaError}</Text>
        </View>
        <View style={styles.viewMask}>
          <TextInputMask
            style={styles.inputText}
            label="Repetir Nova Senha"
            placeholder="Repita a Senha"
            placeholderTextColor="#9370DB"
            type={'custom'}
            options={{ mask: '********************************************' }}
            value={rsenha}
            secureTextEntry={true}
            onChangeText={value => {
              setrSenha(value)
              setRsenhaError(null)
            }}
          />
        </View>

        <TouchableOpacity style={styles.btnSubmit} onPress={() => Atualizar()}>
          <Text style={styles.submitText}> ATUALIZAR DADOS </Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B0082',
    paddingTop: 3,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  descriptionText: {
    flexDirection: 'row',
    marginBottom: 5
  },
  errorMessage: {
    justifyContent: 'center',
    marginLeft: 10,
    color: "#f00",
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: 'bold',
    width: "50%",
  },
  inputText: {
    color: '#4B0082',
    fontSize: 17,
    width: "98%",
  },
  text: {
    marginTop: 7,
    color: '#FFF',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    width: "50%",
  },
  scrollContainer: {
    width: '98%',
    marginTop: 15,
  },
  viewCheckBox: {
    width: "100%",
    height: "9%",
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center'
  },
  btnSubmit: {
    backgroundColor: '#9370DB',
    marginTop: 30,
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    alignSelf: 'center',
    borderRadius: 7,
  },
  submitText: {
    fontSize: 18,
    color: '#FFF'
  },
  viewMask: {
    flexDirection: 'row',
    width: '98%',
    marginBottom: 3,
    backgroundColor: '#FFF',
    color: '#4B0082',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    alignSelf: 'center'
  },
  viewMaskno: {
    flexDirection: 'row',
    width: '98%',
    marginBottom: 3,
    backgroundColor: '#C0C0C0',
    color: '#4B0082',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    alignSelf: 'center'
  }
})