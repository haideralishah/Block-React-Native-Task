import * as React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Title,
  Body,
  Left,
  Text
} from "native-base";
import { withNavigation } from 'react-navigation';
import JobForm from "../../containers/jobForm";

const Form = props => {
  return (
    <Container style={{ backgroundColor: "#FBFAFA" }}>
      <Header style={{ backgroundColor: 'white' }}>
        <Left style={{ width: '20%' }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('List')}><Text style={{ fontWeight: '600' }}>Back</Text></TouchableOpacity>
        </Left>
        <Body style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', width: '60%', marginRight: '20%' }}>
          <Title style={{ color: "#000", fontSize: 20, fontWeight: '600' }}>Create Job</Title>
        </Body>
      </Header>
      <ScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: 15, justifyContent: 'center' }}>
        <JobForm />
      </ScrollView>
    </Container>
  )
}

export default withNavigation(Form);
