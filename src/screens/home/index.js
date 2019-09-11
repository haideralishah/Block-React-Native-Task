import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Title,
  Text,
  Body,
  View
} from "native-base";
import { withNavigation } from 'react-navigation';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{ flex: 0.7, flexDirection: 'column' }}>
        <View style={{ width: '100%', height: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={{ width: '100%', height: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const List = props => {
  return (
    <Container style={{ backgroundColor: "#FBFAFA" }}>
      <Header style={{ backgroundColor: 'white' }}>
        <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Title style={{ color: "#000", fontSize: 20, fontWeight: '600' }}>Login</Title>
        </Body>
      </Header>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Form')}
        style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#0693E3', bottom: 10, right: 10, position: "absolute", zIndex: 1000, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ fontSize: 35, color: '#FFFFFF' }}>+</Text>
      </TouchableOpacity>
    </Container>
  );
}

export default withNavigation(List);

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
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    padding: 8,
  },
  text: {
    width: '50%',
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
  }
});