import React ,{Component} from 'react';
import {View,Text,Image,TextInput, ScrollView} from 'react-native';
import Header from './Header';
import { Button } from 'native-base';

class ContactUs extends Component{
    static navigationOptions = {
        title:  'تواصل معنا',
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
            
            <ScrollView>
            <View style={{flex:1, flexDirection:'column', alignItems:'center',padding:10 , justifyContent:'flex-start' }}>
                <Image  source = { require ('../img/logo.png') }
                        style = {{ width: 140, height: 140 , alignItems:'center', marginVertical:10}}/>
               
                <Text  style={{fontSize:20, textAlign:'center',  marginVertical:7}}>اذا كان لديك طلب او استفسار او اقتراح معين تفضل بارسال طلبك من خلال احد عناوين البريد الالكتروني التالية وسنعمل علي التواصل معك فورا :
                </Text>
                <Text  style={{fontSize:20, textAlign:'center',  marginVertical:7}}>info@goegypt.today </Text>
                <Text  style={{fontSize:20, textAlign:'center',   marginVertical:7}}> hosam.zewain@gmail.com</Text>
                <Text style={{textAlign:'center',  marginVertical:7,fontSize:18,}}>كما يمكنك التواصل معنا من خلاتل موقعنا الالكتروني الرسمي :</Text>
                <Text  style={{fontSize:20, textAlign:'center',   marginVertical:10}}>info@goegypt.today </Text>
                <Text style={{fontSize:20,fontWeight:'bold' }}>اسمك</Text>
                <TextInput
                style={{height: 50,width: 400,borderColor:'#000',borderRadius: 4,borderWidth: 0.5}}
                placeholder="الرجاء ادخال اسمك"
                />
                <Text style={{fontSize:20,fontWeight:'bold',marginVertical:7 }}>ايميلك او هاتفك </Text>
                <TextInput
                style={{height: 50,width: 400 ,borderColor:'#000',borderRadius: 4,borderWidth: 0.5}}
                />
                <Text style={{fontSize:18,fontWeight:'bold',marginVertical:7}} > رسالتك </Text>
                <TextInput
                style={{height: 150,width: 400, borderColor:'#000',borderRadius: 4,borderWidth: 0.5}}
                />
                  <Text style={{fontSize:18,fontWeight:'bold',marginVertical:7}} > يرجي الاجابة علي السؤال </Text>
                <TextInput
                style={{height: 50,width: 400, borderColor:'#000',borderRadius: 4,borderWidth: 0.5}}
                />
                 <Button  block  style={{backgroundColor:'#192a56',marginVertical:10}}>
                    <Text style={{color:'#fff', fontSize: 20}}>ارسال</Text>
                </Button>

            </View>
            </ScrollView>
        


        );
    }

}
const styles = {
    textStyle:{
        color :'#fff',
        fontSize: 20 

    }
}
export default ContactUs;