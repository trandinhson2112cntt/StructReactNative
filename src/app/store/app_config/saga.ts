import * as LocalStorage from '@utils/storage';
import { asyncStorageKeys, AsyncStorageKeys } from '@utils/storage/keys';
import { put, call } from 'redux-saga/effects'
import { onSetAppTheme, onLoadAppEnd } from './action';
import { ThemeType, MyAppTheme } from '@themes';
import { checkKeyInObject } from '@common';
export function* onLoadAppModeAndTheme() {
    // const appMode = yield loadString(asyncStorageKeys.APP_THEME as AsyncStorageKeys);
    const appTheme = yield LocalStorage.loadString(asyncStorageKeys.APP_THEME as AsyncStorageKeys);

    console.log('====================================');
    // console.log(appTheme);
    console.log('====================================');
    // if (typeof appMode === 'string' && checkKeyInObject(APP_MODE, appMode)) {
    //     yield put(onSetAppMode(appMode as AppModeType));
    // }
    if (typeof appTheme === 'string' && checkKeyInObject(MyAppTheme, appTheme)) {
        yield put(onSetAppTheme('dark' as ThemeType));
    }
    yield put(onLoadAppEnd());
}

export function* onChangeTheme(action: ReturnType<any>) {
    const value = yield LocalStorage.saveString(asyncStorageKeys.APP_THEME as AsyncStorageKeys, action.payload)
    if (value) yield put(onSetAppTheme(action.payload))
}