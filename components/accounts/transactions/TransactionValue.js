import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class TransactionValue extends React.Component {
  render() {
    return (
      <View>
        <Text style={{textAlign: 'right', fontSize: 18, color: '#666'}}>-£5.47</Text>
      </View>
    );
  }
}

