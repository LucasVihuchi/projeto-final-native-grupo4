import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ContainerSubHeader: {
    position: 'absolute',
    alignItems: 'center',
    marginTop: 144,
    width: '100%',
    backgroundColor: '#01091D',
  },

  MenuCategorias: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#01091D',
    width: '100%',
    paddingHorizontal: '5%',
    paddingVertical: 17,
  },

  CategoriasIcone: {
    height: 24,
    width: 24,
    tintColor: '#fff',
    marginRight: 8,
  },

  TodasCategorias: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600'
  },
  ItemCategoria: {
    elevation: 6
  },
  ItemCategoriaTexto: {
      color: '#fff',
      fontSize: 16,
      paddingVertical: 4
  }
});

export default styles;
