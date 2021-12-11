import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
  },
  subtitulo: {
    paddingTop: 5,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'justify',
  },
  asterisco: {
    color: 'red',
    textAlign: 'justify',
  },
  input: {
    borderRadius: 5,
    borderColor: '#000',
    backgroundColor: '#497A',
    paddingHorizontal: 10,
  },
  botao: {
    borderRadius: 10,
    backgroundColor: '#01091D',
    color: '#F4F4F4',
  },
  temCadastro: {
    flex: 1,
    justifyContent: 'center',
  },
  entrarCadastro: {
    color: 'chocolate',
  },
  footer: {
    padding: 40,
  },
});

export default styles;
