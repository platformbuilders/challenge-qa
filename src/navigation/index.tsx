import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PrivateStack, PublicStack } from "./stacks";

const MainStack = createStackNavigator();

type Props = {
  token?: string;
};

export const Navigation: React.FC<Props> = ({ token }) => {
  const navigatorOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={navigatorOptions}
        initialRouteName="STACK_PUBLIC"
      >
        <MainStack.Screen name="STACK_PRIVATE" component={PrivateStack} />
        <MainStack.Screen name="STACK_PUBLIC" component={PublicStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
