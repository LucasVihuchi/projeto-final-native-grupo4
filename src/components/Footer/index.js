import React from 'react';

import {
  View,
  SafeAreaView,
  Image,
  Text,
  Linking,
  TextInput,
} from 'react-native';
import {TouchableOpacity, SearchBar} from 'react-native';

import styles from './styles.js';

const Footer = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.ContainerFooter}>
        <View style={styles.LogoFooter}>
          <Image
            style={styles.LogoImagem}
            source={require('../../assets/img/favico.png')}
          />
        </View>
        <Text style={styles.Texto}>
          @2021 Todos os direitos reservados | Desenvolvido por Grupo4
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Footer;
