import React, {Component} from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Header from'../../Header';

let backIcon = require('../../../../media/appIcon/backList.png');
const url = 'http://192.168.1.32:8080/ShoppingApp/images/product/';
const { width, height } = Dimensions.get('window');

class ListProduct extends Component<Props> {
  //hàm mở menu
  openMenu(){
      this.props.navigation.toggleDrawer();
  }

  //hàm mở trang tìn kiếm
  openSearch(){
    this.props.navigation.navigate('SearchScreen');
  }

  render() {
    const { navigate } = this.props.navigation;
    const { topProducts } = this.props;
    const product = this.props.navigation.getParam('product', null);
    const { name } = product;
    const { 
      container, 
      wrapper, header, titleStyle, 
      productContainer, productInfo, productImage,
      lastRowInfo, dotStyle,
      txtName, txtPrice, txtMaterial, txtColor, txtDetail 
    } = styles;

    return (
      <View style={ container }>
        <Header onOpen={this.openMenu.bind(this)} onSearch={this.openSearch.bind(this)}/>
        <View style={ wrapper }>
          <View style={ header }>
            <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
              <Image source={ backIcon } style={{ width: 30, height: 30 }}/>
            </TouchableOpacity>
            <Text style={ titleStyle }>{ name }</Text>
            <View style={{ width: 30 }}/>
          </View>
          <FlatList 
            data={topProducts}
            renderItem = { ({item}) =>{
              return (
                <View style={ productContainer }>
                  <Image source={{uri: `${url}${item.images[0]}`}} style={ productImage }/>
                  <View style={ productInfo }>
                    <Text style={ txtName }>{item.name}</Text>
                    <Text style={ txtPrice }>{item.price}$</Text>
                    <Text style={ txtMaterial }>Material: {item.material}</Text>
                    <View style={ lastRowInfo }>
                      <Text style={ txtColor }>Color: {item.color}</Text>
                      <View 
                        style={{
                          backgroundColor: item.color.toLowerCase(), 
                          width: 14,
                          height: 14,
                          borderRadius: 7
                        }}
                      />
                      <TouchableOpacity 
                        onPress={() => {navigate('DetailScreen', {product: item})}}
                      >
                        <Text style={ txtDetail }>Show Detail</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    topProducts: state.topProducts
  };
}

export default connect(mapStateToProps)(ListProduct);

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 10
  },
  titleStyle: {
    color: '#B10D65',
    fontFamily: 'avenir',
    fontSize: 20
  },
  productContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0'
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  productImage: {
    width: 80,
    height: (80 * 452) / 361
  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txtName: {
    fontFamily: 'avenir',
    color: '#BCBCBC',
    fontSize: 18,
    fontWeight: '400'
  },
  txtPrice: {
    fontFamily: 'avenir',
    color: '#B10D65',
  },
  txtColor: {
    fontFamily: 'avenir'
  },
  txtDetail: {
    fontFamily: 'avenir',
    color: '#B10D65',
  }
});