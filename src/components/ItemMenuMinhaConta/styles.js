import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    containerItemMenu: {
        backgroundColor: '#D1D1D1',
        height: 64,
        width: 64,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7
    },
    containerItemMenuAtivo: {
        backgroundColor: '#121B2E',
        height: 64,
        width: 64,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagemItemMenu: {
        height: 24,
        width: 24
    },
    imagemItemMenuAtivo: {
        height: 24,
        width: 24,
        tintColor: '#eee'
    }
})

export default styles;