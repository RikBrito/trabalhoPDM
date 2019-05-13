import React from 'react';
import { MapView } from 'expo';

export default class Home extends React.Component {
  render() {
    return <MapView showsUserLocation />;
  }
}
