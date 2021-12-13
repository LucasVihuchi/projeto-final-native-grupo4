import React, { useState, useEffect, useContext } from "react";

import { View, SafeAreaView, Image, Text, Linking, TextInput, TouchableOpacity, SearchBar } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import styles from './styles.js';

const Header = () => {
    const [statusLogin, setStatusLogin] = useState(false);

    return (
        <SafeAreaView style={styles.Container}>
                <View style={styles.ContainerHeader}>
                    <View style={styles.LogoHeader}>
                        <Image style={styles.LogoImagem} source={require('../../assets/img/logo.png')}></Image>
                    </View>
                    <View style={styles.MenuHeader}>
                        <TouchableOpacity style={styles.Carrinho}>
                            <Image style={styles.CarrinhoImagem} source={require('../../assets/img/shopping-cart.png')}></Image>
                        </TouchableOpacity>
                        <View style={styles.TextosHeader}>
                            <Text style={styles.BemVindo}>Bem-Vindo :)</Text>
                            <TouchableOpacity>
                                <Text style={styles.LoginLink}>
                                {statusLogin ? ('MinhaConta') : ('Login')}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.Pesquisa}>
                    <View style={styles.BarraPesquisa}>
                        <TextInput style={styles.inputPesquisa} placeholder="O que você gostaria de comprar hoje?" />
                    </View>
                    <TouchableOpacity style={styles.BotaoPesquisa}>
                        <Image style={styles.LupaImagem} source={require('../../assets/img/search.png')} />
                    </TouchableOpacity>
                </View>
        </SafeAreaView>
    );
}

export default Header;


{/* <SearchBar placeholder="O que você quer comprar hoje?" onChangeText={this.updateSearch} value={search}/> */ }