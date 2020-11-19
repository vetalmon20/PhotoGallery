import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './app/screens/listScreen';
import PhotoScreen from './app/screens/photoScreen';
import LoadPictures from './app/utils/loadPictures';
import { styles } from './app/styles/styles';
import { FlatList, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    console.log("gesssy")

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
