import React, {Component} from 'react';
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

let phoneIcon = require('../../../../media/appIcon/phone.png');
let mailIcon = require('../../../../media/appIcon/mail.png');
let messageIcon = require('../../../../media/appIcon/message.png');
let locationIcon = require('../../../../media/appIcon/location.png');
let map = require('../../../../media/appIcon/map.png');

export default class Contact extends Component<Props> {
  render() {
  	const { 
  		container, 
  		mapContainer, mapStyle,
  		infoContainer, rowInfo, imageStyle, infoText } = styles;

    return (
      <View style={ container }>
        <View style={ mapContainer }>
        	<Image style={ mapStyle } source={map}/>
        </View>
        <View style={ infoContainer }>
        	<View style={ rowInfo }>
        		<Image source={locationIcon} style={ imageStyle }/>
        		<Text style={ infoText }>Xuân Thủy/Hà Nội</Text>
        	</View>
        	<View style={ rowInfo }>
        		<Image source={phoneIcon} style={ imageStyle }/>
        		<Text style={ infoText }>(+84)123456789</Text>
        	</View>
        	<View style={ rowInfo }>
        		<Image source={mailIcon} style={ imageStyle }/>
        		<Text style={ infoText }>example@gmail.com</Text>
        	</View>
        	<View style={ [rowInfo, { borderBottomWidth: 0 }] }>
        		<Image source={messageIcon} style={ imageStyle }/>
        		<Text style={ infoText }>(+84)123456789</Text>
        	</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F6F6F6'
	},
	mapContainer: {
		justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
		borderRadius: 2,
	},
	mapStyle: {
		width,
		height: height/2.5
	},
	infoContainer:{
		padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 5,
        marginTop: 0,
		borderRadius: 2
	},
	rowInfo: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#D6D6D6'
	},
	imageStyle: {
		width: 30,
		height: 30
	},
	infoText: {
		fontFamily: 'Avenir',
        color: '#AE005E',
		fontWeight: '500'
	}
})