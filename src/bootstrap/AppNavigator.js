import React from 'react';
import { connect } from 'react-redux';
import { Wrapper } from '../bootstrap';
import { navigateTo } from '../actions/navigation';

import {
  Home
} from '../scenes';

class AppNavigator extends React.Component {

  state = {
    scene: null
  }

  componentDidMount() {
    this.props.dispatch(navigateTo('HOME'));
  }

  componentWillReceiveProps(props) {
    let { scene } = props.navigation;
    if (scene !== this.state.scene) {
      switch (scene) {
        case 'HOME':
          return this.setState({ scene: <Home /> });
        default:
          console.error(`Error: undefined scene '${ scene }'`);
      }
    }
  }

  render() {
    return (
      <Wrapper>
        { this.state.scene }
      </Wrapper>
    );
  }

}

export default connect(state => ({
  navigation: state.navigation
}))(AppNavigator);