import { DefaultRootState } from "react-redux";
import { IAppConfigState } from "./app_config/state";

export interface IRootState extends DefaultRootState {
    appConfig: IAppConfigState
}