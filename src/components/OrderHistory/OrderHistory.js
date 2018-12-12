import React, {Component} from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions, 
  StyleSheet 
} from 'react-native';

const { width, height } = Dimensions.get('window');
let icBack = require('../../media/appIcon/back_white.png');

export default class OrderHistory extends Component<Props> {
  render() {
    const { container, header, icon, title, body, row } = styles;

    return (
      <View style={ container }>
        <View style={header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image source={ icBack } style={icon}/>
          </TouchableOpacity>
          <Text style={title}>Order History</Text>
          <View style={{ marginRight: 10 }}/>
        </View>

        <View style={ body }>
          <ScrollView>
            
            <View style={ row }>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                <Text style={{ color: '#2ABB9C' }}>Pending</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
              </View>
            </View>

            <View style={ row }>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                <Text style={{ color: '#2ABB9C' }}>ORD002</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                <Text style={{ color: '#2ABB9C' }}>Pending</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>200$</Text>
              </View>
            </View>

            <View style={ row }>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                <Text style={{ color: '#2ABB9C' }}>ORD003</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                <Text style={{ color: '#2ABB9C' }}>Done</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>150$</Text>
              </View>
            </View>

          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    backgroundColor: '#34B089',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 5
  },
  title: {
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'Avenir'
  },
  body: {
    flex: 10,
    backgroundColor: '#F6F6F6'
  },
  row: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 2,
    height: width/3,
    justifyContent: 'space-around'
  }
});