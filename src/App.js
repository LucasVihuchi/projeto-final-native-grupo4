import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CadastroUsuario from './pages/CadastroUsuario/cadastroUsuario';
import theme from './pages/CadastroUsuario/checkStyles';
import ContextoCredenciais from './context/credenciais';
import Routes from './Routes';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
const App = () => {
  return (
    <ContextoCredenciais>
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView>
          <CadastroUsuario />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
    </ContextoCredenciais>    
  );
};

export default App;
