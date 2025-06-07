import { View, Text, Button } from "react-native";
import React from 'react'

function HomeScreen({cambiarPantalla}) {
  return (
    <View style={{padding:20}}>

        <Text style={{fontSize:20, marginBottom:10}}></Text>
        <Button title="Ir al detalle" onPress={() => cambiarPantalla("Detalle")}/>
    </View>
  )
}

export default HomeScreen
