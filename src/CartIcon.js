import React, {Component} from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class CartIcon extends Component<Props> {
  render(){
    const { container, badgeText } = styles;
    const { carts, uri } = this.props;
    return(
      <View style={ container }>
       <Image source={uri} style={{ height: 20, width: 20 }}/>
       {carts.length > 0 ?
        <View style={ badgeText }>
          <Text style={{ fontSize: 10, color: 'white' }}>{carts.length}</Text>
        </View>
        : undefined}
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    carts: state.carts
  };
}

export default connect(mapStateToProps)(CartIcon);

const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  badgeText: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 1,
    width: 13,
    height: 13,
    borderRadius: 50,
    backgroundColor: 'red',
    zIndex: 2
  }
})