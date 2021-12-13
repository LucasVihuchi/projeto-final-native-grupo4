import React, {useState, useEffect, useContext} from 'react';

import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {CredenciaisContext} from '../../context/credenciais';

import styles from './styles.js';

const Header = ({navegacao}) => {
  const {credenciais} = useContext(CredenciaisContext);
  const [statusLogin, setStatusLogin] = useState(false);

  useEffect(() => {
    if (
      credenciais.login !== null &&
      credenciais.senha !== null &&
      credenciais.login !== undefined &&
      credenciais.senha !== undefined
    ) {
      setStatusLogin(true);
    } else {
      setStatusLogin(false);
    }
  }, [credenciais]);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.ContainerHeader}>
        <TouchableOpacity style={styles.LogoHeader} onPress={() => navegacao.navigate('Home')}>
          <Image
            style={styles.LogoImagem}
            source={require('../../assets/img/logo.png')}></Image>
        </TouchableOpacity>
        <View style={styles.MenuHeader}>
          <TouchableOpacity style={styles.Carrinho} onPress={() => navegacao.navigate('Carrinho')}>
            <Image
              style={styles.CarrinhoImagem}
              source={require('../../assets/img/shopping-cart.png')}></Image>
          </TouchableOpacity>
          <View style={styles.TextosHeader}>
            <Text style={styles.BemVindo}>Bem-Vindo :)</Text>
            <TouchableOpacity
              onPress={() =>
                statusLogin
                  ? navegacao.navigate('MinhaConta')
                  : navegacao.navigate('Login')
              }>
              <Text style={styles.LoginLink}>
                {statusLogin ? 'MinhaConta' : 'Login'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.Pesquisa}>
        <View style={styles.BarraPesquisa}>
          <TextInput
            style={styles.inputPesquisa}
            placeholder="O que você gostaria de comprar hoje?"
          />
        </View>
        <TouchableOpacity style={styles.BotaoPesquisa}>
          <Image
            style={styles.LupaImagem}
            source={require('../../assets/img/search.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

{
  /* <SearchBar placeholder="O que você quer comprar hoje?" onChangeText={this.updateSearch} value={search}/> */
}
