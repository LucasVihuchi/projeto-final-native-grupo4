import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  container:{
    paddingHorizontal:15,
    fontFamily:'Montserrat'
    
  },
  containerPerfil: {
    marginTop: 100,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  imagemPerfil: {
    marginTop: 10,
    width: 50,
    height: 50,
  },

  title: {
    fontSize: 50,
    fontWeight: '500',
    fontWeight: "bold",
    color: 'black'
  },
  
  formulario: {
    marginTop: 20,
    justifyContent: 'flex-start',
    
  },
  titleFormulario:{
    marginTop: 10,
    fontSize: 15,
    color: "black",
    fontFamily:'Montserrat'
  },

  inputFormulario: {
    width: '100%',
    height: 40,
    marginTop:10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#D1D1D1',
    fontFamily:'Montserrat'
    
  },
  buttonEntrar: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#01091D',
    borderRadius: 10,
    marginVertical: 15,
    
    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color:'#FFFFFF'
  },
  frase:{
    textAlign: 'center',
    fontSize: 20,
    fontFamily:'Montserrat'
  },
  fraseLink:{
    textAlign: 'center',
    fontSize: 20,
    color: '#BD8A08',
    fontFamily:'Montserrat'
  }
});

export default styles;
