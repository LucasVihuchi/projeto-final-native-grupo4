import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

function ItemMenuMinhaConta({dados, chave, secaoAtiva, handleSetSecaoAtiva}) {
  return (
    <TouchableOpacity
      onPress={() => handleSetSecaoAtiva(chave)}
      style={[
        secaoAtiva === chave
          ? styles.containerItemMenuAtivo
          : styles.containerItemMenu,
        (chave) % 3 == 0 ? {marginRight: 0} : {marginRight: 32},
      ]}>
      <Image source={dados.imagem} style={secaoAtiva === chave
          ? styles.imagemItemMenuAtivo
          : styles.imagemItemMenu} />
    </TouchableOpacity>
  );
}

export default ItemMenuMinhaConta;
