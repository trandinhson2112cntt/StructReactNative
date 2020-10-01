/**
 * List screen of app
 */

import React from 'react';
import { APP_SCREEN } from '@navigation/screenTypes';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen } from './Dashboard';
import { DetailScreen } from '@containers/DetailScreen';
const MainScreen = createStackNavigator();
const screenOptions = {
  // gestureEnabled: false,
};
export const MainStack = () => (
  <MainScreen.Navigator screenOptions={screenOptions} headerMode={'none'}>
    <MainScreen.Screen
      name={APP_SCREEN.APP.ROOT}
      component={DashboardScreen}
    />
    <MainScreen.Screen
      name={APP_SCREEN.APP.DETAIL_SCREEN}
      component={DetailScreen}
    />
  </MainScreen.Navigator>
);
