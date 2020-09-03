import React from 'react';
import MapContainer from './MapContainer';
import {Container} from 'native-base';

export default class Home extends React.Component {
  componentDidMount() {
    this.props.getCurrentLocation();
  }

  render() {
    return (
      <Container>
        {this.props.region.latitude ? (
          <MapContainer
            region={this.props.region}
            getInputData={this.props.getInputData}
            toggleSearchResultModal={
              this.props.toggleSearchResultModal
            }></MapContainer>
        ) : (
          <></>
        )}
      </Container>
    );
  }
}
