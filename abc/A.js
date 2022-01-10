import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity ,Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Appearance } from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export default class A extends Component {
  render() {
    return (
      <>
        <DrawerContentScrollView>
          <View
            style={{
              backgroundColor: 'red',
              padding: 50,
              flexDirection: 'row',
              justifyContent: 'center',
              borderBottomColor: 'blue',
              borderBottomWidth: 2,
            }}>
            <View style={{borderRadius: 80}}>
              <Image
                source={require('../assets/music.png')}
                style={{
                  width: 210,
                  height: 120,
                  marginLeft: 5,
                  borderRadius: 200 / 2,
                }}
              />
            </View>
          </View>
          <View style={{borderBottomColor: 'blue', borderBottomWidth: 2}}>
            <DrawerItem
              icon={({size}) => (
                <Ionicons
                  name="logo-ionitron"
                  color="fuchsia"
                  size={size}
                  raised={true}
                />
              )}
              label="Home"
              labelStyle={{color: 'red'}}
              onPress={() => this.props.navigation.navigate('NewsApp')}
            />
          </View>
          <View style={{borderBottomColor: 'blue', borderBottomWidth: 2}}>
            <DrawerItem
              icon={({size}) => (
                <Ionicons
                  name="radio"
                  color="fuchsia"
                  size={size}
                  raised={true}
                />
              )}
              label="ApiV"
              labelStyle={{color: 'red'}}
              onPress={() => this.props.navigation.navigate('ApiV')}
            />
          </View>
          <View style={{borderBottomColor: 'blue', borderBottomWidth: 2}}>
            <DrawerItem
              icon={({color, size}) => (
                <Ionicons
                  name="rose-sharp"
                  color="fuchsia"
                  size={size}
                  raised={true}
                />
              )}
              label="Video"
              labelStyle={{color: 'red'}}
              onPress={() => this.props.navigation.navigate('VideoApi')}
            />
           
          </View>
          <View style={{paddingTop:10}}>
          <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
          </View>
        </DrawerContentScrollView>
        <View style={{position: 'relative'}}>
          <View style={styles.footer}>
            <Ionicons name="log-out-outline" color="fuchsia" size={25} />
            <Text style={{color: 'red'}}>Logout</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 1,
    left: 0,
    marginHorizontal: 110,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
