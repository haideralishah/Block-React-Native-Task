import * as React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { View,Icon } from "native-base";
import { withNavigation } from 'react-navigation';
import InputField from "../../components/Input";
import AuthButton from "../../components/Button";
import { register } from '../../store/action';

class RegistrationForm extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  }
  _Register = () => {
    const { email, password, name } = this.state;
    console.log('Email', email, password, name, this.props)
    if (email && password && name) {
      this.props.actions.register({ name, email, password })
        .then(() => {
          this.props.navigation.navigate('List')
        })
        .catch(() => {
          alert('Credential not satisfy');
        })
    }
    else {
      alert('Please fill all input.')
    }
  }
  render() {
    return (
      <View>
        <InputField onChange={(text) => this.setState({ name: text })} placeholder='Name' />
        <InputField onChange={(text) => this.setState({ email: text })} placeholder='Email' />
        <InputField onChange={(text) => this.setState({ password: text })} placeholder='Password' isPassword={true} />
        <View>
          <AuthButton
            onPress={this._Register}
            text='Register'
          />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      register,
    }, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(withNavigation(RegistrationForm));
