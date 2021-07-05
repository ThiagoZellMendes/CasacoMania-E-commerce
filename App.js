import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton';

import Routes from './routes/auth.router'
import firebase from 'firebase';
import { firebaseConfig } from './src/config/firebase';

firebase.initializeApp(firebaseConfig)


export default function App() {
 
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });


  if(!fontsLoaded){
    return <AppLoading />;
  }
 
  return (
    <>   
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </>
  );
}