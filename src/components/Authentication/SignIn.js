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
import signIn from '../../api/signIn';

class SignIn extends Component<Props> {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			pass: ''
		}
	}

	// đăng nhập thành công
	onSuccess(res){
		//thông báo
		Alert.alert(
			'Welcome!',
			'Login success!',
			[
			    {text: 'OK'}
			]
		);
		//set user trong store
		this.props.dispatch({
			type: 'LOG_IN',
			user: res.user
		});
		//quay lại Home
		this.props.onOpen();
	}

	//đăng nhập
	onSignIn(){
		const { email, pass } = this.state;
		if( email === '' || pass === '' ){
			Alert.alert(
			    'Notice!',
			    'Please input information.',
			    [
			    	{text: 'OK'}
			    ]
			);
		}
		else {
			signIn(email, pass)
			.then(res => this.onSuccess(res))
			.catch(err => {
				Alert.alert(
			    	'Failed!',
			    	'Wrong username or password.',
			    	[
			    		{text: 'OK'}
			    	]
				);
			});
		}
	}

	render(){
		const { textInput, bigSignin } = styles;

		return(
			<View>
        		<TextInput 
		          style={ textInput } 
		          placeholder="Enter your email" 
		          placeholderTextColor='#D7D7D7'
		          value={this.state.username}
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
		        <TouchableOpacity 
		          style={ bigSignin }
		          onPress={ 
		          	this.onSignIn.bind(this)}>
		          <Text style={{ color: '#fff', fontWeight: '500', fontSize: 18 }}>SIGN IN NOW</Text>
		        </TouchableOpacity>
		    </View>
		);
	}
}

export default connect()(SignIn);

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