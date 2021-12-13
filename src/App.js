import React from 'react';
import ContextoCredenciais from './context/credenciais';
import Routes from './Routes';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
const App = () => {
  return (
    <ContextoCredenciais>
      <Routes />
    </ContextoCredenciais>
  );
};

export default App;
