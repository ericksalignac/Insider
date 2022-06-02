import React from "react";
import { View, StatusBar } from "react-native";
import Routes from "./src/routes";
import { NavigationContainer } from '@react-navigation/native'


export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#232630" barStyle="ligth-content"/>
      <Routes/>
    </NavigationContainer>
  )
}