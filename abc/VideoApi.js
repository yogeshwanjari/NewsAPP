import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class VideoApi extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [],
          isLoading: false,
          activeIndex: 0
    
        };
      }
    
      async componentDidMount() {
        this.setState({ isLoading: true });
        await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=021c04409b5e4e7dbf64df01c4562d24').then(response => response.json()).then(responseJson => {
            console.log('cddddd', responseJson);
            this.setState({
              data:responseJson,
              isLoading: false
            });
          })
          .catch(error => console.log(error));
      }
    render() {
        return (
            <View>
                <Text>{this.state.data}</Text>
            </View>
        )
    }
}
