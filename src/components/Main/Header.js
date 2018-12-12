import React, {Component} from 'react';
import { 
  Text,
  TextInput, 
  View, 
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import searchProduct from '../../api/searchProduct';

//lấy hình ảnh
let icMenu = require('../../media/appIcon/ic_menu.png');
let icLogo = require('../../media/appIcon/ic_logo.png');

const { height, width } = Dimensions.get('window');

class Header extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      txtSearch: ''
    };
  }

  //hàm xử lý sự kiện search, cập nhật danh sách sản phẩm tìm kiếm trong store redux
  onSearchPro(){
    const { txtSearch } = this.state;
    searchProduct(txtSearch)
    .then(arrProduct => {
      this.props.dispatch({
        type: 'SEARCH',
        result: arrProduct
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    const { header, logo, icon, title, textInput } = styles;

    return (
      <View style={header}>
        
        <View style={logo}>
          <TouchableOpacity onPress = {this.props.onOpen}>
            <Image source={icMenu} style={icon}/>
          </TouchableOpacity>
          <Text style={title}>Wearing A Dress</Text>
          <Image source={icLogo} style={icon}/>
        </View>
        <TextInput 
          style={textInput} 
          placeholder='Search'
          placeholderTextColor='#D7D7D7'
          value={this.state.txtSearch}
          onChangeText={text => this.setState({ txtSearch: text })}
          onFocus={() => {this.props.onSearch ? this.props.onSearch() : null}}
          onSubmitEditing={this.onSearchPro.bind(this)}
        />
      </View>
    );
  }
}

export default connect()(Header);

const styles = StyleSheet.create({
  header: { 
    height: height/8, 
    width, 
    backgroundColor: '#34B089',
    justifyContent: 'space-around',
    padding: 10
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 25,
    height: 25
  },
  title: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'Avenir'
  },
  textInput: {
    height: height/20,
    backgroundColor: '#FFF'
  }
});
