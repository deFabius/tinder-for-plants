import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import reducers from './src/stores/reducers';

import MainNavigator from './src/components/navigators/MainNavigator';
import LoginNavigator from './src/components/navigators/LoginNavigator';

const RootStack = createStackNavigator();
const store = createStore(reducers, applyMiddleware(thunk));

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
