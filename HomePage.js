import React,{Component} from 'react';
import {  ActivityIndicator, Text, View, ScrollView ,TouchableOpacity, Image,StyleSheet,Platform} from 'react-native';
import StarRating from 'react-native-star-rating';
import Header from './Header';

export default class HomePage extends React.Component {
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
 

    constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  componentDidMount(){
    return fetch("https://egyptian-antiquities.com/wp-json/wp/v2/posts?per_page=30")
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource:responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  render(){
    return(
        <View>
        {this.returnContent()}
        </View>
    );
  }

  returnContent(){
    const { navigate } = this.props.navigation;

      if(this.state.isLoading){
          return(
              <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
              </View>
      )

      }else{
             return(
       
                <ScrollView style={{paddingVertical: 10, paddingHorizontal:10, borderColor:'#fff',borderRadius:2,borderWidth: 0.5}} > 
                    {this.state.dataSource.map((dataSource) => (
                    <TouchableOpacity   onPress={()=>navigate('DetailsPage',{cover:dataSource.acf.image1,
                            profile:dataSource.better_featured_image.source_url, title:dataSource.title.rendered ,details:dataSource.content.rendered,add:dataSource.acf.address_ar,phone:dataSource.acf.phone,
                            time:dataSource.acf.timing_ar,price:dataSource.acf.pricear
                          })}>
                    <View style={{justifyContent:'flex-start',alignSelf:'stretch', flexDirection: 'row',borderColor:'#808e9b',borderBottomWidth:1 }}  key={dataSource.id} >
                       <Image source = {{ uri: dataSource.better_featured_image.source_url }} style={styles.imageViewContainer} />
                       <View  style={{ flexDirection: 'column' }}>
                                    <Text style={styles.textViewContainer} > {dataSource.title.rendered}</Text>
                                    <Text style={{fontSize:15}} > {dataSource.excerpt.rendered}</Text>
                                    <StarRating
                                      disabled={false}
                                      spacing={8}
                                      maxStars={9}
                                      rating={this.state.starCount}
                                      selectedStar={(rating) => this.onStarRatingPress(rating)}
                                      fullStarColor={'#ffc048'}
                                      starSize= {30}
                                      
                                    />
                                      <View   style={{ justifyContent: 'flex-start', alignItems: 'center',flexDirection: 'row'}}>
                                          <View  style={{ flexDirection: 'row', alignItems:'center', borderColor:'#fff' ,borderRadius:10 }}>
                                          <Text style={{fontSize:15}}> {dataSource.acf.Region_ar}</Text>
                                            <Image  source={ require ('../img/pin.png')}  />
                                      
                                          </View>
                                          <View  style={{ flexDirection: 'row',  alignItems:'center'}}>
                                          <Text style={{fontSize:15, }}> {dataSource.acf.pricear}</Text>

                                            <Image  source={ require ('../img/dollarsign.png')}  />
                                          </View>

                                      </View>
                                  </View>

                            </View>
                            </TouchableOpacity>
                      
                         ))}
                </ScrollView> 
            
            
                    );   
      }
  }
}
const styles = StyleSheet.create({
  MainContainer :{
    
    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex:1,
    margin: 5,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    
    },
  
  
  imageViewContainer: {
  width: '40%',
  height: 120 ,
  margin: 10,
  borderRadius : 10
  
  },
  
  textViewContainer: {
  
    textAlignVertical:'center',
    width:'50%', 
    padding:5,
    fontSize:20.
  
  }
  
  });
  
