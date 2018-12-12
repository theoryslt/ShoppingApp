import React, {Component} from 'react';
import { 
	Text, View, 
	Dimensions, 
	Image, 
	StyleSheet, 
	TouchableOpacity 
} from 'react-native';

const { width, height } = Dimensions.get('window');
let bannerImg = require('../../../../media/temp/banner.jpg');

export default class Collection extends Component<Props> {
  render() {
  	const { container, titleText, bannerImage } = styles;

    return (
      <View style={container}>
      	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        	<Text style={titleText}>SPRING COLLECTION</Text>
        </View>
        <TouchableOpacity 
        	style={{ flex: 4 }}
        	onPress={this.props.onOpen}>
        	<Image source={bannerImg} style={bannerImage}/>
        </TouchableOpacity>
      </View>
    );
  }
}

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
	bannerImage: {
		height: 145,
		width: 320
	}
})