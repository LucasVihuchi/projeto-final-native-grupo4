import React, {useState} from 'react';

import {Text, View, TextInput, ScrollView, Alert, Button} from 'react-native';
import {RadioButton, Checkbox} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

import styles from './styles';

const FormularioUsuario = () => {
  const [date, setDate] = useState(new Date());

  function calculaIdadeMinima() {
    let dataIdadeMinima = new Date();
    dataIdadeMinima.setFullYear(dataIdadeMinima.getFullYear() - 18);
    return dataIdadeMinima;
  }

  function calculaIdadeMaxima() {
    let dataIdadeMaxima = new Date();
    dataIdadeMaxima.setFullYear(dataIdadeMaxima.getFullYear() - 120);
    return dataIdadeMaxima;
  }

  const [checked, setChecked] = React.useState(false);
  return (
    <ScrollView style={styles.form}>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>

      <Text style={styles.subtitulo}>
        Nome<Text style={styles.asterisco}> *</Text>
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
        placeholder="Informe o seu telefone principal"
      />

      <Text style={styles.subtitulo}>Telefone secundário</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Informe i seu telefone secundário"
      />

      <Text style={styles.subtitulo}>
        Gênero<Text style={styles.asterisco}> *</Text>
      </Text>
      <View style={styles.genero}>
        <View style={styles.checkitem}>
          <RadioButton
            value="M"
            status={checked === 'M' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('M')}
          />
          <Text style={styles.subtitulo}>Masculino</Text>
        </View>
        <View style={styles.checkitem}>
          <RadioButton
            value="F"
            status={checked === 'F' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('F')}
          />
          <Text style={styles.subtitulo}>Feminino</Text>
        </View>
      </View>

      <Text style={styles.subtitulo}>
        CPF<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Informe seu CPF"
      />

      <Text style={styles.subtitulo}>
        Data de nascimento<Text style={styles.asterisco}> *</Text>
      </Text>

      <DatePicker
        style={[{height: 50}, styles.input]}
        maximumDate={calculaIdadeMinima()}
        minimumDate={calculaIdadeMaxima()}
        date={date}
        mode="date"
        locale="pt_BR"
        modal={false}
      />

      <Text style={styles.subtitulo}>
        e-mail<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="email@address.com"
      />

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

      <View style={styles.checkitem}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          color={'green'}
          uncheckColor={'red'}
        />
        <Text style={styles.termos}>
          Declado que li e aceito os Termos de Uso
        </Text>
      </View>

      <Button
        style={styles.botao}
        color="#01091D"
        title="Cadastrar Usuário"
        onPress={() => Alert.alert('Cadastro efetuado(!/?)')}
      />
      <View style={styles.checkitem}>
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
