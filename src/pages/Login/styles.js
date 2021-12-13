import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  container:{
    paddingHorizontal: "5%",
    fontFamily:'Montserrat'
    
  },
  containerPerfil: {
    marginTop: 168,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },

  imagemPerfil: {
    width: 42,
    height: 42,
  },

  title: {
    marginLeft: 16,
    fontSize: 48,
    fontWeight: '700',
    color: 'black'
  },
  
  formulario: {
    marginVertical: 26,
    justifyContent: 'flex-start',
    
  },
  titleFormulario:{
    fontSize: 24,
    color: "#000",
    fontWeight: '400',
    fontFamily:'Montserrat',
    marginTop: 10
  },

  inputFormulario: {
    width: '100%',
    fontSize: 24,
    marginTop: 8,
    marginBottom: 4,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#D1D1D1',
    fontFamily:'Montserrat'
  },
  buttonEntrar: {
    width: '100%',
    backgroundColor: '#01091D',
    justifyContent: 'center',
    paddingVertical: 6, 
    borderRadius: 10,
    marginVertical: 26,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    color:'#FFFFFF'
  },
  frase:{
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 4,
    fontSize: 24,
    fontFamily:'Montserrat'
  },
  fraseLink:{
    textAlign: 'center',
    fontSize: 24,
    color: '#EBCB26',
    fontFamily:'Montserrat'
  },
  mensagemValidacao: {
    fontSize: 18,
    color: '#F11010'
  }
});

export default styles;
