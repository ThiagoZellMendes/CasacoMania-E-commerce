import React from 'react';
import { View,Text, TouchableOpacity, Image, StyleSheet,} from 'react-native';

export default function Molet(props) {
 
function filterDesc(desc){
    if(desc.length < 22){
        return desc;
}

    return `${desc.substring(0, 16)}...`;
} 
 
return (
   <TouchableOpacity style={styles.container} onPress={props.onClick}>
       <Image
           source={props.img}
           style={styles.MoletImg}
       />
       <Text style={styles.MoletText}>
           {filterDesc(props.children)}
       </Text>
       <View opacity={0.4}>
        <Text style={styles.MoletText}> {props.cost} </Text>
       </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    MoletImg:{
        width: 175,
        height: 175
    },
    MoletText:{
        fontSize: 16,
        color: '#4B0082',
        textAlign:'center'
    }
});