import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ApiV from './ApiV';
import NewsApp from './NewsApp';
import DetailScreen from './DetailScreen';
import Swipe from './Swipe';

const Tab = createMaterialBottomTabNavigator();

export default class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="NewsApp"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: 'red'}}>
        <Tab.Screen
          name="NewsApp"
          component={NewsApp}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="ApiV"
          component={ApiV}
          options={{
            tabBarLabel: 'Read',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="read" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Swipe"
          component={Swipe}
          options={{
            tabBarLabel: 'Read',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="apple" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            tabBarLabel: 'DetialsScreen',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="bell" color={color} size={25} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
