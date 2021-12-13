import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
    backgroundColor: '#F4F4F4',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'justify',
  },
  asterisco: {
    color: 'red',
    textAlign: 'justify',
  },
  input: {
    marginBottom: 10,
    marginTop: 2,
    borderRadius: 8,
    backgroundColor: '#D1D1D1',
    paddingHorizontal: 10,
  },
  botao: {
    borderRadius: 10,
    backgroundColor: '#01091D',
    color: '#F4F4F4',
  },
  genero: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  checkitem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  termos: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  entrarCadastro: {
    color: 'chocolate',
  },
  footer: {
    padding: 40,
  },
});

export default styles;
