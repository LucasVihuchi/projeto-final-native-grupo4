import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Formulario from '../../components/FormularioUsuario/formularioUsuario';

const CadastroUsuario = () => {
  return (
    <SafeAreaView>
      <Text>Página de cadastro</Text>
      <Formulario />
    </SafeAreaView>
  );
};

export default CadastroUsuario;
