import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, icons } from '../../constants';
import Home from '../../screens/HomeScreen';
import Explore from '../../screens/Explore';
import Favourite from '../../screens/Favorites';
import Account from '../../screens/Account';
import Cart from '../../screens/My Cart';
import styles from './style';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarActiveTintColor: COLORS.green,
  tabBarInactiveTintColor: COLORS.black,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: styles.tabstyle,
  tabBarLabelStyle: styles.label,
};

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
          title: 'Shop',
          tabBarIcon: ({ color }) => (
            <Image style={[styles.home, { tintColor: color }]} source={icons.shop} resizeMode="contain" />
          ),
        })}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={() => ({
          headerShown: true,
          headerTitle: 'Find Product',
          headerTitleAlign: 'center',
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Image style={[styles.explore, { tintColor: color }]} source={icons.explore} resizeMode="contain" />
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={() => ({
          headerShown: true,
          headerTitle: 'My Cart',
          headerTitleAlign: 'center',
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <Image style={[styles.cart, { tintColor: color }]} source={icons.cart} resizeMode="contain" />
          ),
        })}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={() => ({
          headerShown: true,
          headerTitle: 'Favourite',
          headerTitleAlign: 'center',
          tabBarLabel: 'Favourite',
          tabBarIcon: ({ color }) => (
            <Image style={[styles.fav, { tintColor: color }]} source={icons.fav} resizeMode="contain" />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={() => ({
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <Image style={[styles.account, { tintColor: color }]} source={icons.account} resizeMode="contain" />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;