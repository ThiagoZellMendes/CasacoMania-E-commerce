import React from 'react';
import { View,Text, TouchableOpacity, Image, StyleSheet,} from 'react-native';
import { useCart } from '../../context'

export default function MoletCart(props) {

 
const { remove, cart } = useCart()


function filterDesc(desc){
     if(desc.length < 20){
         return desc;
 }

     return `${desc.substring(0, 16)}...`;
 } 
 
return (
  <View style={styles.container}>
    <View style={styles.containerProduto}>

    <View style={styles.viewimg}> 
       <Image
           source={props.img}
           style={styles.MoletImg}
       />
    </View>  
        
    <View style={styles.viewValor}>
            <Text style={styles.textRemover}>{filterDesc(props.children)}</Text>
            <Text style={styles.textRemover}>R$ {props.cost}</Text>
    </View>
            
    <View style={styles.viewLimpar}>
            <TouchableOpacity style={styles.touchRemover} onPress={() => remove(props.index)}>
                <Text style={styles.textR}>REMOVER</Text>
            </TouchableOpacity>
    </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
container:{
        flex: 1,
        width: "100%",
        backgroundColor: '#4B0082',
        paddingTop: 10
},
containerProduto:{
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: '100%',
        width: "100%",
        alignItems:'flex-start',
        justifyContent:'center',
    },
    MoletImg:{
        width: 100,
        height: 100,
    },
    MoletText:{
        fontSize: 16,
        color: '#4B0082',
        textAlign:'center',
        width: '25%'
    },
    viewimg:{
        width: '30%',
        alignSelf:'flex-start',
        justifyContent:'center',

    },
    viewValor:{
        width: '40%',
        alignSelf:'center',
        alignItems: 'stretch',
        justifyContent: 'center',
  
    },
    
    viewLimpar:{
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textRemover:{
    color: '#4B0082',
    fontWeight: 'bold',
    },
    textR:{
        color: '#FFF',
        fontWeight: 'bold',
    },
    touchRemover:{
        backgroundColor: '#9370DB',
        color: '#FFF',
        height: '33%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    }
});