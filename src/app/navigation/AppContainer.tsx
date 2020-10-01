import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigationService';
import { RootNavigation } from './RootNavigator';
import { MyAppTheme } from '@themes';

export const AppContainer = () => {
    return (
        <NavigationContainer ref={navigationRef} theme={MyAppTheme.default}>
            <RootNavigation token={null}/>
        </NavigationContainer>
    );
};