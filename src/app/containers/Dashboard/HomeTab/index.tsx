import React from 'react';
import {View, Text, Pressable} from 'react-native';
import { APP_SCREEN } from '@navigation/screenTypes';
import { navigateTo } from '@navigation/navigationService';

export const HomeTab = (props: any) => {
  return (
    <View style={{flex: 1, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
      <Pressable onPress={() => { navigateTo(APP_SCREEN.APP.DETAIL_SCREEN) }}><Text>Go to details</Text></Pressable>
      <Text>Dashboard</Text>
    </View>
  );
};
