import React, {useState} from "react";
import {View, Button, Text} from "react-native";

const Contador = () => {
    const [contador, setContador] = useState(0)
    const sumar = () => {
        setContador(contador + 1) // aumentar en 1
    }
    return (
        <View>

            <Text> El contador: {contador}</Text>  
            <Button title="Sumar" onPress={sumar}/>

        </View>
    )
}

export default Contador