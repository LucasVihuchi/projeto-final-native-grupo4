import React, {useState, useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {CredenciaisContext} from '../../context/credenciais';

import api from '../../service/api';
import styles from './styles';

function Vendas() {
  const {credenciais, credenciaisCarregadas} = useContext(CredenciaisContext);
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    console.log(credenciais)
    carregaVendas();
  }, [credenciaisCarregadas]);

  async function carregaVendas() {
    if (credenciaisCarregadas) {
      try {
        const response = await api.get(`api/v1/usuarios/vendas`, {
          auth: {
            username: credenciais.login,
            password: credenciais.senha,
          },
        });
        setCompras(response.data);
      } catch (error) {
        console.log(error)
        setCompras([]);
      }
    }
  }

  function calculaTotal(pedido) {
    let total = pedido.fretePedido;
    pedido.listaItemPedido.map(itemPedido => {
      total += itemPedido.precoUnitario * itemPedido.quantidade;
    });
    return total;
  }

  function geraData(dataPedido) {
    let data = new Date(dataPedido);
    let stringData =
      data.getDate() +
      '/' +
      data.getMonth() +
      '/' +
      data.getFullYear() +
      ' ' +
      data.getHours() +
      ':' +
      data.getMinutes();
    return stringData;
  }

  return (
    <View style={styles.containerCompras}>
      <Text style={styles.tituloCompras}>Vendas</Text>
      <View style={styles.cabecalhoContainer}>
        <Text style={[styles.cabecalhoPedido, styles.cabecalhoTabela]}>
          Pedidos
        </Text>
        <Text style={[styles.cabecalhoData, styles.cabecalhoTabela]}>Data</Text>
        <Text style={[styles.cabecalhoValor, styles.cabecalhoTabela]}>
          Valor(R$)
        </Text>
      </View>

      <View style={styles.menuItemLista}>
        {compras.length === 0
          ? null
          : compras.map((item, index) => {
              return (
                <View key={item.id}>
                  <View style={styles.infoContainer}>
                    <Text style={styles.infoPedido}>{item.id}</Text>
                    <Text style={styles.infoData}>
                      {geraData(item.dataPedido)}
                    </Text>
                    <Text style={styles.infoValor}>
                      {calculaTotal(item).toFixed(2)}
                    </Text>
                  </View>
                  <View style={styles.linha}></View>
                </View>
              );
            })}
      </View>
    </View>
  );
}

export default Vendas;
