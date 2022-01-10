import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import Swipe from './Swipe';
import {WebView} from 'react-native-webview';
import ApiV from './ApiV';
import Carousel from 'react-native-snap-carousel';

export default class Pi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: false,
      activeIndex: 0,
    };
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    await fetch(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=021c04409b5e4e7dbf64df01c4562d24',
    )
      .then(response => response.json())
      .then(responseJson => {
        // console.log('currrr', responseJson.articles);
        this.setState({
          dataSource: responseJson.articles,
          isLoading: false,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <View>
              <Swipe />
              <FlatList
                padding={25}
                paddingTop={50}
                data={this.state.dataSource}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('ApiV', {
                        item: item,
                      });
                    }}
                    style={styles.item}>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        padding: 12,
                      }}>
                      <Text style={styles.title}>
                        {item.author}
                        {'\n'}
                        {'\n'}
                        {item.description}
                        {item.name}
                        <Text
                          style={{
                            color: 'blue',
                            // paddingHorizontal: 10,
                            // paddingVertical: 10,
                          }}>
                          <Text
                            onPress={() =>
                              this.props.navigation.navigate('DetailScreen', {
                                item: item.url,
                              })
                            }>
                            ...see more
                          </Text>
                        </Text>
                      </Text>

                      <Image
                        style={styles.img}
                        source={{uri: item.urlToImage}}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'floralwhite ',
    color: 'orange',
    bordercolor: 'blueviolet',
  },
  item: {
    backgroundColor: 'white',
    padding: 1,
    alignItems: 'flex-start',
    marginVertical: 19,
    marginHorizontal: 5,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    height: 'auto',
    width: 200,
    justifyContent: 'center',
    paddingHorizontal: 1,
    paddingVertical: 1,
    fontWeight: 'bold',
  },

  img: {
    height: 10,
    marginTop: 6,
    width: 50,
    height: 50,
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    // borderWidth: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },

  wrapper: {},
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
