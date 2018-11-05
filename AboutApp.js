import React ,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import Header from './Header';
import { Button } from 'native-base';

class AboutApp extends Component{
    static navigationOptions = {
        title: 'معلومات عن التطبيق',
    headerStyle: {
      backgroundColor: '#192a56',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    }
    render(){
        const { navigate } = this.props.navigation;
        return(

            <View style={{flex:1, flexDirection:'column', alignItems:'center',padding:10 , justifyContent:'flex-start' }}>
                <Image  source = { require ('../img/logo.png') }
                        style = {{ width: 140, height: 140 , alignItems:'center', marginVertical:10}}/>
               
                <Text  style={{fontSize:20, textAlign:'center', fontWeight:'bold',  marginVertical:10}}>تطبيق Go Egypt هو دليل للاماكن السياحية والاثرية في مصر يهدف الى نشر معلومات عن جمال الاثار والاماكن السياحية في مصر واماكنها واسعار ومواعيد الزيارة لتلك الاماكن ومعلومات الاتصال بها .
                </Text>
                <Button block style={{backgroundColor:'#192a56', marginVertical:10}}  onPress={() => navigate('ContactUs')} ><Text  style={styles.textStyle}> الاتصال بنا </Text></Button>
                <Button block  style={{backgroundColor:'#192a56',marginVertical:10}}  onPress={() => navigate('Help')}><Text style={styles.textStyle}> تقديم المساعدة </Text></Button>
                <Button block  style={{backgroundColor:'#192a56',marginVertical:10}}><Text  style={styles.textStyle}> CHANGE LANGUAGE </Text></Button>
                <Text  style={{fontSize:20, textAlign:'center', fontWeight:'bold',  marginVertical:10}}>جميع المعلومات المتوفرة في التطبيق تم نسخها من الموقع الرسمي لوزارة الاثار المصرية. </Text>
                <Text  style={{fontSize:20, textAlign:'center', fontWeight:'bold',  marginVertical:10}}> المعلومات بللغة الانجليزيه تم ترجمتها من اللغة العربية باستخدام مترجم جوجل في حالة وجود اي اخطاء رجاءا لا تتردد من التواصل معنا للتصحيح والتعديل .</Text>
                <Text style={{textAlign:'center',  marginVertical:10}}>All Rights reseved for GoEgypttoday 2018 - Version 0.9.0</Text>
            </View>
        


        );
    }

}
const styles = {
    textStyle:{
        color :'#fff',
        fontSize: 20 

    }
}
export default AboutApp;