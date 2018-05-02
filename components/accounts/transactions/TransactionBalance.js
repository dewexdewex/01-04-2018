import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class TransactionBalance extends React.Component {
  render() {
    return (
      <View>
        <Text style={{textAlign: 'right', fontSize: 13, color: '#BBB'}}>£34.56</Text>
      </View>
    );
  }
}

