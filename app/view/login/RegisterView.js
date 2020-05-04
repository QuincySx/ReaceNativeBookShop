import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import AppStackManager from '../../navigate/AppStackManager';
import {toastShort} from '../../util/ToastUtil';
import {isEmpity} from '../../util/StringUtil';

export default class RegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      pwd: '',
    };
  }
  registerAccount() {
    AppStackManager.goRegisterAccount(this.props.navigation);
  }
  loginAccount = () => {
    if (isEmpity(this.state.userName)) {
      toastShort('请输入用户名');
      return;
    }
    if (isEmpity(this.state.pwd)) {
      toastShort('请输入密码');
      return;
    }
    toastShort('注册成功');
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginHead}>
          <Text>你好</Text>
          <Text>欢迎来到注册界面</Text>
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.inputText}
            placeholder="请输入账号"
            onChangeText={text => {
              this.setState({
                userName: text,
              });
            }}
          />
          <TextInput
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="请输入密码"
            onChangeText={text => {
              this.setState({
                pwd: text,
              });
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonViewGourp}
          onPress={() => this.loginAccount()}>
          <Text style={styles.buttonLogin}>立即注册</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputGroup: {},
  loginHead: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 60,
  },
  inputText: {
    backgroundColor: '#cccccc',
    width: 280,
    marginBottom: 10,
    paddingLeft: 10,
    paddingEnd: 10,
    paddingTop: 0,
    paddingBottom: 0,
    height: 35,
    borderRadius: 6,
  },
  buttonViewGourp: {
    marginTop: 80,
    width: 120,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#1AAD19',
  },
  buttonLogin: {color: '#ffffff'},
});
