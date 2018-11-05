import React ,{Component} from 'react';
import {View, Text, Image, ActivityIndicator,AppRegistry,ImageBackground} from 'react-native';

  
export default class SplashPage extends Component{
   static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
        setTimeout(() => {
          requestAnimationFrame(() => {
            this.props.navigation.navigate('HomePage');
          });
        }, 1000);
      }
    
    render(){

    return (
        <ImageBackground source={ require ('../img/background1.jpeg')} style={{width: '100%', height: '100%'}}>
          <Image  source={ require ('../img/logo.png')}  style={{width: 190, height: 190,borderRadius: 20 ,alignItems:'center', marginTop:70,marginLeft:110}}/>
          <ActivityIndicator style={{ alignItems: 'center'}}/>
        </ImageBackground>
      );
    }
}

    
AppRegistry.registerComponent('SplashPage', () => SplashPage);
