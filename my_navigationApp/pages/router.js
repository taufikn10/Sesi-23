import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// Stack Navigator
import { createStackNavigator } from "@react-navigation/stack";
// Stack Drawer
import { createDrawerNavigator } from "@react-navigation/drawer";
// Bottom Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Top Tab Navigation
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "./Home";
import PostPage from "./PostPage";
import "react-native-gesture-handler";

// Stack Navigator
const StackNavigator = createStackNavigator();
// Stack Drawer
const StackDrawer = createDrawerNavigator();
// Stack Navigator
const StackBotTab = createBottomTabNavigator();
// Stack Drawer
const StackTopTab = createMaterialTopTabNavigator();

const RouteApp = () => {
  return (
    <NavigationContainer>
      <StackBotTab.Navigator>
        <StackBotTab.Screen name="HomePage" component={Home} />
        <StackBotTab.Screen name="PostPage" component={PostPage} />
      </StackBotTab.Navigator>
    </NavigationContainer>
  );
};

export default RouteApp;
