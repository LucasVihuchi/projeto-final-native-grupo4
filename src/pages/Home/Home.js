import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {CredenciaisContext} from '../../context/credenciais';
import api from '../../service/api';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import Footer from '../../components/Footer/index';

const Home = ({navigation}) => {
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

  const {credenciais} = useContext(CredenciaisContext);

  async function handleComprar(produto) {
    if (
      (credenciais.login === null && credenciais.senha === null) ||
      (credenciais.login === undefined && credenciais.senha === undefined)
    ) {
      Alert.alert('Realize login antes de comprar itens');
      return;
    } else {
      let carrinho = await getCarrinho();
      if (carrinho.length === 0) {
        console.log('Criar');
        criaPedido();
      } else {
        buscaProdutoCarrinho(carrinho, produto);
      }
    }
  }

  function buscaProdutoCarrinho(carrinho, produto) {
    let constaVendedor = false;
    carrinho.forEach(pedido => {
      if (pedido.vendedor.id === produto.vendedor.id) {
        constaVendedor = true;
        let atualizado = null;
        pedido.listaItemPedido.forEach(itemPedido => {
          if (itemPedido.produto.id === produto.id) {
            if (itemPedido.produto.qtdEstoque > itemPedido.quantidade) {
              itemPedido.quantidade++;
              atualizaCarrinho(pedido);
              atualizado = true;
            } else {
              Alert.alert('Estoque insuficiente');
              atualizado = false;
            }
          }
        });

        if (atualizado) {
          return true;
        } else if (atualizado === null || atualizado === undefined) {
          let itemPedido = {
            quantidade: 1,
            produto: {
              id: produto.id,
            },
          };
          pedido.listaItemPedido.push(itemPedido);
          atualizaCarrinho(pedido);
        } else {
          return false;
        }
      }
    });
    if (!constaVendedor) {
      criaPedido();
    }
  }

  function criaPedido() {
    let pedido = {
      fretePedido: 0,
      vendedor: {
        id: produto.vendedor.id,
      },
      listaItemPedido: [
        {
          quantidade: 1,
          produto: {
            id: produto.id,
          },
        },
      ],
    };
    api
      .post(`api/v1/pedidos`, pedido, {
        headers: {
          'Content-Type': 'application/json',
        },
        auth: {
          username: credenciais.login,
          password: credenciais.senha,
        },
      })
      .then(() => {
        Alert.alert('Pedido criado com sucesso!');
      })
      .catch(error => {
        Alert.alert(error.response.data.listaErros[0]);
      });
  }

  function atualizaCarrinho(pedido) {
    api
      .put(`api/v1/pedidos/${pedido.id}`, pedido, {
        headers: {
          'Content-Type': 'application/json',
        },
        auth: {
          username: credenciais.login,
          password: credenciais.senha,
        },
      })
      .then(() => {
        Alert.alert('Pedido atualizado com sucesso!');
      })
      .catch(error => {
        Alert.alert(error.response.data.listaErros[0]);
      });
  }

  async function getCarrinho() {
    try {
      const response = await api.get(`api/v1/usuarios/carrinho`, {
        auth: {
          username: credenciais.login,
          password: credenciais.senha,
        },
      });
      return response.data;
    } catch (error) {
      return [];
    }
  }

  return (
    <SafeAreaView style={styles.containerCards}>
      <Header navegacao={navigation} />
      <SubHeader />
      <ScrollView>
        {produtos.length === 0
          ? null
          : produtos.map(produto => {
              return (
                <View style={styles.container} key={produto.id}>
                  <View style={styles.segundoContainer}>
                    <Image
                      style={styles.image}
                      source={{uri: produto.urlFoto}}></Image>
                    <Text style={styles.Texto}>{produto.nome}</Text>
                    <Text style={styles.subTexto}>{produto.descricao}</Text>
                    <Text style={styles.textoPreco}>
                      R$ {produto.precoUnitario.toFixed(2)}
                    </Text>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        handleComprar(produto);
                      }}>
                      <Text style={styles.buttonText}>Comprar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
