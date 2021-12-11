import React from 'react';

import {Text, View, TextInput, ScrollView, Button, Alert} from 'react-native';

import styles from './styles';

const FormularioUsuario = () => {
  /*  const formik = useFormik({
    initialValues: {
      nome: '',
      sobrenome: '',
      telefone1: '',
      telefone2: '',
      cpf: '',
      dataNascimento: '',
      email: '',
      nomeUsuario: '',
      senha: '',
      cep: '',
      rua: '',
      bairro: '',
      numero: '',
      complemento: '',
      cidade: '',
      estado: '',
    },
  }); */

  return (
    <ScrollView style={styles.form}>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>

      <Text style={styles.subtitulo}>
        Nome <Text style={styles.asterisco}> *</Text>
      </Text>

      <TextInput style={styles.input} placeholder="Informe o Nome" />

      <Text style={styles.subtitulo}>
        Sobrenome<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Informe o Sobrenome" />

      <Text style={styles.subtitulo}>
        Telefone principal<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Informe"
      />

      <Text style={styles.subtitulo}>Telefone secundário</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Informe"
      />

      <Text style={styles.subtitulo}>
        Genero<Text style={styles.asterisco}> *</Text>
      </Text>
      <View>
        {/*        <RadioButton.Group
          onValueChange={formik.handleChange('genero')}
          value={formik.values.genero}>
          <View>
            <Text>Masculino</Text>
            <RadioButton value="M"></RadioButton>
          </View>
          <View>
            <Text>Feminino</Text>
            <RadioButton value="F"></RadioButton>
          </View>
        </RadioButton.Group> */}
      </View>

      <Text style={styles.subtitulo}>
        CPF<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Informe"
      />

      <Text style={styles.subtitulo}>
        Data de nascimento<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Informe" />

      <Text style={styles.subtitulo}>
        e-mail<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Informe" />

      <Text style={styles.subtitulo}>
        Nome de usuário<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Informe" />

      <Text style={styles.subtitulo}>
        Senha<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Informe" />

      <Text style={styles.subtitulo}>
        CEP<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Informe"
      />

      <Text style={styles.subtitulo}>
        Rua<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Informe" />

      <Text style={styles.subtitulo}>
        Bairro<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Informe" />

      <Text style={styles.subtitulo}>
        Número<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Informe"
      />

      <Text style={styles.subtitulo}>Complemento</Text>
      <TextInput style={styles.input} placeholder="Informe" />

      <Text style={styles.subtitulo}>
        Cidade<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Informe" />

      <Text style={styles.subtitulo}>
        Estado<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput style={styles.input} placeholder="Informe" />

      <View>
        <Text style={styles.subtitulo}>
          Declado que li e aceito os Termos de Uso
        </Text>
      </View>

      <Button
        style={styles.botao}
        color="#01091D"
        title="Cadastrar Usuário"
        onPress={() => Alert.alert('Cadastro efetuado(!/?)')}
      />
      <View style={styles.temCadastro}>
        <Text>Já tem cadastro?</Text>
        <Text style={styles.entrarCadastro}> Entrar</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </ScrollView>
  );
};
export default FormularioUsuario;
