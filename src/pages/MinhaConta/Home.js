import React, {useState, useContext, useEffect} from 'react';
import {ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MenuMinhaConta from '../../components/MenuMinhaConta';
import Compras from '../../components/Compras';
import Vendas from '../../components/Vendas';

import {CredenciaisContext} from '../../context/credenciais';

function MinhaConta({navigation}) {
  const {credenciais, credenciaisCarregadas, handleSetCredenciais} =
    useContext(CredenciaisContext);
  const [secaoAtiva, setSecaoAtiva] = useState(1);

  async function realizarLogout() {
    let deletado = await removeCredenciasStorage();
    if (deletado) {
      handleSetCredenciais({
        login: null,
        senha: null,
      });
      Alert.alert('Logout', 'Usuário deslogado com sucesso', [
        {text: 'Ok', onPress: () => navigation.navigate('Home')},
      ]);
    } else {
      Alert.alert('Erro ao deslogar');
    }
  }

  async function removeCredenciasStorage() {
    try {
      await AsyncStorage.removeItem('@credenciais');
      return true;
    } catch (e) {
      return false;
    }
  }

  function handleSetSecaoAtiva(numSecao) {
    setSecaoAtiva(numSecao);
  }

  useEffect(() => {
    if (secaoAtiva === 4) {
      navigation.navigate('Home');
    } else if (secaoAtiva === 5) {
      navigation.navigate('Home');
    } else if (secaoAtiva === 6) {
      realizarLogout();
    }
  }, [secaoAtiva]);

  useEffect(() => {
    if (credenciaisCarregadas) {
      if (credenciais.login === null && credenciais.senha === null) {
        navigation.navigate('Login');
      }
    }
  }, [credenciaisCarregadas]);

  return (
    <ScrollView style={{flex: 1}}>
      <MenuMinhaConta
        secaoAtiva={secaoAtiva}
        handleSetSecaoAtiva={handleSetSecaoAtiva}
      />
      {secaoAtiva === 1 ? (
        <Compras />
      ) : secaoAtiva === 2 ? (
        <Compras />
      ) : secaoAtiva === 3 ? (
        <Vendas />
      ) : null}
    </ScrollView>
  );
}

export default MinhaConta;
