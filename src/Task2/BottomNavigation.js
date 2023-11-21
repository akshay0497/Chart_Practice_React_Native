import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MainScreen from './MainScreen';
import Cart from './Cart';
import Wishlist from './Wishlist';
import You from './You';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
import MoodTask from '../Task/MoodTask';
import FigmaUi from '../Task/FigmaUi';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: 'red',
    })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{headerTitle:"Your Cart",
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size, tabBarActiveBackgroundColor}) => (
            <FontAwesome5 name="shopping-cart" tabBarActiveBackgroundColor={"red"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{headerTitle:"Your Wishlist",
          tabBarLabel: 'Wishlist',
          tabBarIcon: ({color, size}) => (
            <EvilIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="You"
        component={You}
        options={{
          tabBarLabel: 'You',
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="BharatERP"
        component={FigmaUi}
        options={{headerShown:false,
          tabBarLabel: 'BharatERP',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="interpreter-mode" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mood"
        component={MoodTask}
        options={{headerShown:false,
          tabBarLabel: 'Mood',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="interpreter-mode" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

