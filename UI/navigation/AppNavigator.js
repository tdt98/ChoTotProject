import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import loginNavigator from './LoginNavigation';

export default createAppContainer(
  createSwitchNavigator(
    {
      Login:loginNavigator,
      Main: MainTabNavigator,
    },
    {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    
  })
);
