import React, {Component} from 'react';
import { 
  Text,
  TextInput,
  View, 
  TouchableOpacity, 
  Image, 
  Alert,
  StyleSheet 
} from 'react-native';
import { connect } from 'react-redux';
import register from '../../api/register';

class SignUp extends Component<Props> {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			pass: '',
			email: '',
			repass: ''
		}
	}

	//đăng ký thành công
	onSuccess(){
		Alert.alert(
			'Welcome!',
			'SignUp Successfully!',
			[
			    {text: 'OK', onPress: () => this.props.goToSignIn()}
			]
		);
	}

	//đăng ký thất bại
	onFail(){
		Alert.alert(
			'Failed!',
			'Email has been taken. Please try again!',
			[
			    {text: 'OK', onPress: () => this.setState({ email: '' })}
			]
		);
	}

	//đăng ký người dùng mới
	registerUser(){
		const { username, pass, email } = this.state;
		register(email, username, pass)
		.then(res => {
			if(res === 'THANH_CONG') return this.onSuccess();
			return this.onFail();
		});
	}

	// hàm xử lý đăng ký
	onClick(){
		const { username, pass, email, repass } = this.state;
		if(username !== '' && pass !=='' && email !=='' && repass !=='' && pass === repass){
			this.registerUser();
		}
		else if(pass !== repass){
			Alert.alert(
			    'Failed!',
			    'Pass and Re-Pass are not similar. Please try again!',
			    [
			    	{text: 'OK'},
			    ]
			);
		}
		else{
			Alert.alert(
			    'Failed!',
			    'Please enter your information.',
			    [
			    	{text: 'OK'},
			    ]
			);
		}
	}

	render(){
		const { textInput, bigSignin } = styles;

		return(
			<View>
		        <TextInput 
		          style={ textInput } 
		          placeholder="Enter your username" 
		          placeholderTextColor='#D7D7D7'
		          value={this.state.username}
		          onChangeText={text => this.setState({ username: text })}
		        />
		        <TextInput 
		          style={ textInput } 
		          placeholder="Enter your email" 
		          placeholderTextColor='#D7D7D7'
		          value={this.state.email}
		          onChangeText={text => this.setState({ email: text })}
		        />
		        <TextInput 
		          style={ textInput } 
		          placeholder="Enter your password" 
		          placeholderTextColor='#D7D7D7'
		          secureTextEntry
		          value={this.state.pass}
		          onChangeText={text => this.setState({ pass: text })}
		        />
		        <TextInput 
		          style={ textInput } 
		          placeholder="Re-Enter your password" 
		          placeholderTextColor='#D7D7D7'
		          secureTextEntry
		          value={this.state.repass}
		          onChangeText={text => this.setState({ repass: text })}
		        />
		        <TouchableOpacity 
		        	style={ bigSignin }
		        	onPress={this.onClick.bind(this)}>
		          <Text style={{ color: '#fff', fontWeight: '500', fontSize: 18 }}>SIGN UP NOW</Text>
		        </TouchableOpacity>
		    </View>
		);
	}
}

function mapStateToProps(state){
  return {
    status: state.status,
    username: state.username
  };
}

export default connect()(SignUp);

const styles = StyleSheet.create({
	textInput: {
	    height: 50,
	    backgroundColor: '#fff',
	    paddingLeft: 30,
	    marginBottom: 10,
		borderRadius: 20
	},
	bigSignin: {
	    height: 50,
	    borderRadius: 20,
	    borderWidth: 1,
	    borderColor: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center'
	}
});