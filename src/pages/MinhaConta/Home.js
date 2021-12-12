import React, {useState} from 'react';
import MenuMinhaConta from '../../components/MenuMinhaConta';
import Compras from '../../components/Compras';
import Vendas from '../../components/Vendas';
import {ScrollView} from 'react-native';

function MinhaConta() {
  const [secaoAtiva, setSecaoAtiva] = useState(1);

  function handleSetSecaoAtiva(numSecao) {
    setSecaoAtiva(numSecao);
  }

  return (
    <ScrollView style={{flex: 1}}>
      <MenuMinhaConta
        secaoAtiva={secaoAtiva}
        handleSetSecaoAtiva={handleSetSecaoAtiva}
      />
      {secaoAtiva === 1 ? (
        <Compras />
      ) : secaoAtiva === 2 ? (
        <Compras />
      ) : secaoAtiva === 3 ? (
        <Vendas />
      ) : (
        null
      )}
    </ScrollView>
  );
}

export default MinhaConta;
