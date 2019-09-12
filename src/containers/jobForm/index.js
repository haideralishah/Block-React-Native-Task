import * as React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { View } from "native-base";
import { withNavigation } from 'react-navigation';
import InputField from "../../components/Input";
import AuthButton from "../../components/Button";
import { createJob } from '../../store/action';

class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      designation: '',
      location: '',
      salary: '',
      time: '',
    }
  }

  _Create = () => {
    const { title, designation, location, salary, time } = this.state;
    if (title && designation && location && salary && time) {
      this.props.actions.createJob({ title, designation, location, salary, time })
        .then(() => {
          this.props.navigation.navigate('List')
        })
        .catch(() => {
          alert('No proper data')
        })
    }
    else {
      alert('Please fill all input.')
    }
  }

  render() {
    return (
      <View>
        <InputField onChange={(text) => this.setState({ title: text })} placeholder='Title' />
        <InputField onChange={(text) => this.setState({ designation: text })} placeholder='Designation' />
        <InputField onChange={(text) => this.setState({ location: text })} placeholder='Location' />
        <InputField onChange={(text) => this.setState({ salary: text })} placeholder='Salary' />
        <InputField onChange={(text) => this.setState({ time: text })} placeholder='Time' />
        <View>
          <AuthButton
            onPress={this._Create}
            text='Create'
          />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      createJob,
    }, dispatch),
  }
}
export default connect(null, mapDispatchToProps)(withNavigation(JobForm));
