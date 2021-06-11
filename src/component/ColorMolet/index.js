import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

export default function ColorMolet(props) {
 return (
   <TouchableOpacity style={[styles.container, { backgroundColor: props.color }]}>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.050,
        height: Dimensions.get('window').width * 0.050,
        borderRadius: Dimensions.get('window').width * 0.050 / 2,
        marginHorizontal: '2.5%',
        elevation: 5,
    }
})