import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../../screens/SignUpScreen';
import LoginScreen from '../../screens/LoginScreen';

const LoginStack = createStackNavigator();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Log in" component={LoginScreen} />
      <LoginStack.Screen name="Sign up" component={SignUpScreen} />
    </LoginStack.Navigator>
  );
}

export default LoginNavigator;
