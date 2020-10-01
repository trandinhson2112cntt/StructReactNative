export const DEV_MODE_API = '';
export const PROD_MODE_API = '';
export const STAGING_MODE_API = '';
export const APP_MODE_API = {
  dev: DEV_MODE_API,
  prod: PROD_MODE_API,
  staging: STAGING_MODE_API,
};
export type AppModeAPIType = keyof typeof APP_MODE_API;

export const ApiConstants = {
  LOGIN: 'api/user/login',
};