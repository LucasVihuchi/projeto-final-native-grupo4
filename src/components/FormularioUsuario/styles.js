import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titulo: {
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 40,
    backgroundColor: '#F4F4F4',
  },
  subtitulo: {
    fontSize: 22,
    color: '#000',
    fontFamily: 'Montserrat',
    fontWeight: '600',
    textAlign: 'justify',
    marginTop: 11,
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
    fontSize: 15,
    color: '#F11010',
    marginBottom: 3,
  },
  footer: {
    padding: 40,
  },
});

export default styles;
