import { View, Text, Button } from "react-native";
import React from 'react'

function DetailScreen({cambiarPantalla}) {
  return (
    <View style={{padding:20}}>

        <Text style={{fontSize:20, marginBottom:10}}></Text>
        <Button title="Volver al inicio" onPress={() => cambiarPantalla("Home")}/>
    </View>
  )
}

export default DetailScreen
