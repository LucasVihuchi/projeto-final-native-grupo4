import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MenuMinhaConta from '../../components/MenuMinhaConta';

function MinhaConta() {
  const [secaoAtiva, setSecaoAtiva] = useState(0);

  function handleSetSecaoAtiva(numSecao) {
    setSecaoAtiva(numSecao);
  }

  return (
    <SafeAreaView>
      <MenuMinhaConta secaoAtiva={secaoAtiva} handleSetSecaoAtiva={handleSetSecaoAtiva} />
      
    </SafeAreaView>
  );
}

export default MinhaConta;
