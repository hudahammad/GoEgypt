import React,{Component} from 'react';
import {View, TextInput, Text} from 'react-native';

export default class AddComment extends Component {
    static navigationOptions = {
        title: 'GoEgypt',
        headerStyle: {
          backgroundColor: '#192a56',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        
      }
 render(){
    return(
        <View style={{ padding:10, justifyContent:'space-between', marginTop:10, marginVertical:10}}>
            <TextInput
                style={{height: 50,borderColor:'#000',borderRadius: 4,borderWidth: 0.5, textAlign:'center'}}
                placeholder="الاسم كامل"
            />
            <TextInput
                style={{height: 50,borderColor:'#000',borderRadius: 4,borderWidth: 0.5, textAlign:'center'}}
                placeholder="التعليق"
            />
            <Text style={{height: 50, textAlign:'center',borderColor:'#fff',borderRadius: 4,borderWidth: 0.5, fontSize:18,backgroundColor:'#00b894'}}> إرسال التعليق</Text>
        </View>
        );
    }
}