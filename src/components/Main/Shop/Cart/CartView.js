import React, {Component} from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const url = 'http://192.168.1.32:8080/ShoppingApp/images/product/';
class CartView extends Component {
	constructor(props){
		super(props);
		this.state = {
			number: 1
		}
	}

	//hàm xử lý tăng số lượng sp
	onAdd(){
		this.setState({number: (this.state.number + 1)},
			() => {
				//thay đổi sản phẩm trong store
				this.props.dispatch({
					type: 'CHANGE',
					id: this.props.item.id,
					quantity: this.state.number
				})
			}
		);
	};

	//hàm xử lý giảm số lượng sp
	onSub(){
		if(this.state.number === 1) return this.state.number;
		this.setState({number: (this.state.number - 1)},
			() => {
				//thay đổi sản phẩm trong store
				this.props.dispatch({
					type: 'CHANGE',
					id: this.props.item.id,
					quantity: this.state.number
				})
			}
		);
	}

	//hàm xử lý xóa sp khỏi cart
	onDelete(){
		//xóa sản phẩm từ store
		this.props.dispatch({
			type: 'DELETE',
			id: this.props.item.id
		})
	}

	render() {

		const { name, images, price, quantity } = this.props.item;
	    const { 
	      productContainer, productInfo, productImage,
	      Row, numberOfProduct, showDetailContainer,
	      txtName, txtPrice, txtDetail 
	    } = styles;

		return(
			<View style={ productContainer }>
	            <Image source={{uri: `${url}${images[0]}`}} style={ productImage }/>
	            <View style={ productInfo }>
	            	<View style={ Row }>
	              		<Text style={ txtName }>{ name }</Text>
	              		<View />
	              		<TouchableOpacity onPress={this.onDelete.bind(this)}>
	              			<Text style={ txtName }>X</Text>
	              		</TouchableOpacity>
	              	</View>
	              <Text style={ txtPrice }>{price * quantity}$</Text>

	              <View style={ Row }>
	              	<View style={ numberOfProduct }>
	              		<TouchableOpacity onPress={this.onAdd.bind(this)}>
	              			<Text style={{ fontSize: 20 }}>+</Text>
	              		</TouchableOpacity>
	              		<Text style={{ fontSize: 20 }}>{quantity}</Text>
	              		<TouchableOpacity onPress={this.onSub.bind(this)}>
	              			<Text style={{ fontSize: 20 }}>-</Text>
	              		</TouchableOpacity>
	              	</View>
	                <TouchableOpacity
	                	style={ showDetailContainer } 
	                	onPress={ () => this.props.onOpen(this.props.item) }>
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
    carts: state.carts
  };
}

export default connect()(CartView);

const styles = StyleSheet.create({
  productContainer: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    backgroundColor: '#fff',
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
  Row: {
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
  txtDetail: {
    fontFamily: 'avenir',
    color: '#B10D65',
  },
  numberOfProduct: {
  	flex: 1,
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  },
  showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
  }
});