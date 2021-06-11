import React, {useEffect, useState} from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import firebase from 'firebase'


export default function RegisterPage({navigation}) {

    useEffect(() => { 
        navigation.setOptions({
          headerTitle: 'ALTERAR DADOS'
        }) 
    })
    
    //setstate dos formularios      
    const [cpf, setCpf] = useState('06036151470');
    const [nome, setNome] = useState('Thiago Mendes');
    const [email, setEmail] = useState('zelllianon@gmail.com');
    const [senha, setSenha] = useState('123456');
    const [rsenha, setrSenha] = useState('123456');
    const [isSelected, setSelected] = useState(false);
    //___________________________________________//
    
     //validação dos campos do formulario.
     const [cpfError, setCpfError] = useState(null);
     const [nomeError, setNomeError] = useState(null);
     const [emailError, setEmailError] = useState(null);
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
            firebase.auth().currentUser?.updateProfile({displayName:nome})
            firebase.auth().currentUser?.updatePassword(senha)
                .then(usuario =>{
                    Alert.alert('Atualizado com Sucesso!');
                })
                .catch(erro =>{
                    Alert.alert('Erro ao Atualizar Dados!');
                })

        
        //}
    }
    //___________________________________________// 
return(

    <View style={styles.container}>

       <ScrollView style={styles.scrollContainer}> 
        <View style={styles.descriptionText}>
            <Text style={styles.text}> CPF: </Text>
            <Text style={styles.errorMessage}>{cpfError}</Text>
        </View>
            <View style={styles.viewMaskno}>
                <TextInputMask
                    editable={false}
                    style={styles.inputText}
                    label="CPF"
                    placeholder= "Digite o CPF"
                    placeholderTextColor="#9370DB"
                    type={'cpf'}
                    value={cpf}
                    keyboardType= "number-pad"
                    ref={(ref) => cpfField = ref}
                    onChangeText={value =>{
                        setCpf(value)
                        setCpfError(null)
                    }}  
                />  
            </View>
            
        <View style={styles.descriptionText}>
            <Text style={styles.text}> Novo Nome: </Text>
            <Text style={styles.errorMessage}>{nomeError}</Text>
        </View>
            <View style={styles.viewMask}>
                <TextInputMask
                    style={styles.inputText}
                    label="Editar Nome"
                    placeholder= "Digite Nome"
                    placeholderTextColor="#9370DB"
                    type={'custom'}
                    options={{mask:'********************************************'}}
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
                    placeholder= "Digite E-mail"
                    placeholderTextColor="#9370DB"
                    type={'custom'}
                    options={{mask:'********************************************'}}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={value => {
                        setEmail(value)
                        setEmailError(null)
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
                    placeholder= "Digite Senha"
                    placeholderTextColor="#9370DB"
                    type={'custom'}
                    options={{mask:'********************************************'}}
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
                    placeholder= "Repita a Senha"
                    placeholderTextColor="#9370DB"
                    type={'custom'}
                    options={{mask:'********************************************'}}
                    value={rsenha}
                    secureTextEntry={true}
                    onChangeText={value => {
                        setrSenha(value)
                        setRsenhaError(null)
                    }}
                />
            </View>
       
       <TouchableOpacity style={styles.btnSubmit} onPress={()=> Atualizar()}>
            <Text style={styles.submitText}> ATUALIZAR DADOS </Text>
        </TouchableOpacity>
       
       </ScrollView> 
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4B0082',
        paddingTop: 3,
        alignItems:'center',
        flex: 1,
        justifyContent:'center'
    },
    descriptionText:{
        flexDirection: 'row',
        marginBottom:5
    },
    errorMessage:{
        justifyContent: 'center',
        marginLeft:10,
        color: "#f00",
        fontSize:15,
        alignSelf:'center',
        fontWeight: 'bold',
        width: "50%",
     },
    inputText:{
        color: '#4B0082',
        fontSize: 17,
        width: "98%",
    },
    text:{
        marginTop:7,
        color: '#FFF',
        alignSelf:'flex-start',
        fontWeight: 'bold',
        width: "50%",
    },
    scrollContainer:{
        width:'98%',
        marginTop:15,
    },
    viewCheckBox:{
        width: "100%",
        height: "9%",
        marginTop:10,
        alignItems:'center',
        alignSelf:'center'
    },
    btnSubmit:{
        backgroundColor: '#9370DB',
        marginTop:30,
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        alignSelf: 'center',
        borderRadius: 7,
     },
     submitText:{
        fontSize: 18,
        color: '#FFF'
     },
     viewMask:{
        flexDirection: 'row',
        width: '98%',
        marginBottom: 3,
        backgroundColor: '#FFF',
        color:'#4B0082',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        alignSelf:'center'
     },
     viewMaskno:{
        flexDirection: 'row',
        width: '98%',
        marginBottom: 3,
        backgroundColor: '#C0C0C0',
        color:'#4B0082',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        alignSelf:'center'
     }
})