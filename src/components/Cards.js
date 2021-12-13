import React from "react";
import {TouchableOpacity, View} from 'react-native';
import style from "./StyleCard";

const Cards = () => {
    return (
        <View style={style.container}> 
        <View style={style.segundoContainer}>
        <Image style={style.image} source={require ('./../../assets/img/cartoes.png')}></Image>
        <Text style={style.Texto}>Travesseiro</Text>
        <Text style={style.subTexto}>SUB TEXTO</Text>
        <Text style={style.textoPreco}>R$ 80,00</Text>
        <TouchableOpacity style={style.button}>  
            <Text style={style.buttonText}>
            Comprar 
            </Text>
        </TouchableOpacity>
        </View>
        </View>

    )
};

export default Cards;