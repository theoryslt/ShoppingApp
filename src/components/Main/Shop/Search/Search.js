import React, {Component} from 'react';
import { 
	Text, View, 
	TouchableOpacity, 
	FlatList,
	StyleSheet 
} from 'react-native';
import { connect } from 'react-redux';
import Header from'../../Header';
import SearchView from './SearchView';

class Search extends Component<Props> {
	//hàm mở menu
	openMenu(){
    	this.props.navigation.toggleDrawer();
  	}

  	//hàm mở chi tiết sp
  	openDetail(product){
    	this.props.navigation.navigate('DetailScreen', {product: product});
  	}

	render() {
		const { navigate } = this.props.navigation;
		const { searchResult } = this.props;
		const {  
	    	emptyStyle, txtStyle 
	    } = styles;

	    //màn hình khi ko có kết quả tìm kiếm
		const emptyView = (
	    	<View style={ emptyStyle }>
	        	<Text style={txtStyle}>No Result Found.</Text>
	        	<Text style={txtStyle}>Please Try Again.</Text>
	      	</View>
	    );

		//màn hình khi có kết quả tìm kiếm
	    const resultView = (
	    	<FlatList 
	      		data={ searchResult }
	      		renderItem = { ({item}) =>{
        			return (
        				<SearchView item={item} onOpen={this.openDetail.bind(this)}/>
        			);
        		}}
	      	/>
	    );

	    const mainView = (searchResult.length > 0) ? resultView : emptyView;

	    return (
	    	<View style={{ flex: 1 }}>
	      		<Header onOpen={this.openMenu.bind(this)}/>
	      		{ mainView }
	      	</View>
		);
	}
}

function mapStateToProps(state){
  return {
    searchResult: state.searchResult
  };
}

export default connect(mapStateToProps)(Search);

const styles = StyleSheet.create({
  emptyStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtStyle: {
    color: '#77CBB9',
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold'
  }
})