import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import menuMinhaContaData from '../../data/menuMinhaContaData';
import ItemMenuMinhaConta from '../ItemMenuMinhaConta';

function MenuMinhaConta({secaoAtiva, handleSetSecaoAtiva}) {
  return (
    <View style={styles.containerMenu}>
      <FlatList
        numColumns="3"
        style={styles.menuItemLista}
        data={menuMinhaContaData}
        renderItem={({item, index}) => (
          <ItemMenuMinhaConta dados={item} chave={(index+1)} secaoAtiva={secaoAtiva} handleSetSecaoAtiva={handleSetSecaoAtiva} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separadorMenu} />}
      />
    </View>
  );
}

export default MenuMinhaConta;
