import React, {Component} from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Alert, 
  StyleSheet } from 'react-native';
import Header from'../../Header';
import { connect } from 'react-redux';

let backIcon = require('../../../../media/appIcon/backList.png');
let cartIcon = require('../../../../media/appIcon/cartfull.png');
const url = 'http://192.168.1.32:8080/ShoppingApp/images/product/';
const { width, height } = Dimensions.get('window');

class ProductDetail extends Component<Props> {
  //hàm mở menu
  openMenu(){
      this.props.navigation.toggleDrawer();
  }

  //hàm mở trang tìn kiếm
  openSearch(){
    this.props.navigation.navigate('SearchScreen');
  }

  //hàm xử lý sự kiện thêm sản phẩm vào giỏ
  onClick(product){
    const { user, carts } = this.props;
    //kiểm tra người dùng đã đăng nhập hay chưa
    if(user){
      //kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
      const isExist = carts.some(e => e.id === product.id);
      //nếu có thì hiển thị thông báo
      if(isExist) {
        Alert.alert(
          'Notice!',
          'Product already in cart.',
          [
            {text: 'OK'}
          ]
        );
      }
      //nếu ko có thì thêm sp vào giỏ
      else{
        Alert.alert(
          'Success!!!',
          'Product added to cart',
          [
            {text: 'OK'}
          ]
        );
        //thêm sản phẩm vào carts trong store redux
        this.props.dispatch({
          type: 'ADD_CART',
          id: product.id,
          name: product.name,
          price: product.price,
          images: product.images,
          color: product.color,
          description: product.description,
          material: product.material
        });
      } 
    }
    //nếu chưa đăng nhập sẽ hiển thị thông báo yêu cầu đăng nhập
    else{
      Alert.alert(
        'Warning',
        'You have to log in.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    }
  }

  render() {
    const { 
      container, 
      wrapper, header, 
      descriptionStyle, imageContent, imageStyle,
      titleContainer, textMain, textBlack, textHighlight, textSmoke,
      descContainer, descStyle, footer, dotStyle, txtFoot
    } = styles;
    const product = this.props.navigation.getParam('product', null);
    const { name, price, color, material, description, images } = product;

    return (
      <View style={ container }>
        <Header onOpen={this.openMenu.bind(this)} onSearch={this.openSearch.bind(this)}/>
        
        <ScrollView style={ wrapper }>
          <View style={ header }>
            <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
              <Image source={ backIcon } style={{ width: 30, height: 30 }}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onClick(product)}>
              <Image source={ cartIcon } style={{ width: 30, height: 30 }}/>
            </TouchableOpacity>
          </View>

          <View style={ imageContent }>
            <Image source={{uri: `${url}${images[0]}`}} style={ imageStyle }/>
            <Image source={{uri: `${url}${images[1]}`}} style={ imageStyle }/>
          </View>

          <View style={ descriptionStyle }>
            <View style={titleContainer}>
                <Text style={textMain}>
                  <Text style={textBlack}>{name.toUpperCase()}</Text>
                  <Text style={textHighlight}> / </Text>
                  <Text style={textSmoke}>${price}</Text>
                </Text>
              </View>

              <View style={ descContainer }>
                <Text style={ descStyle }>
                  {description}
                </Text>
                <View style={ footer }>
                  <Text style={ txtFoot }>Material: {material}</Text>
                  <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                    <Text style={ txtFoot }>Color: {color}</Text>
                    <View 
                      style={{
                        backgroundColor: color.toLowerCase(), 
                        width: 14,
                        height: 14,
                        borderRadius: 7
                      }}
                    />
                  </View>
                </View>
              </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    carts: state.carts
  };
}

export default connect(mapStateToProps)(ProductDetail);

const imageWidth = width / 2;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    flex: 1
  },
  header: {
    height: height/20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  imageContent: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageStyle: {
    width: width/2.3,
    height: imageHeight
  },
  descriptionStyle: {
    flex: 6
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: '#F6F6F6',
    margin: 20,
    paddingBottom: 5
  },
  textMain: {
    paddingLeft: 20,
  },
  textBlack: {
    fontFamily: 'avenir',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3F3F46'
  },
  textHighlight: {
    fontFamily: 'avenir',
    fontSize: 20,
    color: '#7D59C8'
  },
  textSmoke: {
    fontFamily: 'avenir',
    fontSize: 20,
    color: '#9A9A9A'
  },
  descContainer: {
    paddingHorizontal: 10
  },
  descStyle: {
    color: '#AFAFAF'
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  dotStyle: {
    width: 14,
    height: 14,
    borderRadius: 7
  },
  txtFoot:{
    color: '#C21C70',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir'
  }
});