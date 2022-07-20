import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import { HomeScene, LoginScene } from "../scenes";

const Private = createStackNavigator();
const Public = createStackNavigator();

const defaultOptions = { headerShown: false };

export const PublicStack = (): JSX.Element => (
  <Public.Navigator initialRouteName="LOGIN" screenOptions={defaultOptions}>
    <Public.Screen name="LOGIN" component={LoginScene} />
  </Public.Navigator>
);

export const PrivateStack = (): JSX.Element => (
  <Private.Navigator initialRouteName="HOME">
    <Private.Screen name="HOME" component={HomeScene} />
  </Private.Navigator>
);
