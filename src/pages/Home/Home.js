import React, {useEffect, useState, useContext } from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './styles';

import api from '../../service/api';

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api
      .get(`api/v1/produtos`)
      .then(response => {
        if (response.status === 200) {
          setProdutos(response.data);
        }
      })
      .catch(error => {
        alert(error.message);
      });
  }, []);

  return (
    <ScrollView>
      {produtos.length === 0
        ? null
        : produtos.map(produto => {
            return (
              <View style={styles.container}>
                <View style={styles.segundoContainer}>
                  <Image
                    style={styles.image}
                    source={{uri: produto.urlFoto}}></Image>
                  <Text style={styles.Texto}>{produto.nome}</Text>
                  <Text style={styles.subTexto}>{produto.descricao}</Text>
                  <Text style={styles.textoPreco}>R$ {produto.precoUnitario.toFixed(2)}</Text>
                  <TouchableOpacity  style={styles.button} onPress={handleComprar}>
                    <Text style={styles.buttonText}>Comprar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}

      <View style={styles.container}>
        <View style={styles.segundoContainer}>
          <Image
            style={styles.image}
            source={require('./../../assets/img/logo.png')}></Image>
          <Text style={styles.Texto}>Travesseiro</Text>
          <Text style={styles.subTexto}>SUB TEXTO</Text>
          <Text style={styles.textoPreco}>R$ 80,00</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
