import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import {
  Container,
  Header,
  Title,
  Text,
  Body,
  View,
  Right
} from "native-base";
import { withNavigation, NavigationEvents } from 'react-navigation';
import { getList, deleteJob, logout } from '../../store/action';

function Item({ item, onRemove }) {
  return (
    <View style={styles.item}>
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => onRemove(item._id)}
          style={{
            width: 22,
            height: 22,
            borderRadius: 11,
            right: 1,
            top: 1,
            position: 'absolute',
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.7, flexDirection: 'column' }}>
        <View style={{ width: '100%', height: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>Designation: {item.designation}</Text>
        </View>
        <View style={{ width: '100%', height: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>Description: {item.description}</Text>
        </View>
      </View>
    </View>
  );
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    const user = this.props.user;
    if (user && user._id) {
      this.props.actions.getList(user._id)
        .then((res) => {
          this.setState({ data: res.data })
        })
    }
    else {
      this.setState({ data: null })
    }
  }

  _remove = (id) => {
    const data = this.props.list;
    console.log('id***', id, data);
    var index = data.findIndex(item => id === item._id)
    if (index !== -1) {
      this.props.actions.deleteJob(data[index]._id, data);
      data.splice(index, 1)
      this.setState({ data: data.length ? data : null })
    }
  }

  _Logout = () => {
    this.props.actions.logout()
      .then(() => {
        this.props.navigation.navigate('Login')
      })
  }
  render() {
    const { data } = this.state;
    return (
      <Container style={{ backgroundColor: "#FBFAFA" }}>
        <NavigationEvents onDidFocus={() => this.fetchData()} />
        <Header style={{ backgroundColor: 'white' }}>
          <Body style={{ justifyContent: 'center', alignItems: 'center', width: '60%', marginLeft: '30%' }}>
            <Title style={{ textAlign: 'center', color: "#000", fontSize: 20, fontWeight: '600' }}>Job List</Title>
          </Body>
          <Right style={{ width: '20%' }}>
            <TouchableOpacity style={{ backgroundColor: '#0693E3', paddingHorizontal: 6, paddingVertical: 5, borderRadius: 2 }} onPress={this._Logout}><Text style={{ fontWeight: '600', color: '#FFFFFF' }}>Logout</Text></TouchableOpacity>
          </Right>
        </Header>
        <SafeAreaView style={styles.container}>
          {
            data ?
              data.length ?
                <FlatList
                  data={data}
                  renderItem={({ item }) => <Item item={item} onRemove={(id) => this._remove(id)} />}
                  keyExtractor={item => item.id}
                />
                :
                <ActivityIndicator size="large" color="#85d2f5" />
              :
              <Text style={{ alignSelf: 'center' }}>No data found</Text>
          }
        </SafeAreaView>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Form')}
          style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#0693E3', bottom: 10, right: 10, position: "absolute", zIndex: 1000, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontSize: 35, color: '#FFFFFF' }}>+</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.reducer.LIST,
    user: state.reducer.USER
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      getList,
      deleteJob,
      logout
    }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(List));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F6FF'
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 3,
    borderLeftColor: '#85d2f5',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    padding: 8,
  },
  text: {
    width: '100%',
    fontSize: 14,
    color: 'grey',
    paddingLeft: 10,
  }
});