import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
  Dimensions
} from 'react-native';

const url = 'http://192.168.1.32:8080/ShoppingApp/images/product/';
const { width, height } = Dimensions.get('window');

export default class ProductItem extends Component{
  render() {
    const { item } = this.props;
    const { container, imageStyle, textContainer, nameStyle, priceStyle } = styles;

    return(
      <View style={ container }>
        <Image 
          source={{uri: `${url}${item.images[0]}`}} 
          style = { imageStyle }
        />
        <View style={ textContainer }> 
          <Text style={ nameStyle }>{item.name}</Text>
          <Text style={ priceStyle }>${item.price}</Text>
        </View>
      </View>
    );
  }
}

const productWidth = (width - 50) / 2;
const imageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    width: productWidth,
    paddingBottom: 10,
    elevation: 5
  },
  imageStyle: {
    width: productWidth, 
    height: imageHeight
  },
  textContainer: {
    paddingLeft: 5,
  },
  nameStyle: {
    fontFamily: 'avenir',
    fontSize: 16,
    color: '#AFAEAF'
  },
  priceStyle: {
    fontFamily: 'avenir',
    fontSize: 16,
    color: 'red'
  }
})