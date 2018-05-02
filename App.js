import React from "react";
import { StyleSheet, StatusBar, Image, View } from "react-native";
import { Content, Card, CardItem, Container, Body, Text, StyleProvider } from "native-base";
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Expo from "expo";
import MyHeader from './components/Header';
import MyCard from './components/Card';
import MyFooter from './components/Footer';
import TransactionLogo from './components/accounts/transactions/TransactionLogo';
import TransactionMerchant from './components/accounts/transactions/TransactionMerchant';
import TransactionValue from './components/accounts/transactions/TransactionValue';
import TransactionDate from './components/accounts/transactions/TransactionDate';
import TransactionBalance from './components/accounts/transactions/TransactionBalance';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }   

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={{paddingTop: Expo.Constants.statusBarHeight}}>
          <StatusBar hidden={false} />
          <MyHeader />
          
          <Content style={{padding: 10}}>
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

          </Content>
          <MyFooter />

        </Container>
      </StyleProvider>
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