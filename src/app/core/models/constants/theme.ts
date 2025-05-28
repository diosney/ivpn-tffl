import { marker as _t }                 from '@biesbjerg/ngx-translate-extract-marker';
import { Preferences, ThemesDataMapType } from '../interfaces/preferences';

export enum Themes {
  Light = 'light',
  Dark  = 'dark'
}

export const DefaultPreferences: Preferences = {
  theme                               : Themes.Light,
  shouldOverrideContentBackgroundColor: false,
  contentBackgroundColor              : '#fafafa'
};

export const ThemesDataMap: ThemesDataMapType = {
  [Themes.Light]: {
    id                           : Themes.Light,
    text                         : _t('Light (Default)'),
    defaultContentBackgroundColor: '#fafafa'
  },
  [Themes.Dark] : {
    id                           : Themes.Dark,
    text                         : _t('Dark'),
    defaultContentBackgroundColor: '#1c2a32'
  }
};
