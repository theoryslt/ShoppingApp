import React, {Component} from 'react';
import { 
	Text, 
	View, 
	Image, 
	TouchableOpacity,
	FlatList,
	Dimensions, 
	StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

class TopProduct extends Component<Props> {
  render() {
  	const { topProducts } = this.props;
  	const { container, titleContanier, title, row } = styles;

    return (
      <View style={ container }>
      	<View style={ titleContanier }>
        	<Text style={ title }>TOP PRODUCT</Text>
        </View>
        <View>
        	<FlatList 
        		numColumns={2}
        		data={topProducts}
        		renderItem = { ({item}) =>{
        			return (
        				<View style={ row }>
        					<TouchableOpacity onPress={() => this.props.onOpen(item)}>
        						<ProductItem item={item}/>
        					</TouchableOpacity>
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

export default connect(mapStateToProps)(TopProduct);

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		margin: 10,
		flex: 1,
    elevation: 5
	},
	titleContanier: {
		height: 50,
		alignItems: 'center', 
		justifyContent: 'center'
	},
	title: {
		fontSize: 20,
		color: '#AFAEAF'
	},
	row: {
    	flex: 1,
    	flexDirection: 'row',
	    borderBottomColor: '#B7CECE',
	    borderBottomWidth: 0.2,
	    alignItems: 'center',
	    justifyContent: 'center'
  	}
})
