import React, {useState, useEffect} from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

import api from "../../service/api";
import styles from './styles.js';

const SubHeader = () => {
  const [categorias, setCategorias] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    api
      .get(`api/v1/categorias`)
      .then((response) => {
        if (response.status === 200) {
          setCategorias(response.data);
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.listaErros[0]);
      });
  }, []);

  return (
    <View style={styles.ContainerSubHeader}>
      <TouchableOpacity style={styles.MenuCategorias} onPress={onClick}>
        <Image
          style={styles.CategoriasIcone}
          source={require('../../assets/img/search.png')}
        />
        <Text style={styles.TodasCategorias}>Todas as categorias</Text>
      </TouchableOpacity>
      {categorias.length === 0
        ? null
        : isActive 
        ? categorias.map(categoria => {
            return (
              <TouchableOpacity key={categoria.id} style={styles.ItemCategoria}>
                <Text style={styles.ItemCategoriaTexto}>
                  {categoria.nome}
                </Text>
              </TouchableOpacity>
            );
          })
        : null
        }
    </View>
  );
};

export default SubHeader;
