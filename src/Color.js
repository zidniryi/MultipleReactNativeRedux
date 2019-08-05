import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { colorAction } from './actions';
import { connect } from 'react-redux';

 class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {colorText, colorBool} = this.props.color
    return (
        <View>
          <Text>Separate Child</Text>  
          <Text style={{color:colorBool?'blue':'red'}}>
            {colorText}
          </Text>
          <Button title='Ajaib Warna' color='black' onPress={this.props.colorAction}/>
        </View>
    );
  }
}

const mapStateToProps = (state) => ({
    color: state.color

});

export default connect(mapStateToProps,{colorAction})(Color)