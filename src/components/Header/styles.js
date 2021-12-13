import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Container:{
        backgroundColor: '#F4F4F4',
        position: 'absolute',
        width: '100%',
    },

    ContainerHeader:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#01091D',
        paddingHorizontal: '3%',
        paddingVertical: 16,

    },

    LogoImagem:{
        resizeMode: 'stretch',
        marginHorizontal: 7,
        width: 110,
        height: 35,
    },

    MenuHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    Carrinho:{
        display: 'flex',
        marginHorizontal: 7,    
    },
 
    CarrinhoImagem:{
        alignItems: 'flex-end',
        marginHorizontal: 10,
    },

    TextosHeader:{
        alignItems: 'flex-end',
        zIndex: 5,
    },

    BemVindo:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 10,
    },

    LoginLink:{
        color: '#fff',
        fontSize: 20,
    },

    Pesquisa: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#01091D',
        width: '100%',
        paddingHorizontal: '3%',
        paddingVertical: 4,
    },

    BarraPesquisa:{
        width: '80%',

    },

    inputPesquisa: {
        height: 48,
        borderWidth: 2,
        borderRadius: 7,
        backgroundColor: '#fff'
      },

    LupaImagem:{  
        marginLeft: 18,
        resizeMode: 'stretch',
        tintColor: '#fff',
        width: 32,
        height: 32,
    },

    ContainerSubHeader:{
        position: 'absolute',
        alignItems: 'center',
        marginTop: 129,
        width: '100%',
        backgroundColor: '#01091D',
    },

    MenuCategorias:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#01091D',
        width: '100%',
        paddingHorizontal: '3%',
        paddingVertical: 8,

    },

    TodasCategorias:{
        color: '#fff',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },

 
 

})

export default styles;