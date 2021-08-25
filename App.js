import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen/>

        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: -1000,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 3,
    outline: 'none',
    backgroundColor: 'lightblue',
  },
  goButton: {
    alignSelf: 'center',
    width: '20%',
    height: 30,
    borderWidth: 0,
    alignItems: 'center',
    padding: 5,
    margin: 10,
    backgroundColor: 'lightblue'
  }
});

