import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CadastroUsuario from './pages/CadastroUsuario/cadastroUsuario';
import theme from './pages/CadastroUsuario/checkStyles';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <Text>Página APP</Text>
          <CadastroUsuario />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
