import React from 'react';
import { View, Text } from 'react-native';
import { MapView, Location, Permissions } from 'expo';

export default class Home extends React.Component {
  state = {
    region: null
  };

  async componentDidMount() {
    const region = await this.fetchCurrentLocation();
    this.setState({ region });
  }

  fetchCurrentLocation = async () => {
    const {
      coords: { latitude, longitude }
    } = await this.getLocationAsync();

    return {
      latitude,
      longitude,
      latitudeDelta: 0.0143,
      longitudeDelta: 0.0134
    };
  };

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') return null;

    return Location.getCurrentPositionAsync({});
  };

  render() {
    const { region } = this.state;

    return <MapView showsUserLocation style={{ flex: 1 }} region={region} />;
  }
}
