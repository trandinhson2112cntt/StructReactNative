import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigateTo(routeName: string, params = {}) {
  navigationRef.current!.navigate(routeName, params);
}

export function goBack() {
  navigationRef.current!.goBack();
}
