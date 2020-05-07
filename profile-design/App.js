//This is an example code to show React Native Round Shape Image//
import React, { Component } from 'react';
//import react in our code. 

import { Platform, StyleSheet, View, Image, Text } from 'react-native';
//import all the components we are going to use. 


export default class App extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Image
          source={{uri: 'https://media-exp1.licdn.com/dms/image/C5103AQGyiRjwtjReEw/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=BMPJr92G-oueTDOC1Zwr3BPMtFcDD5SBXguqJquO8TY',}}
          //borderRadius style will help us make the Round Shape Image
          style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
        />
        <Text style={styles.text}>Monesh Kannan</Text>
        <Text style={{color:'#D3D3D3',
        fontSize:20,}}>moneshkannan02@gmail.com</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    marginTop: 30,
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
  },

});