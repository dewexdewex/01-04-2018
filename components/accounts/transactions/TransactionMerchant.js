import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class TransactionMerchant extends React.Component {
  render() {
    return (
      <View>
        <Text style={{textAlign: 'left', fontSize: 18, color: '#666'}}>Co-op</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  transactionText: {
    color: '#000',
    fontSize: 24,
  },
});