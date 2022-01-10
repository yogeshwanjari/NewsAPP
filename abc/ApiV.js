import React, { Component } from 'react'
import { Text, View,StyleSheet} from 'react-native'

export default class ApiV extends Component {
    constructor(props) {
        super(props);
        this.state = {
          dataSource: [],
          userData: {}
        };
       
      }

      componentDidMount(){
        //   this.setState({userData:{}})
        //  this.setState({userData:this.props?.route?.params?.item},()=> console.log('componentDidMount()', this.state.userData))
      }

    componentDidUpdate(prevprops,prevState){
        if(prevState.userData.author!=this.state.userData.author || prevprops.route?.params?.item != this.props.route?.params?.item){
            return true;
        }
        else {
            return false;
        }
    }

   componentWillUnmount() {
        clearInterval(this.state);
     }
    render() {
        // const { userData } =
        //  this.state;
        return ( 
            <View style={styles.container}>
          {console.log("params----",this.props?.route?.params?.item)}
                <Text style={styles.text}>{this.props?.route?.params?.item.author}</Text>
                <Text style={styles.text}>{this.props?.route?.params?.item.content}</Text>
                <Text style={styles.text}>{this.props?.route?.params?.item.description}</Text>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        
    },
    text:{
        
        fontSize:20,
        justifyContent: 'center',
        paddingHorizontal:10,
        fontWeight:'bold',
        paddingVertical:10
    
    }

})