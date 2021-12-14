import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import theme from './pages/CadastroUsuario/checkStyles';
import ContextoCredenciais from './context/credenciais';
import Routes from './Routes';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <ContextoCredenciais>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </PaperProvider>
    </ContextoCredenciais>
  );
};

export default App;
