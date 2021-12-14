import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerCarrinho: {
    paddingHorizontal: '5%',
  },
  carrinhoTitulo: {
    marginTop: 168,
    fontSize: 48,
    fontWeight: '600',
    color: '#000',
  },
  produtosContainer: {
    padding: 14,
    borderRadius: 8,
  },
  tituloItens: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 6,
  },
  tituloItensTexto: {
    fontSize: 20,
  },
  cabecalhoProdutos: {
    flexBasis: '35%',
  },
  cabecalhoQuantidade: {
    flexBasis: '30%',
    textAlign: 'center',
  },
  cabecalhoPreco: {
    flexBasis: '30%',
    textAlign: 'right',
  },
  itensProdutos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  corpoItensTexto: {
    fontSize: 17,
    color: '#000',
  },
  produtoNome: {
    flexBasis: '35%',
  },
  buttonContainer: {
    flexBasis: '30%',
    alignItems: 'center',
  },
  contarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContador: {
    color: '#EBCB26',
    fontWeight: '600',
    fontSize: 24,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  buttonContadorRemover: {
    color: '#EBCB26',
    fontSize: 16,
    paddingHorizontal: 8,
    paddingTop: 2,
  },
  quantidadeProduto: {
    fontSize: 17,
    fontWeight: '600',
    borderRadius: 8,
    borderColor: '#01091D',
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  produtoPrecoTexto: {
    flexBasis: '30%',
    textAlign: 'right',
  },
  resumoPedido: {
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 16,
  },
  tituloResumoPedido: {
    paddingBottom: 12,
  },
  tituloResumoPedidoTexto: {
    fontSize: 22,
    textAlign: 'center',
    color: '#000c',
  },
  produtosTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  produtosTotalTexto: {
    fontSize: 16,
    color: '#000a',
    marginVertical: 6,
  },
  freteValor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  freteValorTexto: {
    fontSize: 16,
    color: '#000a',
    marginVertical: 6,
  },
  prazoDias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prazoDiasTexto: {
    fontSize: 16,
    color: '#000a',
    marginVertical: 6,
  },
  linhaHorizontal: {
      marginVertical: 10,
      borderBottomColor: '#BD8A0888',
      borderBottomWidth: 2
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalTexto: {
    fontSize: 22,
    color: '#000a',
    marginTop: 6,
    marginBottom: 14
  },
  buttonContinuar: {
    marginVertical: 8,
    alignItems: 'center',
    backgroundColor: '#01091D',
    borderRadius: 8,
  },
  buttonContinuarTexto: {
      color: '#fff',
      paddingVertical: 6,
      fontSize: 22,
      textAlign: 'center'
  },

  calculaFretePrazo: {
    paddingHorizontal: 16,
    marginBottom: 48
  },

  subtitulo: {
    fontSize: 22,
    color: '#121B2E',
    paddingTop: 10,
    paddingBottom: 20,
  },

  buscar: {
    flexDirection: 'row',
  },
  input: {
    width: '80%',
    fontSize: 20,
    marginTop: 2,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#01091D'
  },
  buttonBuscaCep: {
    backgroundColor: '#01091D',
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBuscaCepTexto: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    color: '#01091D',
    fontSize: 22,
    paddingBottom: 8,
    textDecorationLine: 'underline',
  },
  texto: {
    fontSize: 22,
  },
});

export default styles;
