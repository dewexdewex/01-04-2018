import React from "react";
import { StatusBar, Image, View } from "react-native";
import { Content, Card, CardItem, Container, Header, Left, Body, Center, Right, Button, Icon, Title, Text, StyleProvider } from "native-base";
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import Expo from "expo";

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
          <Header>
            <Left>
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Image source={require('./img/logo.png')} /> 
            </Body>
            <Body>
              <Title>Mobile banking</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Right>
          </Header>
          
          <Content style={{padding: 10}}>
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
          </Content>
          

        </Container>
      </StyleProvider>
    );
  }
}