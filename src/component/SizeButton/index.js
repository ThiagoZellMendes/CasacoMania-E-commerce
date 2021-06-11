import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SizeButton(props) {
 return (
   <TouchableOpacity style={[styles.container, { backgroundColor: props.bgColor || '#E6e6e6'} ]}>
       <Text style={[styles.text, { color: props.color || '#c9c'} ]}>
         {props.children}
       </Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#e6e6e6',
        borderWidth: 3,
        marginHorizontal: 10,
    },
    text:{
        color:'#fff', 
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});