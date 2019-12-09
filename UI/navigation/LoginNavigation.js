import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';




const loginNavigator = createStackNavigator({
    Login: LoginScreen,
    Register:RegisterScreen,
})
loginNavigator.path = '';

export default loginNavigator;