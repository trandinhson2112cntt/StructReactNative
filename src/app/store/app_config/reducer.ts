import { IActionTyped } from '@store/rootAction'
import { IAppConfigState } from './state';
import * as Action from './type';
import { ThemeType } from '@themes';
const initialAppConfigState: IAppConfigState = {
    internetState: true,
    profile: {},
    token: null,
    /**
     * default true to load app
     */
    loading: true,
    theme: 'default',
    // appMode: 'dev',
    appUrl: '',
};
export default (state: IAppConfigState = initialAppConfigState, action: IActionTyped) => {
    switch (action.type) {
        case Action.SET_APP_THEME:

            return {
                ...state,
                theme: action.payload as ThemeType
            };
        default:
            return state;
    }
}