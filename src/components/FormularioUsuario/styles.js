import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: '5%',
    paddingTop: 168,
    paddingBottom: 40,
    backgroundColor: '#F4F4F4',
  },
  titulo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Montserrat',
    textAlign: 'justify',
    marginTop: 10,
  },
  asterisco: {
    color: 'red',
    textAlign: 'justify',
  },
  input: {
    width: '100%',
    fontSize: 18,
    marginTop: 2,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#D1D1D1',
    fontFamily: 'Montserrat',
  },
  inputData: {
    width: '100%',
    marginTop: 2,
    backgroundColor: '#D1D1D1',
  },
  botao: {
    width: '100%',
    backgroundColor: '#01091D',
    justifyContent: 'center',
    paddingVertical: 6,
    borderRadius: 10,
    marginVertical: 6,
  },
  textobotao: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  genero: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    fontSize: 22,
  },
  checkitem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
  termos: {
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 17,
    fontFamily: 'Montserrat',
  },
  entrarCadastro: {
    color: 'chocolate',
    fontWeight: 'bold',
    fontSize: 17,
  },
  mensagemValidacao: {
    fontSize: 16,
    color: '#F11010',
    marginBottom: 4,
  },
  footer: {
    padding: 96,
  },
});

export default styles;
