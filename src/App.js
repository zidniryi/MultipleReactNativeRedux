
import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { connect } from 'react-redux';
import { counterIncrement, counterDecrement, counterClear, counterSet, helloAction } from "./actions";
import { ScrollView } from "react-native-gesture-handler";
import Color from "./Color";
class App extends Component {
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText(number) {
    const count = parseInt(number);
    this.props.counterSet(count)
  }

  render() {
    console.log(this.props.color)
    const {helloText, pressButton} = this.props.hello
    const { container, countViewStyle, welcome } = styles;
    return (
      <ScrollView>
      <View style={container}>
          <TextInput          
            style={{width: 40, height: 40, borderWidth: 1}}
            onChangeText={this.onChangeText}
            value={this.props.count.toString()}
           />
        <View style={countViewStyle}> 
          <Button onPress={this.props.counterIncrement} title="+" />
          <Text style={welcome}>
            {this.props.count}
          </Text>
          <Button onPress={this.props.counterDecrement} title="-" />
        </View>
        <Button onPress={this.props.counterClear} title="Clear" />
        <View>
        <Text>{helloText}</Text>
        <Text>Did you press button === {pressButton.toString()}</Text>
        <Button title='Show The Magic' color='tomato' onPress={this.props.helloAction}/>
        </View>
        <Color />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  countViewStyle: {
    flexDirection: "row"
  }
});
// RxMap
/**
 * 
 * @param {Map state dari reducers} state 
 */
const mapStateToProps = (state) => ({
  count: state.counter,
  hello: state.hello,
});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, {counterIncrement, counterDecrement, counterClear, counterSet, helloAction})(App)
