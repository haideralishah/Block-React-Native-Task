import * as React from "react";
import { connect } from "react-redux";
import { TouchableOpacity, ScrollView } from "react-native";
import {
  Container,
  Header,
  Title,
  Text,
  Body,
  View
} from "native-base";
import { withNavigation } from 'react-navigation';
import RegistrationForm from "../../containers/registration";

const Registration = props => {
    return (
      <Container style={{ backgroundColor: "#FBFAFA" }}>
        <Header style={{ backgroundColor: 'white' }}>
          <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Title style={{ color: "#000", fontSize: 20, fontWeight: '600' }}>Registration</Title>
          </Body>
        </Header>
        <ScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: 15, justifyContent: 'center' }}>
          <RegistrationForm />
          <View style={{ alignItems: "center", paddingTop: 16 }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}
              activeOpacity={0.8}
              block
            >
              <Text style={{ color: "#B0BAC9", fontSize: 16 }}>Go to Login</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </Container>
    )
  }

export default withNavigation(Registration);
