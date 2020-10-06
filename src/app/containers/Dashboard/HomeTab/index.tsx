import React from 'react';
import { View, Text, Pressable, Button } from 'react-native';
import { APP_SCREEN } from '@navigation/screenTypes';
import { navigateTo } from '@navigation/navigationService';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '@store/rootStates';
import { onSetAppTheme } from '@store/app_config/action';
import { ThemeType } from '@themes';

export const HomeTab = (props: any) => {
  const appConfig = useSelector((state: IRootState) => state.appConfig);
  const dispatch = useDispatch();
  const _changeTheme = () => {
    appConfig.theme == "dark" ?
      dispatch(onSetAppTheme('default' as ThemeType)) :
      dispatch(onSetAppTheme('dark' as ThemeType));
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={() => { navigateTo(APP_SCREEN.APP.DETAIL_SCREEN) }}><Text>Go to details</Text></Pressable>
      <Text>Dashboard</Text>
      <Button title="Change Theme" onPress={() => _changeTheme}></Button>
    </View>
  );
};
