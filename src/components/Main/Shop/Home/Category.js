import React, {Component} from 'react';
import { 
	Text, 
	View, 
	Dimensions, 
	ImageBackground,
	TouchableOpacity, 
	StyleSheet 
} from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');
const url = 'http://192.168.1.32:8080/ShoppingApp/images/type/';

class Category extends Component<Props> {
  render() {
  	const { types } = this.props;

  	const { 
  		container, 
  		titleText, 
  		imageStyle, 
  		imageText, 
  		dotStyle, 
  		activeDotStyle } = styles;

    return (
      <View style={container}>
      	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        	<Text style={titleText}>LIST OF CATEGORY</Text>
        </View>
        <View style={{ flex: 4 }}>
	      	<Swiper 
	      		autoplay
	      		dot={<View style={ dotStyle } />}
          		activeDot={<View style={ activeDotStyle } />}>
          		{ types.map(e => 
          			<TouchableOpacity onPress={() => this.props.onOpen(e)}>
			      		<ImageBackground source={{uri: `${url}${e.image}`}} style={imageStyle}>
			        		<Text style={imageText}>{e.name}</Text>
			        	</ImageBackground>
		        	</TouchableOpacity>
          		) }
          		
	        </Swiper>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    types: state.types
  };
}

export default connect(mapStateToProps)(Category);

const styles = StyleSheet.create({
	container: {
		height: height * 0.3,
		backgroundColor: '#FFF',
		margin: 10,
		padding: 10,
		paddingTop: 0,
		elevation: 5
	},
	titleText: {
		color: '#AFAEAF',
		fontSize: 20
	},
	imageStyle: {
		height: 145,
		width: 320,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageText: {
		fontSize: 20,
		fontFamily: 'avenir',
		color: '#AFAEAF'
	},
	dotStyle: {
		backgroundColor: '#AFAEAF', 
		width: 6, 
		height: 6, 
		borderRadius: 3, 
		marginLeft: 3, 
		marginRight: 3, 
		marginTop: 3, 
		marginBottom: 3,
	},
	activeDotStyle: {
		backgroundColor: 'rgba(255,255,255,1)', 
		width: 6, 
		height: 6, 
		borderRadius: 3, 
		marginLeft: 3, 
		marginRight: 3,
		marginTop: 3, 
		marginBottom: 3,
	}
})