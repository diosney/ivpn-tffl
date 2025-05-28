export interface GoogleTranslationResponse {
  data: {
    translations: GoogleTranslationItem[];
  };
}

interface GoogleTranslationItem {
  translatedText: string;
}
