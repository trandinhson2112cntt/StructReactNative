import {FontFamily as FontType} from './../config/type';
import {Platform} from 'react-native';

export const FontDefault: FontType = {
  primary: Platform.select({ios: 'Roboto-Medium', android: 'Roboto-Medium'}) || "default",
  secondary: Platform.select({ios: 'Roboto-Medium', android: 'Roboto-Medium'}) || "default",
};
export type FontFamily = keyof typeof FontDefault;
