import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';

import { Navigation } from './src/navigation';

class AppContainer extends Component {
  state = {
    token: null,
    loading: true,
  };

  async componentDidMount () {
    // await AsyncStorage.clear();
    const token = await AsyncStorage.getItem('token');
    this.setState({ token, loading: false });
  }

  render(): JSX.Element {
    const { token, loading } = this.state;

    return loading ? null : (
      <Navigation token={token} />
    );
  }
}

export default AppContainer;
