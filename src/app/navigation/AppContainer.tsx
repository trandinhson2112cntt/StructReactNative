import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigationService';
import { RootNavigation } from './RootNavigator';
import { MyAppTheme } from '@themes';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadApp } from '@store/app_config/action';
import { IRootState } from '@store/rootStates';

export const AppContainer = () => {
    const appConfigState = useSelector((state: IRootState) => state.appConfig)
    console.log('===============appConfigState=====================');
    console.log(appConfigState);
    console.log('====================================');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(onLoadApp())
    }, [])
    return (
        <NavigationContainer ref={navigationRef} theme={MyAppTheme[appConfigState.theme]}>
            <RootNavigation token={null} />
        </NavigationContainer>
    );
};