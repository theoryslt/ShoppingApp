import React, {Component} from 'react';
import { 
  Text, 
  View, 
  Dimensions,
  TouchableOpacity,
  Image, 
  StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');
let profileIcon = require('../../media/temp/profile.png');

class Menu extends Component<Props> {
  //hàm xử lý logout
  onClick(){
    this.props.dispatch({
      type: 'LOG_OUT'
    })
  }

  render() {
    const { user } = this.props;
  	const { navigate } = this.props.navigation;
    const { 
      container, 
      profileImg, 
      btnStyleSignOut, btnTextSignOut, 
      btnStyleSignIn, btnTextSignIn } = styles;

    //màn hình chưa đăng nhập
    const logoutView = (
      <View>
        <TouchableOpacity 
          style={ btnStyleSignOut }
          onPress={() => {navigate('AuthenticationScreen')}}
        >
          <Text style={ btnTextSignOut }>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    );

    //màn hình đã đăng nhập
    const loginView = (
      <View style={{ justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
        <Text style={{ fontFamily: 'avenir', fontSize: 18, color:'#fff' }}>{user ? user.name : ''}</Text>
        <View>
          <TouchableOpacity 
            style={ btnStyleSignIn }
            onPress={ () => {navigate('OrderHistoryScreen')} }
          >
            <Text style={ btnTextSignIn }>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={ btnStyleSignIn }
            onPress={ () => {navigate('ChangeInfoScreen', {user: user})} }
          >
            <Text style={ btnTextSignIn }>Change Info</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={ btnStyleSignIn }
            onPress={this.onClick.bind(this)}
          >
            <Text style={ btnTextSignIn }>Sign Out</Text>
          </TouchableOpacity>
        </View>
        <View />
      </View>
    );

    const finalView = user ? loginView : logoutView;

    return (
      <View style={ container }>
        <Image source={profileIcon} style={profileImg}/>
        { finalView }
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Menu);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    alignItems: 'center'
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 30,
  },
  btnStyleSignOut: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 60,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTextSignOut: {
    color: '#34B089',
    fontSize: 20,
    fontFamily: 'avenir'
  },
  btnStyleSignIn: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: 'center'
  },
  btnTextSignIn: {
    color: '#34B089',
    fontSize: 15,
    fontFamily: 'avenir'
  }
})