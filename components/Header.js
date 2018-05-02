import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Subtitle } from "native-base";

export default class MyHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Transactions</Title>
          <Subtitle>Current account</Subtitle>
        </Body>            
        <Right>
          <Button transparent>
            <Icon name='more' />
          </Button>
        </Right>
      </Header> 
    );
  }
}       





            