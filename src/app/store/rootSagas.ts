import {all} from 'redux-saga/effects';
import { appConfigSaga } from './app_config';

export const rootSaga = function* rootSaga() {
  yield all([
    appConfigSaga
  ]);
};
