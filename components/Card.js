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
              Helios is an Adobe AEM CMS global platform behind the Renault, Nissan and Infiniti brands' public facing responsive web sites.
            </Text> 
            <Text style={{paddingBottom: 10}}>
              I was engaged by Renault to help drive clientside UX change on the Helios project, directly and with the Agency UX team, to improve the site's market ranking in benchmark customer surveys.
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





            