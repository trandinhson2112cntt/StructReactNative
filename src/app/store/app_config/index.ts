import * as ActionTypes from './type'
import * as Saga from './saga';
import { takeLatest } from 'redux-saga/effects';
export function* appConfigSaga() {
    yield takeLatest(ActionTypes.LOAD_APP, Saga.onLoadAppModeAndTheme);
    yield takeLatest(ActionTypes.SET_APP_THEME, Saga.onChangeTheme);
}
