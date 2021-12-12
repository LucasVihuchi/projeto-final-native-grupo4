// sem validação
import React, {useContext, useEffect} from 'react';
import {View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { CredenciaisContext } from '../../context/credenciais';

import api from '../../service/api';
import styles from './styles';

const Login = ({navigation}) => {
  const {credenciais, handleSetCredenciais, credenciaisCarregadas} = useContext(CredenciaisContext);

  useEffect(() => {
    if(credenciaisCarregadas) {
      if((credenciais.login !== null && credenciais.senha !== null) && (credenciais.login !== undefined && credenciais.senha !== undefined)) {
        navigation.navigate('MinhaConta');
      }
    }
  }, [credenciais]);

  async function efetuaLogin(){
    let usuario = await getUsuario();
    if((credenciais.login !== null && credenciais.senha !== null) && (credenciais.login !== undefined && credenciais.senha !== undefined)) {
      Alert.alert("Usuário já logado");
    }

    if(usuario == null) {
      Alert.alert("Credenciais inválidas");
    }
    else {
      let credenciaisTemp = {
        login: formik.values.nomeUsuario,
        senha: formik.values.senha
      }
      handleSetCredenciais(credenciaisTemp);
      await AsyncStorage.setItem('@credenciais', credenciaisTemp);
    }
  }

  async function getUsuario() {
    try {
      const response = await api.get(`api/v1/usuarios`, {
        auth: {
          username: formik.values.nomeUsuario,
          password: formik.values.senha
        }
      });
      return response.data;
    } catch (error) {
      return null;
    }
  }

  const formik = useFormik({
    initialValues: {
      nomeUsuario: '',
      senha: '',
    },
    validationSchema: Yup.object({
      nomeUsuario: Yup.string().required('Nome de usuário obrigatório'),
      senha: Yup.string().min(8, 'Senha deve conter no mínimo 8 caracteres').max(35, 'Senha deve conter no máximo 35 caracteres').required('Senha obrigatória')
    }),
    onSubmit: () => {efetuaLogin()}
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerPerfil}>
        <Image
          source={require('../../assets/img/user.png')}
          style={styles.imagemPerfil}
        />
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.titleFormulario}>Nome de usuário:</Text>
        <TextInput
          style={styles.inputFormulario}
          onChangeText={formik.handleChange('nomeUsuario')}
          onBlur={formik.handleBlur('nomeUsuario')}
          keyboardType={'email-address'}
          value={formik.values.nomeUsuario}          
          placeholder="Digite seu nome de usuário aqui"
        />
        {formik.touched.nomeUsuario && formik.errors.nomeUsuario ? (
          <Text style={styles.mensagemValidacao}>{formik.errors.nomeUsuario}</Text>
        ) : null}

        <Text style={styles.titleFormulario}>Senha:</Text>
        <TextInput
          style={styles.inputFormulario}
          onChangeText={formik.handleChange('senha')}
          onBlur={formik.handleBlur('senha')}
          secureTextEntry={true}
          value={formik.values.senha}  
          placeholder="Digite sua senha"
        />
        {formik.touched.senha && formik.errors.senha ? (
          <Text style={styles.mensagemValidacao}>{formik.errors.senha}</Text>
        ) : null}

        <TouchableOpacity style={styles.buttonEntrar} onPress={formik.handleSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.frase}> Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => {navigation.navigate('CadastroUsuario')}}>
          <Text style={styles.fraseLink}>Clipe para sua conta!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
