import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MarketPlace from './MarketPlace';
import Cart from './Cart';
import Profile from './Profile';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Home = ({navigation, route}) => {
  const {userId, name, email} = route.params;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          animation: 'slide_from_right',
          tabBarStyle: {
            backgroundColor: '#141414',
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: 'lightgreen',
          tabBarInactiveTintColor: 'white',
        }}
        initialRouteName={'Profile'}>
        <Tab.Screen
          name="MarketPlace"
          initialParams={{userId: userId}}
          component={MarketPlace}
          options={{
            tabBarIcon: ({color, size}) => (
              <Text style={{color: color, fontFamily: 'Inter', fontSize: 16}}>
                MarketPlace
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          initialParams={{userId: userId}}
          component={Cart}
          options={{
            tabBarIcon: ({color, size}) => (
              <Text style={{color: color, fontFamily: 'Inter', fontSize: 16}}>
                Cart
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          initialParams={{userId: userId, name: name, email: email}}
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <Text style={{color: color, fontFamily: 'Inter', fontSize: 16}}>
                Profile
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
