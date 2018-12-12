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

const url = 'http://192.168.1.32:8080/ShoppingApp/images/product/';

class SearchView extends Component {
	render(){
    const {  
      productContainer, productInfo, productImage, lastRowInfo,
      txtName, txtPrice, txtMaterial, txtColor, txtDetail 
    } = styles;
    const { name, price, color, material, description, images } = this.props.item;

		return(
		  <View style={ productContainer }>
        <Image source={{uri: `${url}${images[0]}`}} style={ productImage }/>
        <View style={ productInfo }>
          <Text style={ txtName }>{name}</Text>
          <Text style={ txtPrice }>${price}</Text>
          <Text style={ txtMaterial }>Material:{material}</Text>
          <View style={ lastRowInfo }>
            <Text style={ txtColor }>Color:{color}</Text>
            <View 
              style={{
                backgroundColor: color.toLowerCase(), 
                width: 14,
                height: 14,
                borderRadius: 7
              }}
            />
            <TouchableOpacity onPress={() => this.props.onOpen(this.props.item) }>
              <Text style={ txtDetail }>Show Detail</Text>
            </TouchableOpacity>
            </View>
        </View>
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

export default connect(mapStateToProps)(SearchView);

const styles = StyleSheet.create({
  productContainer: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: '#fff'
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