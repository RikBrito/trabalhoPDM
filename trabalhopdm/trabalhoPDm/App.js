import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import home from '.../src/home/index.js';
export default class App extends React.Component {
  render() {
    return ( home );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
