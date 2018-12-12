import React, {Component} from 'react';
import { 
  Text, 
  View,
  Image, 
  TouchableOpacity,
  TextInput,
  Alert, 
  StyleSheet 
} from 'react-native';
import { connect } from 'react-redux';
import changeInfo from '../../api/changeInfo';

let icBack = require('../../media/appIcon/back_white.png');

class ChangeInfo extends Component<Props> {
  constructor(props){
    super(props);
    const user = props.navigation.getParam('user', null);
    const { email, name, address, phone } = user;
    this.state = {
      txtEmail: email,
      txtName: name,
      txtAddress: address,
      txtPhone: phone
    }
  }

  //thay đổi thành công
  onSuccess(res){
    //thay đổi user trong store
    this.props.dispatch({
      type: 'LOG_IN',
      user: res.user
    });
    //thông báo 
    Alert.alert(
      'Successfully!',
      'Your information is updated.',
      [
          {text: 'OK', onPress: () => this.props.navigation.goBack()}
      ]
    );
  }

  // xử lý thay đổi
  change(){
    const { txtEmail, txtName, txtAddress, txtPhone } = this.state;
    changeInfo(txtEmail, txtName, txtAddress, txtPhone)
    .then(res => this.onSuccess(res))
    .catch(err => {
      Alert.alert(
          'Failed!',
          'Your information is not updated.',
          [
            {text: 'OK'},
          ]
      );
    });
  }

  render() {
    const { container, header, icon, title, body, textInput, btn } = styles;
    const user = this.props.navigation.getParam('user', null);
    const { txtName, txtAddress, txtPhone } = this.state;

    return (
      <View style={ container }>

        <View style={header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={ icBack } style={icon}/>
          </TouchableOpacity>
          <Text style={title}>User Information</Text>
          <View style={{ marginRight: 10 }}/>
        </View>
        <View style={ body }>
          <TextInput 
            style={ textInput } 
            placeholder="Enter your name" 
            placeholderTextColor='#D7D7D7'
            value={txtName}
            onChangeText={ text => this.setState({ ...this.state, txtName: text })}
          />
          <TextInput 
            style={ textInput } 
            placeholder="Enter your address" 
            placeholderTextColor='#D7D7D7'
            value={txtAddress}
            onChangeText={ text => this.setState({ ...this.state, txtAddress: text })}
          />
          <TextInput 
            style={ textInput } 
            placeholder="Enter your phone number" 
            placeholderTextColor='#D7D7D7'
            value={txtPhone}
            onChangeText={ text => this.setState({ ...this.state, txtPhone: text })}
          />
          <TouchableOpacity style={ btn }>
            <Text 
              style={{ color: '#fff', fontWeight: '500', fontSize: 18 }}
              onPress={this.change.bind(this)}
            >
              CHANGE YOUR INFORMATION
            </Text>
          </TouchableOpacity>
        </View>
        <View />
      </View>
    );
  }
}

export default connect()(ChangeInfo);

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    backgroundColor: '#34B089',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 5
  },
  title: {
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'Avenir'
  },
  body: {
    flex: 10, 
    backgroundColor: '#F6F6F6', 
    justifyContent: 'center'
  },
  textInput: {
    height: 50,
    backgroundColor: '#fff',
    paddingLeft: 30,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#34B089'
  },
  btn: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#34B089',
    backgroundColor: '#34B089',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20
  }
});