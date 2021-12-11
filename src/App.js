import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import CadastroUsuario from './pages/CadastroUsuario/cadastroUsuario';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Página APP</Text>
      <CadastroUsuario />
    </SafeAreaView>
  );
};

export default App;
