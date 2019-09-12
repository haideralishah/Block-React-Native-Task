import * as React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { View } from "native-base";
import { withNavigation } from 'react-navigation';
import InputField from "../../components/Input";
import AuthButton from "../../components/Button";
import { signin } from '../../store/action';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  }
  _Signin = () => {
    const { email, password } = this.state;
    console.log('user', email, password);
    if (email && password) {
      this.props.actions.signin({ email, password })
        .then(() => {
          this.props.navigation.navigate('List')
        })
        .catch(() => {
          alert('Incorrect email/password!')
        })
    }
    else {
      alert('Please fill all input.')
    }
  }

  render() {
    return (
      <View>
        <InputField onChange={(text) => this.setState({ email: text })} placeholder='Email' />
        <InputField onChange={(text) => this.setState({ password: text })} placeholder='Password' isPassword={true} />
        <View>
          <AuthButton
            onPress={this._Signin}
            text='Sign In'
          />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      signin,
    }, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(withNavigation(LoginForm));
