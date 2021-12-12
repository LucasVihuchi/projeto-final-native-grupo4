import React, { useEffect, useContext } from 'react';
import {SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CredenciaisContext} from "./context/credenciais";

import MinhaConta from './pages/MinhaConta/Home';

function Routes() {
  const {handleSetCredenciais, handleSetCredenciaisCarregadas} = useContext(CredenciaisContext);

  async function getCredenciasStorage() {
    try {
      return await AsyncStorage.getItem('@credenciais');
    }
    catch(e) {
      return null;
    }
  }

  async function carregaCredenciais(){
      let credenciaisStorage = JSON.parse(await getCredenciasStorage());
      if (credenciaisStorage !== null && credenciaisStorage !== undefined) {
        handleSetCredenciais(credenciaisStorage);
      }
      handleSetCredenciais(
        {
          login: 'vitor',
          senha: 'geladeira'
        }
      );
      handleSetCredenciaisCarregadas();
  }

  useEffect(() => {
    carregaCredenciais()
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <MinhaConta />
    </SafeAreaView>
  );
}

export default Routes;
