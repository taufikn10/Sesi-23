import React from "react";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
// Bottom Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import "react-native-gesture-handler";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
// Stack Navigator
const StackBotTab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <StackBotTab.Navigator>
        <StackBotTab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <StackBotTab.Screen
          name="PostPage"
          component={ProfilePage}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </StackBotTab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
