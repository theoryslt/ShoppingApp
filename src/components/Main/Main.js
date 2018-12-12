import React, {Component} from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Header from './Header';
import Collection from './Shop/Home/Collection';
import Category from './Shop/Home/Category';
import TopProduct from './Shop/Home/TopProduct';

class Main extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      types: [],
      topProducts: []
    }
  }

  //hàm mở menu
  openMenu(){
    this.props.navigation.toggleDrawer();
  }

  //hàm mở danh sách sp
  openList(product){
    this.props.navigation.navigate('ListScreen', { product: product });
  }

  //hàm mở chi tiết sp
  openDetail(product){
    this.props.navigation.navigate('DetailScreen', {product: product});
  }

  //hàm mở trang tìn kiếm
  openSearch(){
    this.props.navigation.navigate('Search');
  }

  //fetch data từ api
  componentDidMount(){
    const { types } = this.state;
    fetch("http://192.168.1.32:8080/ShoppingApp")
    .then((response) => response.json())
    .then((responseJson) => {
      const { type, product } = responseJson;
      this.props.dispatch({
        type: 'FETCH_DATA',
        types: type,
        topProducts: product
      });
    })
    .catch((e) => {console.log(e)});
  }

  render() {
    const {types} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header onOpen={this.openMenu.bind(this)} onSearch={this.openSearch.bind(this)}/>
        <ScrollView>
          <Collection onOpen={this.openList.bind(this)}/>
          <Category onOpen={this.openList.bind(this)} />
          <TopProduct onOpen={this.openDetail.bind(this)}/>
        </ScrollView>
      </View>
    );
  }
}

export default connect()(Main);