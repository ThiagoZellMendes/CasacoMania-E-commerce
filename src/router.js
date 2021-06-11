import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Home from './pages/Home'
import Detail from './pages/Detail/1'
import Detail2 from './pages/Detail/2';
import Detail3 from './pages/Detail/3';
import Detail4 from './pages/Detail/4';
import Detail5 from './pages/Detail/5';
import Detail6 from './pages/Detail/6';
import Search from './pages/Testetab/Cart';
import Notifications from './pages/Testetab/Notifications'
import LoginScreen from './pages/LoginScreen'
import RegisterPage from './pages/RegisterPage';
import Perfil from './pages/Perfil'
import EditPage from './pages/EditPage'
import Cart from './pages/Cart';

import { Entypo, Feather} from '@expo/vector-icons'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Tab Bar
function TabRoutes() {
    return(
         <Tab.Navigator 
         /* "initialRouteName" Inicia o app da Tabbar selecionada*/
         initialRouteName = "Principal"
         tabBarOptions={{
             style:{
                backgroundColor: '#4B0082',
                bonderTopColor: 'transparent'
             },
             activeTintColor: 'white',
             tabStyle:{
                 paddingBottom: 5,
                 paddingTop: 5
             }
            
            }}
            >
             
             <Tab.Screen 
             name="Login" 
             component= {LoginScreen} 
             options={{
                 tabBarIcon: ({ size, color }) => (
                     <Feather name="user" size={size} color={color} />
                 )
             }}
             />
             
             <Tab.Screen
              name="Carrinho" 
              component= {Search} 
              options={{
                tabBarIcon: ({ size, color }) => (
                    <Feather name="shopping-cart" size={size} color={color} />
                )
            }}
              />
            
             <Tab.Screen 
             name="Principal" 
             component= {Home} 
             options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name="home" size={size} color={color} />
                )
            }}
             />
            
             <Tab.Screen 
             name="Notificações" 
             component= {Notifications} 
             options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name="notification" size={size} color={color} />
                )
            }}
             />
            
             <Tab.Screen
              name="Implementação" 
              component= {Cart} 
              options={{
                tabBarIcon: ({ size, color }) => (
                    <Feather name="settings" size={size} color={color} />
                )
            }}
              />
         
         </Tab.Navigator>      
    ) 
 }
 
//Navigação Principal
function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen
                //Inclusão do TabNavigation
                    name={"Main"} component={TabRoutes}
                    options={
                        {headerShown: false}
                    } 
                />

                <Stack.Screen
                //Navegaçao para pagina de registro.
                    name="Register"
                    component={RegisterPage}
                    options={
                        {headerTintColor:'#4B0082'}
                    }
                />

                <Stack.Screen
                //Navegaçao para o perfil de Usuario.
                    name="PerfilUser"
                    component={Perfil}
                    options={{
                        headerShown:false,
                        
                    }}
                />

                <Stack.Screen
                //Navegaçao para o perfil de Usuario.
                    name="EditPage"
                    component={EditPage}
                    options={
                        {headerTintColor:'#4B0082'}
                    }
                />

                <Stack.Screen
                //Navegaçao a aba de detalhe dos produtos.
                    name='Detail1'
                    component={Detail}
                    options={
                        {headerTitle:'Jack'},
                        {headerTintColor: '#4B0082'}
                    }
                />
           

                

                <Stack.Screen
                //Navegaçao a aba de detalhe dos produtos.
                    name="Detail2"
                    component={Detail2}
                    options={
                        {headerTitle:'Jack'},
                        {headerTintColor: '#4B0082'}
                    }
                />

               <Stack.Screen
                //Navegaçao a aba de detalhe dos produtos.
                    name="Detail3"
                    component={Detail3}
                    options={
                        {headerTitle:'Jack'},
                        {headerTintColor: '#4B0082'}
                    }
                />

                <Stack.Screen
                //Navegaçao a aba de detalhe dos produtos.
                    name="Detail4"
                    component={Detail4}
                    options={
                        {headerTitle:'Jack'},
                        {headerTintColor: '#4B0082'}
                    }
                />

                <Stack.Screen
                //Navegaçao a aba de detalhe dos produtos.
                    name="Detail5"
                    component={Detail5}
                    options={
                        {headerTitle:'Jack'},
                        {headerTintColor: '#4B0082'}
                    }
                />

                <Stack.Screen
                //Navegaçao a aba de detalhe dos produtos.
                    name="Detail6"
                    component={Detail6}
                    options={
                        {headerTitle:'Jack'},
                        {headerTintColor: '#4B0082'}
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Routes;