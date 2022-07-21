import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScene, LoginScene, PhoneScene } from "../scenes";

const Private = createStackNavigator();
const Public = createStackNavigator();

const defaultOptions = { headerShown: false };

export const PublicStack = (): JSX.Element => (
  <Public.Navigator initialRouteName="LOGIN" screenOptions={defaultOptions}>
    <Public.Screen name="LOGIN" component={LoginScene} />
    <Public.Screen name="PHONE" component={PhoneScene} />
    <Private.Screen name="HOME" component={HomeScene} />
  </Public.Navigator>
);

export const PrivateStack = (): JSX.Element => (
  <Private.Navigator initialRouteName="HOME"></Private.Navigator>
);
