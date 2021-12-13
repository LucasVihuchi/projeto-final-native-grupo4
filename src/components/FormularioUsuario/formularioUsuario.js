import React, { useState, useEffect, useContext } from 'react';

import {
  Text,
  View,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {RadioButton, Checkbox} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import { CredenciaisContext } from "../../context/credenciais";
import api from '../../service/api';

import styles from './styles';

const FormularioUsuario = ({navegacao}) => {
  const { credenciais, credenciaisCarregadas } = useContext(CredenciaisContext);
  const [date, setDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [genero, setGenero] = useState('');
  const [informacoes, setInformacoes] = useState({
    cep: '',
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
  });

  const formik = useFormik({
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
    validationSchema: Yup.object({
      nome: Yup.string()
        .min(4, 'Nome deve conter no mínimo 4 caracteres')
        .max(40, 'Nome deve conter no máximo 40 caracteres')
        .required(
          'Nome não pode ficar em branco. O campo deve ser preenchido!',
        ),
      sobrenome: Yup.string()
        .min(4, 'Sobrenome deve conter no mínimo 4 caracteres')
        .max(40, 'Sobrenome deve conter no máximo 40 caracteres')
        .required(
          'Sobrenome não pode ficar em branco. O campo deve ser preenchido!',
        ),
      telefone1: Yup.string()
        .min(8, 'Telefone principal deve conter no mínimo 8 caracteres')
        .max(13, 'Telefone principal deve conter no máximo 13 caracteres')
        .required(
          'O Telefone Principal não pode ficar em branco. O campo deve ser preenchido!',
        ),
      telefone2: Yup.string()
        .min(8, 'Telefone secundário deve conter no mínimo 8 caracteres')
        .max(13, 'Telefone secundário deve conter no máximo 13 caracteres'),
      cpf: Yup.string()
        .min(11, 'CPF inválido')
        .max(11, 'CPF inválido')
        .required('CPF não pode ficar em branco. O campo deve ser preenchido!'),
      email: Yup.string()
        .email('Campo deve conter um email!')
        .required(
          'Email não pode ficar em branco. O campo deve ser preenchido!',
        ),
      nomeUsuario: Yup.string().required(
        'Nome de usuário não pode ficar em branco. O campo deve ser preenchido!',
      ),
      senha: Yup.string()
        .min(8, 'Senha deve conter no mínimo 8 caracteres')
        .max(35, 'Senha deve conter no máximo 35 caracteres')
        .required(
          'Senha não pode ficar em branco. O campo deve ser preenchido!',
        ),
      cep: Yup.string()
        .min(8, 'CEP inválido')
        .max(8, 'CEP inválido')
        .required('CEP não pode ficar em branco. O campo deve ser preenchido!'),
      rua: Yup.string().required(
        'Rua não pode ficar em branco. O campo deve ser preenchido!',
      ),
      bairro: Yup.string().required(
        'Bairro não pode ficar em branco. O campo deve ser preenchido!',
      ),
      numero: Yup.number()
        .min(0, 'Número não pode ser negativo')
        .required(
          'Número não pode ficar em branco. O campo deve ser preenchido!',
        ),
      complemento: Yup.string(),
      cidade: Yup.string().required(
        'Cidade não pode ficar em branco. O campo deve ser preenchido!',
      ),
      estado: Yup.string().required(
        'Estado não pode ficar em branco. O campo deve ser preenchido!',
      ),
    }),
    onSubmit: () => {
      if (checked) {
        cadastrarUsuario();
      }
      else {
        Alert.alert('Você deve concordar com os termos');
      }
    }
  });

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

  async function getInformacoes() {
    if(formik.values.cep === undefined || formik.values.cep.length !== 8) {
      return;
    }
    try {
      const response = await api.get("http://viacep.com.br/ws/" + formik.values.cep + "/json/")
      if(response?.data?.erro) {
        Alert.alert("CEP não encontrado");
      }
      setInformacoes(response.data);
      return(response.data)
    }
    catch (e) {
      Alert.alert("Erro ao se comunicar com o viaCep");
    }
  }

  async function preencherViaCep() {
    let informacoesTemp = await getInformacoes();
    
    formik.values.rua = (informacoesTemp?.logradouro ?? '');
    formik.values.cidade = (informacoesTemp?.localidade ?? '');
    formik.values.estado = (informacoesTemp?.uf ?? '');
    formik.values.bairro = (informacoesTemp?.bairro ?? '');
  }

  useEffect(() => {
    if(formik.values.cep.length === 8) {
    preencherViaCep();
    }
  }, [formik.values.cep]);

  useEffect(() => {
    if (credenciaisCarregadas) {
      if (
        credenciais.login !== null &&
        credenciais.senha !== null &&
        credenciais.login !== undefined &&
        credenciais.senha !== undefined
      ) {
        navigation.navigate('MinhaConta');
      }
    }
  }, [credenciaisCarregadas]);

  function cadastrarUsuario() {
    const usuario = {
      nome: formik.values.nome,
      sobrenome: formik.values.sobrenome,
      telefonePrincipal: formik.values.telefone1,
      telefoneSecundario: formik.values.telefone2 == "" ? null : formik.values.telefone2,
      sexo: genero,
      cpf: formik.values.cpf,
      dataNascimento: date.toISOString().split('T')[0],
      email: formik.values.email,
      nomeUsuario: formik.values.nomeUsuario,
      senhaUsuario: formik.values.senha,
      endereco: {
        cep: formik.values.cep,
        logradouro: formik.values.rua === "" ? null : formik.values.rua,
        bairro: formik.values.bairro === "" ? null : formik.values.bairro,
        numero: formik.values.numero === "" ? null : +formik.values.numero,
        complemento: formik.values.complemento === "" ? null : formik.values.complemento,
        cidade: formik.values.cidade === "" ? null : formik.values.cidade,
        estado: formik.values.estado === "" ? null : formik.values.estado,
      },
    };
    
    api
      .post(`api/v1/usuarios`, usuario, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          Alert.alert('Cadastro', 'Usuário cadastrado com sucesso', [
            {text: 'Ok', onPress: () => navegacao.navigate('Home')},
          ]);
        }
      })
      .catch((error) => {
        if (error?.response?.data.titulo === "Usuario já existe no sistema") {
          Alert.alert("Usuário já possui cadastro!");
        }
        else {
          Alert.alert(error?.response?.data.listaErros[0]);
        }
      });
  }

  return (
    <ScrollView style={styles.form}>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>
      <Text style={styles.subtitulo}>
        Nome<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('nome')}
        onBlur={formik.handleBlur('nome')}
        value={formik.values.nome}
        placeholder="Informe o seu nome"
      />
      {formik.touched.nome && formik.errors.nome ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.nome}</Text>
      ) : null}
      <Text style={styles.subtitulo}>
        Sobrenome<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('sobrenome')}
        onBlur={formik.handleBlur('sobrenome')}
        value={formik.values.sobrenome}
        placeholder="Informe o Sobrenome"
      />
      {formik.touched.sobrenome && formik.errors.sobrenome ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.sobrenome}</Text>
      ) : null}
      <Text style={styles.subtitulo}>
        Telefone principal<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('telefone1')}
        onBlur={formik.handleBlur('telefone1')}
        value={formik.values.telefone1}
        keyboardType="numeric"
        placeholder="Informe o seu telefone principal"
      />
      {formik.touched.telefone1 && formik.errors.telefone1 ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.telefone1}</Text>
      ) : null}
      <Text style={styles.subtitulo}>Telefone secundário</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('telefone2')}
        onBlur={formik.handleBlur('telefone2')}
        value={formik.values.telefone2}
        keyboardType="numeric"
        placeholder="Informe o seu telefone secundário (opcional)"
      />
      {formik.touched.telefone2 && formik.errors.telefone2 ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.telefone2}</Text>
      ) : null}
      <Text style={styles.subtitulo}>
        Gênero<Text style={styles.asterisco}> *</Text>
      </Text>
      <View style={styles.genero}>
        <View style={styles.checkitem}>
          <RadioButton
            value="M"
            status={genero === 'M' ? 'checked' : 'unchecked'}
            onPress={() => setGenero('M')}
          />
          <Text style={styles.genero}>Masculino</Text>
        </View>
        <View style={styles.checkitem}>
          <RadioButton
            value="F"
            status={genero === 'F' ? 'checked' : 'unchecked'}
            onPress={() => setGenero('F')}
          />
          <Text style={styles.genero}>Feminino</Text>
        </View>
      </View>
      <Text style={styles.subtitulo}>
        CPF<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('cpf')}
        onBlur={formik.handleBlur('cpf')}
        value={formik.values.cpf}
        keyboardType="numeric"
        placeholder="Informe o seu CPF"
      />
      {formik.touched.cpf && formik.errors.cpf ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.cpf}</Text>
      ) : null}
      <Text style={styles.subtitulo}>
        Data de nascimento<Text style={styles.asterisco}> *</Text>
      </Text>
      <DatePicker
        style={[{height: 50}, styles.inputData]}
        maximumDate={calculaIdadeMinima()}
        minimumDate={calculaIdadeMaxima()}
        date={date}
        onDateChange={setDate}
        mode="date"
        locale="pt_BR"
        modal={false}
      />
      <Text style={styles.subtitulo}>
        E-mail<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        value={formik.values.email}
        keyboardType="email-address"
        placeholder="email@address.com"
      />
      {formik.touched.email && formik.errors.email ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.email}</Text>
      ) : null}
      <Text style={styles.subtitulo}>
        Nome de usuário<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('nomeUsuario')}
        onBlur={formik.handleBlur('nomeUsuario')}
        value={formik.values.nomeUsuario}
        placeholder="Informe um nome de usuário"
      />
      {formik.touched.nomeUsuario && formik.errors.nomeUsuario ? (
        <Text style={styles.mensagemValidacao}>
          {formik.errors.nomeUsuario}
        </Text>
      ) : null}
      <Text style={styles.subtitulo}>
        Senha<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('senha')}
        onBlur={formik.handleBlur('senha')}
        secureTextEntry={true}
        value={formik.values.senha}
        placeholder="Informe uma senha com no mínimo 8 caracteres"
      />
      {formik.touched.senha && formik.errors.senha ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.senha}</Text>
      ) : null}
      <Text style={styles.subtitulo}>
        CEP<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('cep')}
        onBlur={formik.handleBlur('cep')}
        value={formik.values.cep}
        keyboardType="numeric"
        placeholder="Informe o seu CEP"
      />
      {formik.touched.cep && formik.errors.cep ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.cep}</Text>
      ) : null}
      <Text style={styles.subtitulo}>
        Rua<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('rua')}
        onBlur={formik.handleBlur('rua')}
        value={formik.values.rua}
        placeholder="Informe"
      />
      {formik.touched.rua && formik.errors.rua ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.rua}</Text>
      ) : null}
      <Text style={styles.subtitulo}>
        Bairro<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('bairro')}
        onBlur={formik.handleBlur('bairro')}
        value={formik.values.bairro}
        placeholder="Informe o nome da sua rua"
      />
      {formik.touched.bairro && formik.errors.bairro ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.bairro}</Text>
      ) : null}
      <Text style={styles.subtitulo}>
        Número<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('numero')}
        onBlur={formik.handleBlur('numero')}
        value={formik.values.numero}
        keyboardType="numeric"
        placeholder="Informe o número da residência"
      />
      {formik.touched.numero && formik.errors.numero ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.numero}</Text>
      ) : null}
      <Text style={styles.subtitulo}>Complemento</Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('complemento')}
        onBlur={formik.handleBlur('complemento')}
        value={formik.values.complemento}
        placeholder="Informe o complemento (opcional)"
      />
      {formik.touched.complemento && formik.errors.complemento ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.complemento}</Text>
      ) : null}
      <Text style={styles.subtitulo}>
        Cidade<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('cidade')}
        onBlur={formik.handleBlur('cidade')}
        value={formik.values.cidade}
        placeholder="Informe a sua cidade"
      />
      {formik.touched.cidade && formik.errors.cidade ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.cidade}</Text>
      ) : null}
      <Text style={styles.subtitulo}>
        Estado<Text style={styles.asterisco}> *</Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={formik.handleChange('estado')}
        onBlur={formik.handleBlur('estado')}
        value={formik.values.estado}
        placeholder="Informe o seu Estado"
      />
      {formik.touched.estado && formik.errors.estado ? (
        <Text style={styles.mensagemValidacao}>{formik.errors.estado}</Text>
      ) : null}

      <View style={styles.checkitem}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.termos}>
          Declado que li e aceito os Termos de Uso
        </Text>
      </View>
      <TouchableOpacity style={styles.botao} onPress={formik.handleSubmit}>
        <Text style={styles.textobotao}>Cadastrar Usuário</Text>
      </TouchableOpacity>

      <View style={styles.termos}>
        <Text style={styles.infoLogin}>Já tem cadastro?</Text>
        <TouchableOpacity
          onPress={() =>
            navegacao.navigate('Login')
          }>
          <Text style={styles.entrarCadastro}> Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </ScrollView>
  );
};

export default FormularioUsuario;
