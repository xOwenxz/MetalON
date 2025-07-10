import { useState } from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//const [nome, setNome] = useState('');
//const [telefone, setTelefone] = useState('');

const Login = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Bem vinda(o)</Text>
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>nome</Text>
        <TextInput
          placeholder="Digite o seu nome"
          style={styles.input} /*onChangeText={text=>setNome(text)}*/
        />
        <Text style={styles.title}>telefone</Text>
        <TextInput
          placeholder="Digite o seu telefone"
          style={styles.input} /*onChangeText={text=>setTelefone(text)}*/
        />
      </View>
      <TouchableOpacity
        onPress={() => route.params.funcLogar(true)}
        title="Logar"
        style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Registrar')}
        title="Registrar"
        style={styles.button}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38a69d',
  },
  containerHeader: {
    marginTop: '4%',
    marginBottom: '8%',
    paddingStart: '5%',
    padding: 20,
    
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  containerForm: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingBottom: 50,
  },
  title: {
    fontSize: 20,
    marginTop: 15,
  },
  input: {
    borderBottomWidth: 1,
    width: '90%',
    marginBottom: 2,
    borderTopEndRadius: 10,
    fontSize: 16,
    backgroundColor: '#38a69d',
    borderRadius: 40,
    paddingVertical: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 40,
    paddingVertical: 10,
    marginTop: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#38a69d',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;