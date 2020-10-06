import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigationService';
import { RootNavigation } from './RootNavigator';
import { MyAppTheme, ThemeType } from '@themes';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadApp, onSetAppMode } from '@store/app_config/action';
import { IRootState } from '@store/rootStates';
import * as LocalStorage from '@utils/storage'
import { asyncStorageKeys, AsyncStorageKeys } from '@utils/storage/keys';
import { checkKeyInObject } from '@common';
export const AppContainer = () => {
    const dispatch = useDispatch();
    const appConfigState = useSelector((state: IRootState) => state.appConfig)
    console.log('===============appConfigState=====================');
    console.log(appConfigState);
    console.log('====================================');
    useEffect(() => {
        // dispatch(onLoadApp());           
    }, []);
    return (
        <NavigationContainer ref={navigationRef} theme={MyAppTheme[appConfigState.theme]}>
            <RootNavigation token={null} />
        </NavigationContainer>
    );
};