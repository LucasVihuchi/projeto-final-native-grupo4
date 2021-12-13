import React from 'react';
import {SafeAreaView} from 'react-native';
import Formulario from '../../components/FormularioUsuario/formularioUsuario';
import Header from '../../components/Header';

const CadastroUsuario = () => {
  return (
    <SafeAreaView>
      <Header />
      <Formulario />
    </SafeAreaView>
  );
};

export default CadastroUsuario;
