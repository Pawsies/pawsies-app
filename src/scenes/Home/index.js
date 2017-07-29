import React from 'react';
import { connect } from 'react-redux';
import { colors } from '../../conventions';
import { navigateTo } from '../../actions/navigation';
import {
  View,
  Text,
  Form,
  Item,
  Label,
  Input
} from 'native-base';

const styles = {
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    flex: 0
  },
  title: {
    color: colors.accent,
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center'
  }
};

class Home extends React.Component {

  render() {
    return (
      <View style={ styles.container }>

        <View style={ styles.box }>

          <Text style={ styles.title }>PAWSIES</Text>
        
          <Form>

            <Item stackedLabel>
              <Label>MAIL</Label>
              <Input />
            </Item>
            
            <Item stackedLabel>
              <Label>PASSWORD</Label>
              <Input />
            </Item>
          
          </Form>

        </View>

      </View>
    );
  }

}

export default connect()(Home);