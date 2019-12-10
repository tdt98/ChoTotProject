import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import tabNavigator from "./MainTabNavigator";
import loginNavigator from "./LoginNavigation";

export default createAppContainer(
  createSwitchNavigator(
    {
      LoginStack: {
        screen: loginNavigator
      },
      MainStack: {
        screen: tabNavigator
      }
    },
    {
      initialRouteName: "LoginStack"

      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    }
  )
);
