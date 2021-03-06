import { ThemeType } from '@themes';

export interface IAppConfigState {
    internetState: boolean;

    profile: any;

    token: any | undefined | null;

    loading: boolean;

    theme: ThemeType;

    // appMode: AppModeType;

    appUrl: string;
}