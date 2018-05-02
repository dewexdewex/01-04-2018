import React from "react";
import { StatusBar, Image, View } from "react-native";
import { Content, Card, CardItem, Container, Body, Text, StyleProvider } from "native-base";
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Expo from "expo";
import MyHeader from './components/Header';
import MyCard from './components/Card';
import MyFooter from './components/Footer';

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
            <MyCard />
          </Content>
          <MyFooter />

        </Container>
      </StyleProvider>
    );
  }
}