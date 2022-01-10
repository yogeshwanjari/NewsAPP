

import React, { Component } from 'react';
import { Dimensions, StyleSheet,View,Text,Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window')

export default class Swipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: false,
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
          img: require('../assets/tc.png'),
        },
        {
          title: 'Item 2',
          text: 'Text 2',
          img: require('../assets/tech.png'),
        },
        {
          title: 'Item 3',
          text: 'Text 3',
          img: require('../assets/t.png'),
        },
        {
          title: 'Item 4',
          text: 'Text 4',
          img: require('../assets/tc.png'),
        },
        {
          title: 'Item 5',
          text: 'Text 5',
          img: require('../assets/t.png'),
        },
      ],
    };
  }
  _renderItem({item, index}) {
    return (
      <View
        key={index.toString()}
        style={{
          width: 300,
          marginHorizontal:40,
          borderRadius:25,
         borderRightColor:'blue'

         
        }}>
        {/* <Text style={{fontSize: 30}}></Text> */}

        <Image resizeMode="cover" style={styles.imgs} source={item.img} />
        {/* <Text>{item.text}</Text> */}
      </View>
    );
  }
    render () {
        return (
            <View style={{borderRadius: 20, paddingTop: 10}}>
            <Carousel
              style={{backgroundColor: 'red'}}
              layout={'default'}
              ref={ref => (this.carousel = ref)}
              data={this.state.carouselItems}
              infinite
              sliderWidth={400}
              itemWidth={400}
              inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              autoplay
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({activeIndex: index})}
            />
          </View> 
            );
          }
        }
        
const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})