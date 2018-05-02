import React from 'react';
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

export default class MyFooter extends React.Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical active>
            <Icon name="ios-home" />
            <Text>Accounts</Text>
          </Button>
          <Button vertical>
            <Icon name="ios-swap" />
            <Text>Payments</Text>
          </Button>
          <Button vertical>
            <Icon active name="ios-card" />
            <Text>Spending</Text>
          </Button>
          <Button vertical>
            <Icon name="ios-more" />
            <Text>More</Text>
          </Button>
        </FooterTab>
      </Footer> 
    );
  }
}   