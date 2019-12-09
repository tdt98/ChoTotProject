import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CategoryItemsScreen from '../screens/CategoryItemsScreen';
import ProductScreen from '../screens/ProductScreen';
import NotificationScreen from '../screens/NotificationScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    CategoryItems: CategoryItemsScreen,
    Product:ProductScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Đi Chợ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused ={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-business'
      }
    />
  ),
};

const NotificationStack = createStackNavigator(
  {
    Notification: NotificationScreen,
  },
  config
);
NotificationStack.navigationOptions = {
  tabBarLabel: 'Thông báo',
  tabBarIcon:({focused}) =>(
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-notifications'
      }
    />
  ),
}

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-chatboxes'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Thiết lập',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-settings'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  NotificationStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
