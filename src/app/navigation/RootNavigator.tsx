import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { APP_SCREEN } from './screenTypes';
import { SplashScreen } from '@containers/SplashScreen';
import { MainStack } from './MainScreen';
const RootStack = createStackNavigator();
export const RootNavigation = ({ token }: { token: any }) => (
  <RootStack.Navigator headerMode={'none'} screenOptions={{}}>
    {
      token == null ?
        <RootStack.Screen
          options={{ gestureEnabled: false }}
          name={APP_SCREEN.APP.ROOT}
          component={MainStack}
        /> :
        <RootStack.Screen
          options={{ gestureEnabled: false }}
          name={APP_SCREEN.SPLASH}
          component={SplashScreen}
        />
    }
  </RootStack.Navigator>
);
