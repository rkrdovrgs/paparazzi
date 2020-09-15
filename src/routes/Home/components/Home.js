import React from 'react';
import MapContainer from './MapContainer';
import {Container} from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent';

const taxiLogo = require('../../../assets/img/logo.png');

export default class Home extends React.Component {
  componentDidMount() {
    this.props.getCurrentLocation();
  }

  render() {
    return (
      <Container>
        <HeaderComponent logo={taxiLogo} />
        {this.props.region.latitude ? (
          <MapContainer
            region={this.props.region}
            getInputData={this.props.getInputData}
            toggleSearchResultModal={this.props.toggleSearchResultModal}
            getAddressPredictions={this.props.getAddressPredictions}
            resultTypes={this.props.resultTypes}
            predictions={this.props.predictions}
          />
        ) : (
          <></>
        )}
      </Container>
    );
  }
}
