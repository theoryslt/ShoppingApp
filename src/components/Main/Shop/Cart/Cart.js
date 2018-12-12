import React, {Component} from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  Alert,
  StyleSheet 
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../Header';
import CartView from './CartView';

const { width, height } = Dimensions.get('window');
let empIcon = require('../../../../media/appIcon/empty.jpg');

class Cart extends Component<Props> {
  //hàm mở menu
	openMenu(){
    this.props.navigation.toggleDrawer();
  }

  //hàm mở trang tìn kiếm
  openSearch(){
    this.props.navigation.navigate('Search');
  }

  //hàm mở trang chi tiết
  openDetail(product){
    this.props.navigation.navigate('DetailScreen', {product: product});
  }

  //hàm xử lý checkout
  alert_func(){
    Alert.alert(
      'Confirm',
      'Do you want to send this order?',
      [
        {text: 'Cancel'},
        {text: 'OK'},
      ],
      { cancelable: true }
    );
  }

  //hàm lấy carts từ state redux
  getCart(){
    const { carts } = this.props;
    return carts;
  }

	render() {
    const { carts } = this.props;
  	const { navigate } = this.props.navigation;
    const { 
      checkoutBtn, checkoutTitle, 
      emptyStyle, iconStyle, txtStyle 
    } = styles;

    const cartArr = carts.map(e => e.quantity * e.price);
    const total = cartArr.length ? cartArr.reduce((a, b) => a + b) : 0;

    //nút checkout
    const btn = (
      <TouchableOpacity 
        style={ checkoutBtn }
        onPress={this.alert_func.bind(this)}>
        <Text style={ checkoutTitle }>Total {total}$ CHECKOUT NOW</Text>
      </TouchableOpacity>
    );

    //màn hình khi cart trống
    const emptyView = (
      <View style={ emptyStyle }>
        <Image source={empIcon} style={ iconStyle }/>
        <Text style={txtStyle}>Your cart is empty!</Text>
        <TouchableOpacity 
          onPress={() => {navigate('Home')}}
        >
          <Text style={txtStyle}>Click Here To Start Shopping</Text>
        </TouchableOpacity>
      </View>
    );

    //màn hình khi cart có sản phẩm
    const cartView = (
      <FlatList 
        data = {this.getCart()}
        renderItem = {( {item} ) => <CartView item={item} onOpen={this.openDetail.bind(this)}/>}
        keyExtractor = {item => item.id}
      />
    );

    //màn hình chính
    const mainView = (carts.length > 0) ? cartView : emptyView;
    //nút checkout
    const btnView = (carts.length > 0) ? btn : null;

    return (
      	<View style={{ flex: 1 }}>
      		<Header onOpen={this.openMenu.bind(this)} onSearch={this.openSearch.bind(this)}/>
          {mainView}
          {btnView}
      	</View>
    );
  }
}

function mapStateToProps(state){
  return {
    carts: state.carts
  };
}

export default connect(mapStateToProps)(Cart);

const styles = StyleSheet.create({
  checkoutBtn: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: '#2ABB9C',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  },
  emptyStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
    width: 100,
    height: 100
  },
  txtStyle: {
    color: '#77CBB9',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold'
  }
})