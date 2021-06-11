import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/core'
import { Avatar, ListItem, Header } from 'react-native-elements';
import firebase from 'firebase';

export default function Perfil() {
 
const navigation = useNavigation();
//const name = 'Thiago Mendes'
const role = 'GERENTE'
 
 return (
    <View>
      <Header 
        placement="right"
        backgroundColor='#4B0082'
        centerComponent={{text: 'Logout', style:{ color: '#fff'}, fontSize: 19 }} 
        rightComponent={<TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                          <Icon name="logout" color="#fff"/> 
                        </TouchableOpacity>}>
      </Header>
     
      <View style={styles.viewContainer}>
        <ListItem containerStyle={{backgroundColor:'#4B0082', paddingTop: 30 , paddingBottom: 30}}>
        <Avatar
          rounded
          //title={name}
          source={require('../../assets/thiago.jpg')}
          size='large'
        />
        <ListItem.Content>
          <ListItem.Title style={{color:'#fff'}}>{firebase.auth().currentUser?.displayName}</ListItem.Title>
          <ListItem.Subtitle style={{color:'#fff'}}>{role}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>


<ListItem containerStyle={{backgroundColor:'#4B0082'}}
          onPress={()=> {}}>
    
    <Avatar
    size="large"
    icon={{name: 'mail', color: 'orange', type: 'Icon'}}
    overlayContainerStyle={{backgroundColor: '#4B0082'}}
    containerStyle={{width:"20%"}}
  />

  <ListItem.Content>
    <ListItem.Title style={{color:'#fff'}}>ZellLianon@gmail.com</ListItem.Title>
    <ListItem.Subtitle style={{color:'#fff'}}>E-mail</ListItem.Subtitle>
  </ListItem.Content>
</ListItem>


<ListItem containerStyle={{backgroundColor:'#4B0082'}}
          onPress={()=> {}}>
    
    <Avatar
    size="large"
    icon={{name: 'verified', color: 'orange', type: 'Icon'}}
    overlayContainerStyle={{backgroundColor: '#4B0082'}}
    containerStyle={{width:"20%"}}
  />

  <ListItem.Content>
    <ListItem.Title style={{color:'#fff'}}>060.361.514.70</ListItem.Title>
    <ListItem.Subtitle style={{color:'#fff'}}>CPF</ListItem.Subtitle>
  </ListItem.Content>
</ListItem>




<ListItem containerStyle={{backgroundColor:'#4B0082'}}
          onPress={()=> {}}>
    
    <Avatar
    size="large"
    icon={{name: 'assignment', color: 'orange', type: 'Icon'}}
    overlayContainerStyle={{backgroundColor: '#4B0082'}}
    containerStyle={{width:"20%"}}
  />

  <ListItem.Content>
    <ListItem.Title style={{color:'#fff'}}>Rua Formosa n°, 2177 - AL</ListItem.Title>
    <ListItem.Subtitle style={{color:'#fff'}}>Endereço</ListItem.Subtitle>
  </ListItem.Content>
</ListItem>



<ListItem containerStyle={{backgroundColor:'#4B0082'}}
          onPress={()=> navigation.navigate('EditPage')}>
    
    <Avatar
    size="large"
    icon={{name: 'settings', color: 'orange', type: 'Icon'}}
    overlayContainerStyle={{backgroundColor: '#4B0082'}}
    containerStyle={{width:"20%"}}
  />

<ListItem.Content>
    <ListItem.Title style={{color:'#fff'}}>Alterar Dados</ListItem.Title>
  </ListItem.Content>
</ListItem>



</View>


    </View>
) 
}

const styles = StyleSheet.create({
textHeader:{
  justifyContent:'flex-start',
  color: '#fff',
  paddingTop: 1,
  fontSize: 17
},
containerList:{
  width: '100%',
  backgroundColor:'#4B0082', 
  height: "30%"
},
viewContainer:{
  width: '100%',
  height: '100%',
  backgroundColor:'#4B0082',
},

})