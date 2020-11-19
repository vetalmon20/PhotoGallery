import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './app/screens/listScreen';
import PhotoScreen from './app/screens/photoScreen';

const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="List"  component={ListScreen}  />
            <Stack.Screen name="Photo" component={PhotoScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
    
  }
}

/*
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Photo" component={PhotoScreen} />
            <Stack.Screen name="Photos" component={LoadPictures} />
          </Stack.Navigator>
        </NavigationContainer>
        
        
        */ 
