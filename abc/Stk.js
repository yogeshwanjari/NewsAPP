import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, Share} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TransitionSpecs} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Tabs from './Tabs';
import NewsApp from './NewsApp';
import ApiV from './ApiV';
import Swipe from './Swipe';
import DetailScreen from './DetailScreen';
import VideoApi from './VideoApi';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();

class Stk extends Component {

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerTitleAlign: 'center',
            title: 'ShortNews',

            headerRight: () => (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Ionicons
                    onPress={() => alert('Have a nice day')}
                    name="md-search"
                    size={25}
                    color="blue"
                    style={{marginHorizontal: 20}}
                  />
                </View>
                <View style={{}}>
                  <TouchableOpacity>

                  <Ionicons
                      onPress={() => alert()}
                      name="notifications"
                      size={25}
                      color="blue"
                    />
                  </TouchableOpacity>
                </View>
                <View style={{marginHorizontal: 10}}>
                  <TouchableOpacity>
                    <Ionicons
                      onPress={this.onShare}
                      name="share-social"
                      size={25}
                      color="blue"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ),

            headerLeft: () => (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Ionicons
                    onPress={() => this.props.navigation.toggleDrawer()}
                    name="menu"
                    size={25}
                    color="white"
                    style={{marginHorizontal: 2}}
                  />
                </View>
              </View>
            ),
          }}
        />

        <Stack.Screen
          name="NewsApp"
          component={NewsApp}
          options={{
            headerTintColor: 'tomato',
            fontWeight: 'bold',
            justifyContent: 'center',
            backgroundColor: '#f4511e',
            justifyContent: 'center',
            textalign: 'center',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="ApiV" component={ApiV} />
        <Stack.Screen name="VideoApi" component={VideoApi} />
        <Stack.Screen name="Swipe" component={Swipe} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    );
  }
}

export default Stk;
