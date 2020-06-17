import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import Results from './Results';

const Stack = createStackNavigator();

const SearchAndResult = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        options={{title: ''}}
        component={SearchScreen}
      />
      <Stack.Screen
        name="Result"
        options={{title: 'RESULTS'}}
        component={Results}
      />
    </Stack.Navigator>
  );
};

export default SearchAndResult;
