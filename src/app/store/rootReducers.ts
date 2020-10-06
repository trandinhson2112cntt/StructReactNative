import {combineReducers} from 'redux';
import appConfig from './app_config/reducer'
export const rootReducers = combineReducers({
    appConfig
});

export type RootState = ReturnType<typeof rootReducers>;
