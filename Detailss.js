import React, { Component } from 'react';
import { Text, View , TouchableHighlight} from 'react-native';

export default class NameDetails extends Component {
  static navigationOptions = {
    title: 'ArabNames',
    headerStyle: {
      backgroundColor: '#DA563D',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    
  }
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    }
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', padding:10}}>
        <View style={{paddingVertical:10,alignSelf:'stretch'}}>
          <Text style={{fontSize:25, fontWeight:'bold',color:'#fff' ,textAlign: 'center',backgroundColor:'#0984e3',alignItems:'center', height:50}}>{this.props.navigation.getParam('name')}</Text>
          <Text style={{textAlign:'center', fontSize: 18}} >{this.props.navigation.getParam('details')}</Text>
        </View>
        <View style={{justifyContent: 'space-between' ,alignSelf:'stretch', flexDirection: 'row',backgroundColor:'#b2bec3', alignItems:'center' }} >
            <Text style={{ textAlign: 'center',height:50,fontWeight:'bold'}}>تعليقات الزوار :</Text>
            <TouchableHighlight onPress={()=>navigate('AddComment')}>
              <Text style={{backgroundColor:'#d63031',color:'#fff',fontWeight:'bold' ,textAlign: 'center', height:30, width:100}}>
                إضافة تعليق
              </Text>
            </TouchableHighlight>
          </View>
          <Text  style={{fontSize: 18, fontWeight:'bold',paddingTop:10 ,height: 50, borderRadius: 4, borderWidth: 0.5, borderColor: '#000', textAlign:'center',alignSelf:'stretch'}}>لا توجد تعليقات حتي الان</Text>
      </View>


        
    );
  }
}
