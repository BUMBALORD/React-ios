/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

class ReactTest extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Hello {this.state.name}!
        </Text>
        <Image source={require('./images/Mockup3.jpg')} style={styles.image} />
        <TextInput
          placeholder="Type something here..."
          style={styles.inputText}
          onChangeText={(text) => this.setState({ name: text })}
          value={this.state.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'antiquewhite',
  },
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    margin: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 10,
    margin: 8,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  inputText: {
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    backgroundColor: 'gray',
    padding: 10,
    color: 'white',
    margin: 15,
  },
});

AppRegistry.registerComponent('ReactTest', () => ReactTest);
