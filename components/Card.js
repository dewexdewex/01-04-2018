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
              But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
            </Text>
            <Text style={{paddingBottom: 10}}>
              No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. 
            </Text>
            <Text style={{paddingBottom: 10}}>
            To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
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





            