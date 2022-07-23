import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PrivateStack, PublicStack } from "./stacks";

const MainStack = createStackNavigator();

type Props = {
  token?: string;
};

const navigatorOptions = {
  headerShown: false,
};

export const Navigation: React.FC<Props> = ({ token }) => (
  <NavigationContainer>
    <MainStack.Navigator
      screenOptions={navigatorOptions}
      initialRouteName={ !!token ? "STACK_PRIVATE" : "STACK_PUBLIC" }
    >
      <MainStack.Screen name="STACK_PRIVATE" component={PrivateStack} />
      <MainStack.Screen name="STACK_PUBLIC" component={PublicStack} />
    </MainStack.Navigator>
  </NavigationContainer>
);
