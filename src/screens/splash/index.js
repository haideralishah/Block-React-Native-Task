import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {
  ActivityIndicator,
} from 'react-native'
import {
  Container,
  Text,
} from "native-base";
import { authCheck } from '../../store/action';

const Splash = props => {
  props.actions.authCheck()
    .then(() => {
      props.navigation.navigate('List');
    })
    .catch(() => {
      props.navigation.navigate('Login');
    })
  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <ActivityIndicator size="large" color="#85d2f5" />
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      authCheck,
    }, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Splash);
