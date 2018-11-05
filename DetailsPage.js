import React, { Component } from 'react';
import { Text, View , TouchableHighlight, Image, Button,ImageBackground,ScrollView} from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';


export default class NameDetails extends Component {
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
      <ScrollView style={{ flex: 1,marginBottom:50 }}>
     
            <Image
            style={{ width: "100%", height: 250,marginBottom:100 }}
            resizeMode="cover"
            source={{ uri: this.props.navigation.getParam('cover') }}
          />
          <View style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            position: "absolute",
            top: 250-75,
            alignSelf:"center",
            zIndex:10000,
            borderColor: '#000',
          }}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderColor: '#000',
                borderRadius: 75,
                alignSelf: 'center',
              }}
              source={{uri: this.props.navigation.getParam('profile')}}
                />
          </View>
        <View style={{flexDirection:'column',alignItems:'center'}}>
          <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center', color:'#192a56', paddingBottom:10}}>{this.props.navigation.getParam('title')}</Text>
          <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                fullStarColor={'#ffc048'}
                paddingBottom='10'
                />
          <Button
            
            title="مشاركة"
            onPress={() => navigate('Share')}
            color="#192a56"
            accessibilityLabel="Learn more about this purple button"
            borderColor='#fff'
            borderRadius='10'
            paddingBottom='10'
            width='200'
           
          />      
          <Text style={{fontSize:15,  alignItems:'center', paddingBottom:10, fontFamily:'etalic'}}>{this.props.navigation.getParam('details')}</Text>

          </View>
          <View  style={{ flexDirection: 'row', width:'100%',height:45,borderBottomWidth:0.3, borderColor: '#192a56', justifyContent:'flex-end',alignItems:'center'}}>
              <Text  style={{fontSize:18,fontWeight:'bold',alignItems:'center'}}>{this.props.navigation.getParam('add')}</Text>
              <Image style={{alignItems:'center', marginLeft:10}} source={ require ('../img/pin.png')}  />
             

          </View>

          <View style={{ flexDirection: 'row', width:'100%',height:45,borderBottomWidth:0.3, borderColor: '#192a56', justifyContent:'flex-end',alignItems:'center'}}>
          <Text  style={{fontSize:18,fontWeight:'bold',  alignItems:'center'}}>{this.props.navigation.getParam('phone')}</Text>
          <Image  style={{alignItems:'center', marginLeft:10}} source={ require ('../img/phone.png')}  />
             

          </View>

          <View style={{ flexDirection: 'row', width:'100%',height:45,borderBottomWidth:0.3, borderColor: '#192a56', justifyContent:'flex-end', alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold',  textAlign:'center'}}>{this.props.navigation.getParam('time')}</Text>
          <Image  style={{alignItems:'center', marginLeft:10}}  source={ require ('../img/clock.png')}  />
             

          </View>

          <View style={{ flexDirection: 'row', width:'100%',height: 45, borderBottomWidth:0.3, borderColor: '#192a56', justifyContent:'flex-end',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold',  textAlign:'center'}}>{this.props.navigation.getParam('price')}</Text>
          <Image  style={{alignItems:'center', marginLeft:10}}  source={ require ('../img/dollarbills.png')}  />
              

          </View>
          <View style={{justifyContent: 'space-between' ,alignSelf:'stretch', flexDirection: 'row',backgroundColor:'#b2bec3', alignItems:'stretch', }} >
              
            <TouchableHighlight onPress={()=>navigate('AddComment')}>
              <Text style={{backgroundColor:'#192a56',color:'#fff',fontWeight:'bold' ,textAlign: 'center', height:30, width:100, marginTop:10,}}>
                إضافة تعليق
              </Text>
            </TouchableHighlight>
            <View  style={{ flexDirection: 'row', justifyContent:'flex-end',alignItems:'center', height:45}}>
                <Text style={{ textAlign: 'center',height:50,fontWeight:'bold' , color:'#192a56', marginTop:25}}>تعليقات الزوار :</Text>
                <Image  style={{alignItems:'center', marginLeft:10,}} source={ require ('../img/comment.png')}  />
                
              </View>
          </View>

          <Text  style={{fontSize: 18, fontWeight:'bold',paddingTop:10 ,height: 50, borderRadius: 4,borderBottomWidth:0.3, borderColor: '#000', textAlign:'center',alignSelf:'stretch'}}>لا توجد تعليقات حتي الان</Text>
   


      </ScrollView>
      
    );
  }
}

