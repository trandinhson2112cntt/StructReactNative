/**
 * Create struct of dashboard screen (home screen)
 * example: Struct of Tab, Add Drawer, etc...
 */

import React from 'react';
import { APP_SCREEN } from '@navigation/screenTypes';
import { createStackNavigator } from '@react-navigation/stack';
// import { MainDrawerScreen } from './MainDrawer';
import { BottomTab } from './BottomTab';
const Dashboard = createStackNavigator();
const screenOptions = {
    // gestureEnabled: false,
};
export const DashboardScreen = () => (
    <Dashboard.Navigator screenOptions={screenOptions} headerMode={'none'}>
        {/* <Dashboard.Screen name={APP_SCREEN.APP.ROOT} component={MainDrawerScreen} /> */}
        <Dashboard.Screen name={APP_SCREEN.APP.HOME_SCREEN.HOME_TAB.ROOT} component={BottomTab} />
    </Dashboard.Navigator>
);
