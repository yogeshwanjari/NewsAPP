import React, {Component} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import DetailScreen from './abc/DetailScreen';
import Stk from './abc/Stk';
import A from './abc/A';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from './abc/Tabs';
const Drawer = createDrawerNavigator();
class S extends Component {
  render() {
    return (
      <NavigationContainer initialRouteName="NewsApp">
        <Drawer.Navigator drawerContent={props => <A {...props} />}>
          <Drawer.Screen
            name="stk"
            component={Stk}
            options={{headerShown:false}}
          />
  
  <Drawer.Screen
            name="hh"
            component={DetailScreen}
          />
   
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default S;
