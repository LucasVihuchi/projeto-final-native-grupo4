import {Appbar, DefaultTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';

/* Estilização das bolinhas do Checkbox, para sairem do padrão de cor ciano */
/* O theme é chamando no App.js */

const theme = StyleSheet.create({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    accent: '#121B2E',
  },
});
export default theme;
