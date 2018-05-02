import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Subtitle } from "native-base";

export default class MyHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name='ios-person-outline' />
          </Button>
        </Left>
        <Body>
          <Title>David Wiles</Title>
          <Subtitle>Accounts</Subtitle>
        </Body>            
        <Right>
          <Button transparent>
            <Icon name='ios-notifications-outline' />
          </Button>
        </Right>
      </Header> 
    );
  }
}       





            