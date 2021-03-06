import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import MyPropagationScreen from '../../screens/MyPropagationsScreen';
import WishListScreen from '../../screens/WishListScreen';
import MyAccountScreenConnected from '../../screens/MyAccountScreen';
import HomeIcon from '../../shared/icons/home-outline.svg';
import SearchIcon from '../../shared/icons/search-outline.svg';
import MyPropagationIcon from '../../shared/icons/leaf-outline.svg';
import WishListIcon from '../../shared/icons/heart-outline.svg';
import MyAccountIcon from '../../shared/icons/person-outline.svg';

const Tab = createBottomTabNavigator();

function MainNavigator(props) {
  const {authData, subscribeAuthChange} = props;
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const subscriber = subscribeAuthChange(initializing, setInitializing);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const onlyWhenLoggedIn = ({navigation}) => ({
    tabPress: (e) => {
      if (authData.user == null) {
        e.preventDefault();
        navigation.navigate('LogIn');
      }
    },
  });

  return (
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
      <Tab.Screen
        name="My Propagations"
        component={MyPropagationScreen}
        listeners={onlyWhenLoggedIn}
      />
      <Tab.Screen
        name="Wish List"
        component={WishListScreen}
        listeners={onlyWhenLoggedIn}
      />
      <Tab.Screen
        name="My Account"
        component={MyAccountScreenConnected}
        listeners={onlyWhenLoggedIn}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
