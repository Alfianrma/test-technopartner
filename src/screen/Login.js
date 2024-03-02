import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import LoginAPI from '../apiService/LoginAPI';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginErrorToast = () => {
    ToastAndroid.show('LoginError', ToastAndroid.SHORT);
  };

  const login = async () => {
    const data = {
      grant_type: 'password',
      client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
      client_id: 'e78869f77986684a',
      username: username.toString,
      password: password.toString,
    };

    const response = await LoginAPI.Login(data);
    console.log('datalogin', response);
    if (response != null) {
      navigation.navigate('Main');
      addLoggedUser(res);
    } else {
      loginErrorToast();
    }
  };

  const addLoggedUser = res => {
    dispatch({
      type: 'SET_TOKEN',
      data: res.access_token,
    });
  };

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        keyboardVerticalOffset={-500}>
        <Image
          style={{width: 300, height: 100, marginBottom: 20}}
          source={require('../assets/logo_technopartner.png')}
        />
        <Text style={styles.title}>Email</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChange={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.btn} onPress={() => login()}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 100,
  },
  title: {
    fontSize: 15,
    color: 'grey',
    marginBottom: 7,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    alignSelf: 'center',
    height: 35,
    borderRadius: 5,
    marginBottom: 12,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
  },
  btn: {
    backgroundColor: 'white',
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 10,
  },
  btnText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
