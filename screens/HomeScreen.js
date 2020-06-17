import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  Icon,
} from '@ui-kitten/components';
import SearchScreen from './SearchScreen';
import Results from './Results';
import SearchAndResult from './SearchAndResult';

const {Navigator, Screen} = createBottomTabNavigator();

const UsersScreen = () => (
  <Layout
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text category="h1">List</Text>
  </Layout>
);

const ListIcon = props => <Icon {...props} name="list-outline" />;

const SearchIcon = props => <Icon {...props} name="search-outline" />;

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Search" icon={SearchIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="Search" component={SearchAndResult} />
  </Navigator>
);

const HomeScreen = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default HomeScreen;
