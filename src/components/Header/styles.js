import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Container:{
        backgroundColor: '#01091D',
        position: 'absolute',
        width: '100%',
        paddingVertical: 14,
        zIndex: 10
    },

    ContainerHeader:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        paddingBottom: 16

    },

    LogoImagem:{
        resizeMode: 'stretch',
        width: 150,
        height: 50,
    },

    MenuHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    Carrinho:{
        paddingHorizontal: 18,   
    },
 
    CarrinhoImagem:{
        height: 32,
        width: 32,
    },

    TextosHeader:{
        
    },

    BemVindo:{
        color: '#fff',
        fontSize: 13,
        fontWeight: '700'
    },

    LoginLink:{
        color: '#fff',
        fontSize: 22,
        lineHeight: 26
    },

    Pesquisa: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#01091D',
        width: '100%',
        paddingHorizontal: '5%',
        paddingTop: 12
    },

    BarraPesquisa:{
        width: '80%',
    },

    inputPesquisa: {
        fontSize: 16,
        fontWeight: '700',
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 4,
        backgroundColor: '#fff'
      },

    LupaImagem:{  
        marginLeft: 18,
        resizeMode: 'stretch',
        tintColor: '#fff',
        width: 24,
        height: 24,
    },

    ContainerSubHeader:{
        alignItems: 'center',
        // marginTop: 129,
        width: '100%',
        backgroundColor: '#01091D',
    },

    MenuCategorias:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#01091D',
        width: '100%',
        paddingHorizontal: '5%',
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