import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import reducers from './src/reducers';

import MainNavigator from './src/components/navigators/MainNavigator';
import LoginNavigator from './src/components/navigators/LoginNavigator';

const RootStack = createStackNavigator();
const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal">
          <RootStack.Screen
            name="Main"
            component={MainNavigator}
            options={{ headerShown: false }}
          />
          <RootStack.Screen name="LogIn"
            component={LoginNavigator}
            options={{ headerShown: false }} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
