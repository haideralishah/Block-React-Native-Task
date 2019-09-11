import * as React from "react"
import { connect } from "react-redux"
import { View } from "native-base"
import InputField from "../../components/Input";
import AuthButton from "../../components/Button";
import { withNavigation } from 'react-navigation';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  }
  render() {
    return (
      <View>
        <InputField onChange={(text) => this.setState({ email: text })} placeholder='Email' />
        <InputField onChange={(text) => this.setState({ password: text })} placeholder='Password' />
        <View>
          <AuthButton
            onPress={() => this.props.navigation.navigate('List')}
            text='Sign In'
          />
        </View>
      </View>
    )
  }
}

export default withNavigation(LoginForm);
