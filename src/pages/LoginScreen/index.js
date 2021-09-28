import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated, Keyboard, LogBox} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core';
import { Alert } from 'react-native';
import firebase from 'firebase'


export default function LoginScreen() {
    
    //const de navegação
    const navigation = useNavigation();

    const[offset] = useState( new Animated.ValueXY({x: 0, y: 95 }));
    const[opacity] = useState( new Animated.Value(0));
    const[logo] = useState( new Animated.ValueXY({x: 250, y: 300}));
    
    const [hidePass, setHidePass] = useState(true);

    const [senha, setSenha] = useState(null);
    const [email, setEmail] = useState(null);
    //---------------------------------------------------------------------------//
    
    //função para acessar
    const Acessar= () =>{
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(usuario => navigation.navigate('Principal'))
            .catch(erro => Alert.alert('Email ou senha Incorreto'))
        
    }
    

    useEffect(()=>{
        
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', KeyboardDidShow);
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', KeyboardDidHide);
        //faz com que pare de monstrar a tela amarela de erro no "useNativeDriver"
        //poderia ser usando tambem " useNativeDriver: true", mas teria que ser dentro de cada Animated.**
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
        
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness:20,
                
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                
            })
        
        ]).start();
    
    }, []);

    function KeyboardDidShow(){
        
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 150,
                duration: 100,
                
            }),
            Animated.timing(logo.y, {
                toValue: 133,
                duration: 100,
                
            })
        ]).start();

    }

    function KeyboardDidHide(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 250,
                duration: 100,
               
            }),
            Animated.timing(logo.y, {
                toValue: 300,
                duration: 100,
               
            })
        ]).start();
    }
 
return (

   <KeyboardAvoidingView style={styles.background}>
       <View style={styles.containerlogo}> 
           <Animated.Image 
           style={{
            width: logo.x,
            height: logo.y
           }}
           source={require('../../assets/logo.png')}
           />
       </View>

       <Animated.View
       style={[
           styles.container,
           {
             opacity: opacity,
             transform: [
                 { translateY: offset.y }
             ]  
           }
        ]}
       >
        
        {/* "Input email" */}
           <TextInput 
           style={styles.inputArea}
           placeholder="Email"
           placeholderTextColor="#9370DB"
           keyboardType={'email-address'}
           value={email}
           autoCorrect={false}
           onChangeText={ (email) => setEmail(email) }
           />
        {/* "Input email", Termina aqui */}
        
        
        {/* senha com "olho" de escoder e aparecer senha */}
        <View style={styles.inputArea}>
           <TextInput style={styles.inputSenha}
           placeholder="Senha"
           placeholderTextColor="#9370DB"
           value={senha}
           autoCorrect={false}
           onChangeText={ (senha) => setSenha(senha) }
           secureTextEntry={hidePass}
           />
        
           <TouchableOpacity style={styles.iconEye} onPress={()=> setHidePass(!hidePass) }>
                <Ionicons name= "eye" color= "#4B0082" size={20} />
           </TouchableOpacity>
        </View>

        {/* "Olho", Termina aqui */}
           
           <TouchableOpacity style={styles.btnSubmit} onPress={()=>Acessar()}>
               <Text style={styles.submitText}>ACESSAR</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.btnRegister} onPress={()=> navigation.navigate('Register')}>
               <Text style={styles.registerText}>Não tem conta? Crie uma AQUI.</Text>
           </TouchableOpacity>
           
       </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4B0082'
    },
    containerlogo:{
        flex:1,
        justifyContent: 'center',
        paddingTop: 40
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 30
    
    },
    inputArea:{
        flexDirection: 'row',
        width: '90%',
        marginBottom: 15,
        backgroundColor: '#FFF',
        color:'#4B0082',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    inputSenha:{
       width: '85%',
       color: '#4B0082',
       fontSize: 17,
    },
    iconEye:{
       width: '15%',
       justifyContent: 'center',
       alignItems: 'center', 
    },
    btnSubmit:{
       backgroundColor: '#28cc9e',
       width: '90%',
       height: 45,
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 7
    },
    submitText:{
        fontSize: 18,
        color: '#FFF'
    },
    btnRegister:{
        marginTop: 10,
    },
    registerText:{
      color: '#28cc9e'  
    }
});