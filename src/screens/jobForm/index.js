import * as React from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native";
import {
  Container,
  Header,
  Title,
  Body,
} from "native-base";
import JobForm from "../../containers/jobForm";

const Form = props => {
  return (
    <Container style={{ backgroundColor: "#FBFAFA" }}>
      <Header style={{ backgroundColor: 'white' }}>
        <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Title style={{ color: "#000", fontSize: 20, fontWeight: '600' }}>Create Job</Title>
        </Body>
      </Header>
      <ScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: 15, justifyContent: 'center' }}>
        <JobForm />
      </ScrollView>
    </Container>
  )
}

export default Form;
