import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TransactionLogo from './TransactionLogo';
import TransactionMerchant from './TransactionMerchant';
import TransactionValue from './TransactionValue';
import TransactionBalance from './TransactionBalance';
import TransactionDate from './TransactionDate';

export default class Transaction extends React.Component {
  render() {
    return (

        <View 
          style={styles.transaction} 
          accessible={true} 

          
          accessibilityLabel={'A debit card payment to Co-op, of five pounds and forty-seven pence, made on the third of november twenty-seventeen.  Rolling balance of, thirty-four pounds and fifty-six pence.'}
          accessibilityTraits={'button'}
          accessibilityHint={'Double tap to hear more details about this transaction.'}>
          <View style={styles.leftBit}>
            
            <View style={styles.transactionLogo}>
              <TransactionLogo />
            </View>
           

            <View>
              <View>
                <TransactionMerchant />
              </View>
            
              <View>
                <TransactionDate />
              </View>
            </View>
          </View>


          <View style={styles.rightBit}>
            <View>
              <View style={styles.transactionValue}>
                <TransactionValue />
              </View>
              <View style={styles.TransactionBalance}>
                <TransactionBalance />
              </View>
            </View>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({


  transaction: {

    flexDirection: 'row',
    height: 44,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    marginTop: 2,
  },
  leftBit: {
    flex: 2,
    flexDirection: 'row',
    height: 44,
    borderBottomWidth: 0.5, 
    borderBottomColor: '#CCC',
    justifyContent: 'flex-start',
  },
  rightBit: {
    flex: 1,
    alignItems: 'flex-end',
    height: 44,
    borderBottomWidth: 0.5, 
    borderBottomColor: '#CCC',
    justifyContent: 'flex-start', 
  }
});

var converter = require('number-to-words');
converter.toWords(13); // => “thirteen” 


//<article class="sr-text" alt="</article>