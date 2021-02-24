import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.push('Details', {
            itemId: 86,
          })
        }
      />
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  console.log(route);

  const {itemId} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen {JSON.stringify(itemId)}</Text>

      <Button
        title="Go back"
        onPress={() =>
          navigation.push('Details', {
            itemId: 100,
          })
        }
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              gestureEnabled: false,
            }}
          />

          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              title: 'Chi tiết',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
