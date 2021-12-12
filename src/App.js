import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import CadastroUsuario from './pages/CadastroUsuario/cadastroUsuario';
import theme from './pages/CadastroUsuario/checkStyles';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView>
        <Text>Página APP</Text>
        <CadastroUsuario />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
