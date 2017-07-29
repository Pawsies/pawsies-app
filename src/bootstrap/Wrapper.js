import React from 'react';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { Container } from 'native-base';

import { navigateTo } from '../actions/navigation';

class Wrapper extends React.Component {

  render() {
    return (
      <Container>
        { this.props.children }
      </Container>
    );
  }

}

export default connect(state => ({
  navigation: state.navigation
}))(Wrapper);