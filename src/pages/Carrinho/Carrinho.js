import React, {useState, useContext, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Linking,
  SafeAreaView
} from 'react-native';

import Header from '../../components/Header';

import api from '../../service/api';
import {CredenciaisContext} from '../../context/credenciais';
import styles from './styles';

function Carrinho({navigation}) {
  const [cep, setCep] = useState('');
  const [carrinho, setCarrinho] = useState([]);
  const {credenciais, credenciaisCarregadas} = useContext(CredenciaisContext);
  const [frete, setFrete] = useState(0.0);
  const [precoTotal, setPrecoTotal] = useState(0.0);

  const [informacoes, setInformacoes] = useState({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
  });

  const getInformacoes = () => {
    if (cep.length !== 8) {
      Alert.alert('CEP inválido');
      return;
    }
    api
      .get('http://viacep.com.br/ws/' + cep + '/json/')
      .then(response => {
        if (response?.data?.erro) {
          Alert.alert('CEP não encontrado');
        }
        setInformacoes(response.data);
      })
      .catch(error => {
        Alert.alert('CEP inválido');
      });
  };

  const handlingCep = (text) => {
    setCep(text);
  };

  function aumentarContador(produto, pedido) {
    produto.quantidade++;
    setCarrinho(JSON.parse(JSON.stringify(carrinho)));
    atualizaCarrinho(pedido);
  }
  function diminuirContador(produto, pedido) {
    if (produto.quantidade > 1) {
      produto.quantidade--;
      setCarrinho(JSON.parse(JSON.stringify(carrinho)));
      atualizaCarrinho(pedido);
    }
  }

  function removeItem(index, pedido) {
    if (pedido.listaItemPedido.length > 1) {
      pedido.listaItemPedido.splice(index, 1);
      setCarrinho(JSON.parse(JSON.stringify(carrinho)));
      atualizaCarrinho(pedido);
    }
  }

  async function getCarrinho() {
    try {
      const response = await api.get(`api/v1/usuarios/carrinho`, {
        auth: {
          username: credenciais.login,
          password: credenciais.senha,
        },
      });
      setCarrinho(response.data);
    } catch (error) {
      setCarrinho([]);
    }
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
      .then(() => {})
      .catch(error => {
        Alert.alert(error.response.data.listaErros[0]);
      });
  }

  function finalizarPedido() {
    carrinho.map(pedido => {
      try {
        const response = api.put(
          `api/v1/pedidos/${pedido.id}/finalizar`,
          null,
          {
            auth: {
              username: credenciais.login,
              password: credenciais.senha,
            },
          },
        );
        Alert.alert('Pedido(s) finalizado(s)', 'Cheque seu email', [
          {text: 'Ok', onPress: () => navigation.navigate('MinhaConta')},
        ]);
      } catch (error) {
        Alert.alert('Erro ao finalizar o pedido');
      }
    });
  }

  useEffect(() => {
    let freteTotal = 0;
    carrinho.map(pedido => {
      freteTotal += pedido.fretePedido;
    });
    setFrete(freteTotal);
  }, [carrinho]);

  useEffect(() => {
    let total = frete;
    carrinho.map(pedido => {
      pedido.listaItemPedido.map(itemPedido => {
        total += itemPedido.precoUnitario * itemPedido.quantidade;
      });
    });
    setPrecoTotal(total);
  }, [carrinho]);

  useEffect(() => {
    if (
      credenciais.login !== null &&
      credenciais.senha !== null &&
      credenciais.login !== undefined &&
      credenciais.senha !== undefined
    ) {
      getCarrinho();
    }
  }, [credenciaisCarregadas]);

  return (
    <SafeAreaView>
      <Header navegacao={navigation} />
      <ScrollView style={styles.containerCarrinho}>
        <Text style={styles.carrinhoTitulo}>Meu Carrinho</Text>
        <View style={styles.produtosContainer}>
          <View style={styles.tituloItens}>
            <Text style={[styles.cabecalhoProdutos, styles.tituloItensTexto]}>
              Produtos
            </Text>
            <Text style={[styles.cabecalhoQuantidade, styles.tituloItensTexto]}>
              Quantidade
            </Text>
            <Text style={[styles.cabecalhoPreco, styles.tituloItensTexto]}>
              Preço
            </Text>
          </View>
          {carrinho.length === 0
            ? null
            : carrinho.map(pedido => {
                let produtos = pedido.listaItemPedido.map((itemPedido, index) => {
                  return (
                    <View
                      key={itemPedido.produto.id}
                      style={styles.itensProdutos}>
                      <Text style={[styles.produtoNome, styles.corpoItensTexto]}>
                        {itemPedido.produto.nome}
                      </Text>

                      <View style={styles.buttonContainer}>
                        <View style={styles.contarContainer}>
                          <TouchableOpacity
                            onPress={() => diminuirContador(itemPedido, pedido)}>
                            <Text style={styles.buttonContador}>–</Text>
                          </TouchableOpacity>
                          <Text
                            style={[
                              styles.corpoItensTexto,
                              styles.quantidadeProduto,
                            ]}>
                            {itemPedido.quantidade}
                          </Text>
                          <TouchableOpacity
                            onPress={() => aumentarContador(itemPedido, pedido)}>
                            <Text style={styles.buttonContador}>+</Text>
                          </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                          style={styles.removerButton}
                          onPress={() => removeItem(index, pedido)}>
                          <Text style={styles.buttonContadorRemover}>
                            Remover
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <Text
                        style={[
                          styles.produtoPrecoTexto,
                          styles.corpoItensTexto,
                        ]}>
                        {itemPedido.produto.precoUnitario.toFixed(2)}
                      </Text>
                    </View>
                  );
                });
                return produtos;
              })}
        </View>

        <View style={styles.resumoPedido}>
          <View style={styles.tituloResumoPedido}>
            <Text style={styles.tituloResumoPedidoTexto}>Resumo do pedido</Text>
          </View>

          {carrinho.length === 0
            ? null
            : carrinho.map(pedido => {
                let produtos = pedido.listaItemPedido.map((itemPedido, index) => {
                  return (
                    <View
                      key={itemPedido.produto.id}
                      style={styles.produtosTotal}>
                      <Text style={styles.produtosTotalTexto}>
                        {itemPedido.quantidade}x {itemPedido.produto.nome}
                      </Text>
                      <Text style={styles.produtosTotalTexto}>
                        R${' '}
                        {(
                          itemPedido.quantidade * itemPedido.precoUnitario
                        ).toFixed(2)}
                      </Text>
                    </View>
                  );
                });
                return produtos;
              })}

          <View style={styles.freteValor}>
            <Text style={styles.freteValorTexto}>Frete</Text>
            <Text style={styles.freteValorTexto}>R$ {frete.toFixed(2)}</Text>
          </View>

          <View style={styles.prazoDias}>
            <Text style={styles.prazoDiasTexto}>Prazo</Text>
            <Text style={styles.prazoDiasTexto}>7 dias úteis</Text>
          </View>

          <View style={styles.linhaHorizontal} />

          <View style={styles.total}>
            <Text style={styles.totalTexto}>Total:</Text>
            <Text style={styles.totalTexto}>R$ {precoTotal.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.buttonContinuar}>
            <Text onPress={finalizarPedido} style={styles.buttonContinuarTexto}>
              Finalizar
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.calculaFretePrazo}>
          <Text style={styles.subtitulo}>Calcular frete e prazo:</Text>
          <View style={styles.buscar}>
            <TextInput
              style={styles.input}
              placeholder="Digite o cep aqui"
              keyboardType='numeric'
              onChangeText={(text) => {
                handlingCep(text);
              }}
              value={cep} 
            />
            <TouchableOpacity
              style={styles.buttonBuscaCep}
              onPress={() => {getInformacoes()}}
            >
              <Text style={styles.buttonBuscaCepTexto}>ok!</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https//buscacepinter.correios.com.br/app/endereco/index.php',
              )
            }>
            Não sei meu cep :/
          </Text>
          <Text style={styles.texto}>Endereço encontrado: {informacoes.logradouro} - {informacoes.bairro} - {informacoes["localidade"]}/
                {informacoes["uf"]}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Carrinho;
