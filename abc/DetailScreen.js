import React, { Component } from 'react'
import { Text, View,Linking} from 'react-native'
import { WebView } from 'react-native-webview';

export default class DetailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataSource: [],
          data: this?.props?.route?.params
        };
      }

      async componentDidMount(){
        //  console.log("params----", this.props.route.params.item)
      }
    render() {
        const { data } = this.state;
        // console.log('=====',this.state.data)
        return (
            
            <WebView source={{uri:this?.state?.data?.item}} />
        )
    }
}

