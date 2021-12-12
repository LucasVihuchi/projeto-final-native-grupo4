import React from 'react';
import ContextoCredenciais from './context/credenciais';
import Routes from './Routes';

const App = () => {
  return (
    <ContextoCredenciais>
      <Routes />
    </ContextoCredenciais>
  );
};

export default App;
