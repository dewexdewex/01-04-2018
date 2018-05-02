import React from 'react';
import { Card, CardItem, Text, Body } from "native-base";

export default class MyCard extends React.Component {
  render() {
    return (
      <Card>
        <CardItem header>
          <Text>This is a card</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={{paddingBottom: 10}}>
              Lorem ipsum dolor sunt.
            </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Text>Yours, David</Text>
        </CardItem>
      </Card>
    );
  }
}       





            