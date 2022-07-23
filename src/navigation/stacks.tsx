import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScene,
  LoginScene,
  PhoneScene,
  NameScene,
  LocationScene,
} from "../scenes";

const Private = createStackNavigator();
const Public = createStackNavigator();

const defaultOptions = { headerShown: false, gestureEnabled: true };

export const PublicStack = (): JSX.Element => (
  <Public.Navigator initialRouteName="HOME" screenOptions={defaultOptions}>
    <Public.Screen name="LOGIN" component={LoginScene} />
    <Public.Screen name="PHONE" component={PhoneScene} />
    <Public.Screen name="NAME" component={NameScene} />
    <Private.Screen name="LOCATION" component={LocationScene} />
  </Public.Navigator>
);

export const PrivateStack = (): JSX.Element => (
  <Private.Navigator initialRouteName="HOME" screenOptions={defaultOptions}>
    <Private.Screen name="HOME" component={HomeScene} />
  </Private.Navigator>
);
