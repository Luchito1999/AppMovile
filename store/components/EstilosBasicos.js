import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EstilosBasicos = () => {
    return (
        <View style={StyleSheet.container}>

            <Text style={StyleSheet.titulo}> Hola a todos </Text>


        </View>

    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red",
    },
    titulo:{
        fontSize:24,
        color:"black",
    }
    
})

export default EstilosBasicos