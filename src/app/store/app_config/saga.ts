import * as LocalStorage from '@utils/storage';
import { asyncStorageKeys, AsyncStorageKeys } from '@utils/storage/keys';
import { put, call } from 'redux-saga/effects'
import { onSetAppTheme, onLoadAppEnd, onSaveAppTheme } from './action';
import { ThemeType, MyAppTheme } from '@themes';
import { checkKeyInObject } from '@common';
export function* onLoadAppModeAndTheme() {
    // const appMode = yield loadString(asyncStorageKeys.APP_THEME as AsyncStorageKeys);
    const appTheme = yield LocalStorage.loadString(asyncStorageKeys.APP_THEME as AsyncStorageKeys);

    // if (typeof appMode === 'string' && checkKeyInObject(APP_MODE, appMode)) {
    //     yield put(onSetAppMode(appMode as AppModeType));
    // }
    if (typeof appTheme === 'string' && checkKeyInObject(MyAppTheme, appTheme)) {
        yield put(onSaveAppTheme(appTheme as ThemeType));
    }
    yield put(onLoadAppEnd());
}

export function* onChangeTheme(action: ReturnType<any>) {
    const saveTheme = yield LocalStorage.saveString(asyncStorageKeys.APP_THEME as AsyncStorageKeys, action.payload)
    if(saveTheme) yield put(onSaveAppTheme(action.payload as ThemeType));
}