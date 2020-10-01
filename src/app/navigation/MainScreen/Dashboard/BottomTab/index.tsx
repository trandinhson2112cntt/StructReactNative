import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTab } from '@containers/Dashboard/HomeTab';
import { SettingTab } from '@containers/Dashboard/SettingTab';
const Tab = createBottomTabNavigator();
const tabBarOptions = {
  
}
export const BottomTab = () => {
  return (
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Settings" component={SettingTab} />
      </Tab.Navigator>
  );
}