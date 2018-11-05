import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import SplashPage from './SplashPage';
import HomePage from './HomePage';
import AboutApp from './AboutApp';
import Header from './Header';
import DetailsPage from './DetailsPage';
import AddComment from './AddComment';
import ContactUs from './ContactUs';
import Help from './Help';
import Share from './Share';



  const Navigator = createStackNavigator({
        Home: { screen: SplashPage},
        HomePage: { screen: HomePage },
        DetailsPage: { screen: DetailsPage},
        Header: { screen: Header}, 
        AddComment: { screen: AddComment} ,
        ContactUs: {screen: ContactUs},
        Help: {screen: Help},
        Share: {screen: Share}

      });            
export default Navigator ;