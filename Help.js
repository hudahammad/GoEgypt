import React ,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import Header from './Header';
import { Button } from 'native-base';

class Help extends Component{
    static navigationOptions = {
        title: 'تواصل معانا',
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
               
                <Text  style={{fontSize:20, textAlign:'center',  marginVertical:10}}>نعمل دوما علي تطوير التطبيق للافضل . ونحتاج لذلك التطوير كل المساعدة الممكنة فهل ترغب في مساعدتنا في التطبيق؟ تلك هي الامور التي نحتاج مساعدة فيها 
                </Text>
                <Button block style={{backgroundColor:'#192a56', marginVertical:10}}  onPress={() => navigate('Share')}><Text  style={styles.textStyle}> مشاركة التطبيق بين معارفك </Text></Button>
                <Button block  style={{backgroundColor:'#192a56',marginVertical:10}} onPress={() => navigate('ContactUs')}><Text style={styles.textStyle} > ساعدنا في تقديم ترجمة أفضل  </Text></Button>
                <Button block  style={{backgroundColor:'#192a56',marginVertical:10}}  onPress={() => navigate('ContactUs')}><Text  style={styles.textStyle}> ساعدنا لتقديم تصميم أفضل للتطبيق  </Text></Button>
               
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
export default Help;