import React from 'react';
import {View, Text} from 'react-native';
import MapContainer from './MapContainer';
import {Container} from 'native-base';

export default class Home extends React.Component {
  componentDidMount() {
    this.props.setName();
  }

  render() {
    const region = {
      latitude: 26.124161,
      longitude: -80.143593,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    return (
      <Container>
        <MapContainer region={region}></MapContainer>
      </Container>
    );
  }
}
