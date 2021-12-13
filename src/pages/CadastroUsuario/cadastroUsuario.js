import React from 'react';
import {SafeAreaView} from 'react-native';
import Formulario from '../../components/FormularioUsuario/formularioUsuario';
import Header from '../../components/Header';

const CadastroUsuario = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header navegacao={navigation} />
      <Formulario navegacao={navigation} />
    </SafeAreaView>
  );
};

export default CadastroUsuario;
