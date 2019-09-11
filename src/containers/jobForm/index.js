import * as React from "react"
import { connect } from "react-redux";
import { View } from "native-base";
import InputField from "../../components/Input";
import AuthButton from "../../components/Button";
import { withNavigation } from 'react-navigation';

class JobForm extends React.Component {
  state = {
    title: '',
    designation: '',
    location: '',
    salary: '',
    time: '',
  }
  render() {
    console.log('Data', this.state.salary);
    return (
      <View>
        <InputField onChange={(text) => this.setState({ title: text })} placeholder='Title' />
        <InputField onChange={(text) => this.setState({ designation: text })} placeholder='Designation' />
        <InputField onChange={(text) => this.setState({ location: text })} placeholder='Location' />
        <InputField onChange={(text) => this.setState({ salary: text })} placeholder='Salary' />
        <InputField onChange={(text) => this.setState({ time: text })} placeholder='Time' />
        <View>
          <AuthButton
            onPress={() => this.props.navigation.navigate('List')}
            text='Create'
          />
        </View>
      </View>
    )
  }
}

export default withNavigation(JobForm);
