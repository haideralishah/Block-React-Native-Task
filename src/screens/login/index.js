import * as React from "react";
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
import LoginForm from "../../containers/login";

const Login = props => {
  return (
    <Container style={{ backgroundColor: "#FBFAFA" }}>
      <Header style={{ backgroundColor: 'white' }}>
        <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Title style={{ color: "#000", fontSize: 20, fontWeight: '600' }}>Login</Title>
        </Body>
      </Header>
      <ScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: 15, justifyContent: 'center' }}>
        <View style={{ paddingBottom: 10 }}>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>Please enter your credentials to proceed</Text>
        </View>
        <LoginForm />
        <View style={{ alignItems: "center", paddingTop: 16 }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Registration')}
            activeOpacity={0.8}
            block
          >
            <Text style={{ color: "#B0BAC9", fontSize: 16 }}>Go to Registration</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </Container>
  )
}

export default withNavigation(Login);
