import React, {Component} from 'react';
import { 
  Text,
  TextInput,
  View, 
  TouchableOpacity, 
  Image, 
  StyleSheet 
} from 'react-native';

import SignIn from './SignIn';
import SignUp from './SignUp';

let icBack = require('../../media/appIcon/back_white.png');
let icLogo = require('../../media/appIcon/ic_logo.png');

export default class Authentication extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      isSignIn: true
    }
  }

  //set state isSignIn 
  setSignIn(){
    this.setState({ isSignIn: true });
  }

  //hàm quay lại trang chủ
  onOpen(){
    this.props.navigation.goBack();
  }

  //hàm chuyển hướng
  openChange(){
    this.props.navigation.navigate('ChangeInfoScreen');
  }

  render() {
    const { isSignIn } = this.state;
 
    const { 
      container, logo, 
      icon, title, controller,
      signIn, signUp,
      activeStyle, inactiveStyle } = styles;

    const mainView = isSignIn ? <SignIn onOpen={this.onOpen.bind(this)}/> : <SignUp goToSignIn={this.setSignIn.bind(this)}/>;

    return (
      <View style={ container }>
        <View style={logo}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={ icBack } style={icon}/>
          </TouchableOpacity>
          <Text style={title}>Wearing A Dress</Text>
          <Image source={icLogo} style={icon}/>
        </View>
        { mainView }
        <View style={ controller }>
          <TouchableOpacity 
            style={ signIn } 
            onPress={() => {this.setState({ isSignIn: true })}}>
            <Text style={ isSignIn ? activeStyle : inactiveStyle }>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={ signUp }
            onPress={() => {this.setState({ isSignIn: false })}}>
            <Text style={ !isSignIn ? activeStyle : inactiveStyle }>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34B089', 
    flex: 1,
    padding: 20,
    justifyContent: 'space-between'
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    width: 30,
    height: 30
  },
  title: {
    fontSize: 30,
    color: '#FFF',
    fontFamily: 'Avenir'
  },
  controller: {
    flexDirection: 'row',
    width: 300,
    alignItems: 'center'
  },
  activeStyle:{
    color: '#34B089'
  },
  inactiveStyle: {
    color: '#D7D7D7'
  },
  signIn: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderRightWidth: 1,
    borderRightColor: '#34B089',
    marginLeft: 15
  },
  signUp: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  }
});