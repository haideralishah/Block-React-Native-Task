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
      description: '',
    }
  }

  _Create = () => {
    const { user } = this.props;
    const { title, designation, description } = this.state;
    if (title && designation && description) {
      this.props.actions.createJob({ title, designation, description, uid: user._id })
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
        <InputField onChange={(text) => this.setState({ description: text })} placeholder='Description' />
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

const mapStateToProps = state => {
  return {
    user: state.reducer.USER
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      createJob,
    }, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(JobForm));
