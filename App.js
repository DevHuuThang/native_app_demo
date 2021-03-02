import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, Button, TextInput, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Home hihi'})}
      />

      {/* <Button
        title="Go to Create Post"
        onPress={() =>
          navigation.push('CreatePost', {
            itemId: 86,
          })
        }
      /> */}
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  const {itemId} = route.params;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen {JSON.stringify(itemId)}</Text>

      {/* <Buttonth
        title="Go back"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      /> */}

      <Button title="Go to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = useState('');

  return (
    <View>
      <TextInput
        multiline
        value={postText}  
        placeholder="What is on your mind ?"
        style={{height: 200, padding: 20, backgroundColor: 'white'}}
        onChangeText={setPostText}
      />
    </View>
  );
}

function LogoTitle() {
  // const uri = {uri: './src/assets/1200px-React-icon.svg.png'};
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('./src/assets/1200px-React-icon.svg.png')}
    />
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
              title: 'Home',
              headerTitle: (props) => <LogoTitle {...props} />,
              headerStyle: {},
              headerTitleStyle: {
                color: '#fff',
              },
              headerRight: () => <Button title="Info" />,
            }}
          />

          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            initialParams={{itemId: 100}}
            options={{
              title: 'Chi tiết',
            }}
          />

          <Stack.Screen
            name="CreatePost"
            component={CreatePostScreen}
            options={({route}) => ({
              title: route.params.itemId,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
