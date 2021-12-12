import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    containerCompras: {
        paddingHorizontal: '5%',
        marginTop: 32
    },
    tituloCompras: {
        fontSize: 26,
        fontWeight: '700',
        color: '#121B2E',
        marginBottom: 16
    },
    cabecalhoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cabecalhoTabela: {
        fontSize: 20,
        fontWeight: '600',
    },
    cabecalhoPedido: {
        flexBasis: "20%"
    },
    cabecalhoData: {
        flexBasis: "50%",
        textAlign: 'center'
    },
    cabecalhoValor: {
        flexBasis: "30%",
        textAlign: 'right'
    },
    infoContainer: {
        marginVertical: 16,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 8,
        backgroundColor: '#E7E7E7',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoPedido: {
        fontSize: 18,
        fontWeight: '500',
        flexBasis: "20%"
    },
    infoData: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: "center",
        flexBasis: "50%"
    },
    infoValor: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'right',
        flexBasis: "30%"
    },
    linha: {
        marginHorizontal: 16,
        borderBottomColor: '#D1D1D1',
        borderBottomWidth: 1
    }
})

export default styles;