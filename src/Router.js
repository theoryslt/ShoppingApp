import React from 'react';
import { Image, Dimensions } from 'react-native';
import { 
	createStackNavigator, 
	TabNavigator, 
	DrawerNavigator 
} from 'react-navigation';

import CartIcon from './CartIcon';
import Header from './components/Main/Header';
import Authentication from './components/Authentication/Authentication';
import ChangeInfo from './components/ChangeInfo/ChangeInfo';
import Main from './components/Main/Main';
import Menu from './components/Main/Menu';
import OrderHistory from './components/OrderHistory/OrderHistory';
import Cart from './components/Main/Shop/Cart/Cart.js';
import Contact from './components/Main/Shop/Contact/Contact';
import Search from './components/Main/Shop/Search/Search';
import ListProduct from './components/Main/Shop/ListProduct/ListProduct';
import ProductDetail from './components/Main/Shop/ProductDetail/ProductDetail';
import TopProduct from './components/Main/Shop/Home/TopProduct';

//lấy hình ảnh
let homeIconS = require('./media/appIcon/home.png');
let homeIcon = require('./media/appIcon/home0.png');
let cartIconS = require('./media/appIcon/cart.png');
let cartIcon = require('./media/appIcon/cart0.png');
let searchIconS = require('./media/appIcon/search.png');
let searchIcon = require('./media/appIcon/search0.png');
let contactIconS = require('./media/appIcon/contact.png');
let contactIcon = require('./media/appIcon/contact0.png');

const { height, width } = Dimensions.get('window');

//Các màn hình
const MainStack = createStackNavigator({
	// màn hình trang chủ
	MainScreen: {
		screen: Main
	},
	ListScreen: {
		screen: ListProduct
	},
	DetailScreen: {
		screen: ProductDetail
	}
},
{
	headerMode: 'none',
	navigationOptions: {
			headerVisible: false
		}
});

const CartStack = createStackNavigator({
	CartScreen: {
		screen: Cart
	},
	ListScreen: {
		screen: ListProduct
	},
	DetailScreen: {
		screen: ProductDetail
	}
},
{
	headerMode: 'none',
	navigationOptions: {
			headerVisible: false
	}
});

const SearchStack = createStackNavigator({
	SearchScreen: {
		screen: Search
	},
	ListScreen: {
		screen: ListProduct
	},
	DetailScreen: {
		screen: ProductDetail
	}
},
{
	headerMode: 'none',
	navigationOptions: {
			headerVisible: false
	}
});

//thanh tabbar dưới trang
const Tabs = TabNavigator({
	Home: {
		screen: MainStack
	},
	Cart: {
		screen: CartStack
	},
	Search: {
		screen: SearchStack
	},
	Contact: {
		screen: Contact
	}
},
{
	tabBarPosition: 'bottom',
 	swipeEnabled: true,
 	//các option trong tabbar
 	tabBarOptions: {
 		//style thanh tabbar
 		style: {
 			backgroundColor: '#FFFFF',
 			height: 50,
 			justifyContent: 'center'
 		},
 		//style text
 		labelStyle: {
 			fontSize: 10,
 			marginTop: 0,
 			fontFamily: 'avenir'
 		},
 		showIcon: true,
 		activeTintColor: '#34B089',
      	inactiveTintColor: 'gray'
 	},
 	navigationOptions: ({ navigation }) => ({
 		tabBarIcon: ({ focused }) => {
 			//tên tab đang được chọn
 			const { routeName } = navigation.state;
 			//hình ảnh đại diện cho tab đó
 			let iconName;
 			switch(routeName) {
 				case 'Home': 
 					iconName = focused ? homeIconS : homeIcon;
 				break;
 				case 'Cart':
 					iconName = focused ? cartIconS : cartIcon;
 				break;
 				case 'Search':
 					iconName = focused ? searchIconS : searchIcon;
 				break;
 				case 'Contact':
 					iconName = focused ? contactIconS : contactIcon;
 				break;
 			}

 			const mainView = (routeName === 'Cart') ? 
 				<CartIcon uri={iconName}/> : <Image source={iconName} style={{ height: 20, width: 20 }}/>

 			return mainView;
 			//<Image source={iconName} style={{ height: 20, width: 20 }}/>
 		}
 	})
});

//side menu
export const Drawer = DrawerNavigator({
	Tabbar: {
		screen: Tabs
	},
	AuthenticationScreen: {
		screen: Authentication
	},
	ChangeInfoScreen: {
		screen: ChangeInfo
	},
	OrderHistoryScreen: {
		screen: OrderHistory
	}
},
{
	drawerWidth: 200,
	contentComponent: props => <Menu {...props}/>
})