import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './components/screens/HomeScreen';
import SearchScreen from './components/screens/SearchScreen';
import MyPropagationScreen from './components/screens/MyPropagationsScreen';
import WishListScreen from './components/screens/WishListScreen';
import MyAccountScreen from './components/screens/MyAccountScreen';
import HomeIcon from './components/shared/icons/home-outline.svg';
import SearchIcon from './components/shared/icons/search-outline.svg';
import MyPropagationIcon from './components/shared/icons/leaf-outline.svg';
import WishListIcon from './components/shared/icons/heart-outline.svg';
import MyAccountIcon from './components/shared/icons/person-outline.svg';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let Icon;

            const iconStyle = {
              height: size,
              stroke: color,
              color: color,
            };

            switch (route.name) {
              case 'Home':
                Icon = <HomeIcon {...iconStyle} />;
                break;
              case 'Search':
                Icon = <SearchIcon {...iconStyle} />;
                break;
              case 'My Propagations':
                Icon = <MyPropagationIcon {...iconStyle} />;
                break;
              case 'Wish List':
                Icon = <WishListIcon {...iconStyle} />;
                break;
              case 'My Account':
                Icon = <MyAccountIcon {...iconStyle} />;
                break;
            }

            // You can return any component that you like here!
            return Icon;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="My Propagations" component={MyPropagationScreen} />
        <Tab.Screen name="Wish List" component={WishListScreen} />
        <Tab.Screen name="My Account" component={MyAccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
