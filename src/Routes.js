import React, { useEffect, useContext } from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CredenciaisContext} from "./context/credenciais";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MinhaConta from './pages/MinhaConta/Home';
import CadastroUsuario from './pages/CadastroUsuario/cadastroUsuario';
import Carrinho from './pages/Carrinho/Carrinho';
import Login from './pages/Login/login';
import Header from './components/Header';
import Home from './pages/Home/Home';

const Stack = createNativeStackNavigator();

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
      handleSetCredenciaisCarregadas();
  }

  useEffect(() => {
    carregaCredenciais()
  }, []);

  // Rota inicial está como footer, só para testes. Voltar para Home quando terminar
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <Header /> }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerTitle: () => <Header /> }}/>
        <Stack.Screen name="MinhaConta" component={MinhaConta} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;