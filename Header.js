import React, { Component } from 'react';
import {Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {withNavigation} from 'react-navigation';

 class HeaderExample extends Component  {
  static navigationOptions = ({navigation}) => ({
    header: null
  });
  
  render() {
    const {navigate } = this.props.navigation;
    return (
        <Header style={{backgroundColor:'#192a56'}}>
          <Left>
            <Button transparent onPress={() => navigate('HomePage')}>
              <Icon  name='home' />
            </Button>
          </Left>
          <Body>
            <Title style={styles.textStyle}>Go Egypt</Title>
          </Body>
          <Right>
            <Button transparent  onPress={()=>navigate('AboutApp')}>
              <Icon  style={{fontSize: 30}} name='ios-help'/>
            </Button>
          </Right>
        </Header>
    );
  }
}
const styles={
    textStyle:{
        fontSize:25,
        fontWeight: 'bold',
        textAlign:'center'
    }
};
export default withNavigation(HeaderExample);
