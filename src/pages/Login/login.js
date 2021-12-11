// sem validação
import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

const Login = () => {
  const [nomeUsuario, setnomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerPerfil}>
        <Image
          source={require('../../assets/img/user.png')}
          style={styles.imagemPerfil}
        />
        <Text style={styles.title}> Login </Text>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.titleFormulario}>Nome de usuário:</Text>
        <TextInput
          style={styles.inputFormulario}
          value={nomeUsuario}
          onChange={setnomeUsuario}
          placeholder="Digite seu nome de usuário aqui"
        />
        <Text style={styles.titleFormulario}>Senha:</Text>
        <TextInput
          style={styles.inputFormulario}
          value={senha}
          onChange={setSenha}
          placeholder="Digite sua senha"
        />
        <TouchableOpacity style={styles.buttonEntrar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.frase}> Ainda não tem cadastro? </Text>
        <TouchableOpacity >
          <Text style={styles.fraseLink}>Clipe para sua conta!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
