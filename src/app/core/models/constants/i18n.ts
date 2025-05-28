import { Language } from '../interfaces/i18n';

export enum SupportedLanguages {
  English = 'en-US',
  Spanish = 'es-ES'
}

export const DEFAULT_LANGUAGE     = SupportedLanguages.English;
export const LANGUAGE_STORAGE_KEY = 'language';

export const SupportedLanguagesList: Language[] = [
  {
    id  : SupportedLanguages.English,
    text: 'English'
  },
  {
    id  : SupportedLanguages.Spanish,
    text: 'Español'
  }
];
