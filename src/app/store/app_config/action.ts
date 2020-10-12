import {ThemeType} from '@themes';
import * as Action from './type';
// import {AppModeType} from '@networking';

export const onSetInternet = (payload: boolean) => ({
  type: Action.SET_INTERNET,
  payload,
});
export const onLogout = () => ({
  type: Action.LOG_OUT,
});
export const onSetToken = (payload: any) => ({
  type: Action.SET_TOKEN,
  payload,
});
export const onSetAppProfile = (payload: any) => ({
  type: Action.SET_APP_PROFILE,
  payload,
});

export const onSetAppTheme = (payload: ThemeType) => ({
  type: Action.SET_APP_THEME,
  payload,
});
export const onSaveAppTheme = (payload: ThemeType) => ({
  type: Action.SAVE_APP_THEME,
  payload,
});
export const onSetAppMode = (payload: any) => ({
  type: Action.SET_APP_MODE,
  payload,
});

export const onLoadApp = () => ({
  type: Action.LOAD_APP,
});

export const onLoadAppEnd = () => ({
  type: Action.LOAD_APP_END,
});
