const fs = require('fs');
const path = require('path');
const {Translate} = require('@google-cloud/translate').v2;

const primaryLanguage = 'en-US';

const primaryLanguagePath = path.join(__dirname, '..', 'src', 'assets', 'i18n', `${primaryLanguage}.json`);
const i18nAssetsPath = path.join(__dirname, '..', 'src', 'assets', 'i18n');

const projectId = 'myapprovedfleet';
const batchSize = 126;

const translate = new Translate({projectId});

const primaryI18n = JSON.parse(fs.readFileSync(primaryLanguagePath, {encoding: 'utf8'}));
const primaryKeys = Object.keys(primaryI18n);

console.log('Start translations using Google Translate API.');

// 1st: Fill every empty value in the primary language.
let emptyPrimaryKeyValues = 0;

primaryKeys.forEach((key) => {
  if (primaryI18n[key].length > 0) {
    return;
  }
  primaryI18n[key] = key;
  emptyPrimaryKeyValues += 1;
});

fs.writeFileSync(primaryLanguagePath, JSON.stringify(primaryI18n, null, 1));

console.log(`Found ${emptyPrimaryKeyValues} empty values in primary language file.`);

// 2nd: For each secondary language detected:
//
// - search for empty translations
// - translate them using the primary language keys.
const possibleSecondaryLanguages = fs.readdirSync(i18nAssetsPath);

// Filter possible secondary languages.
const secondaryLanguages = possibleSecondaryLanguages
  .filter((possibleSecondaryLanguage) => {
    if (possibleSecondaryLanguage === `${primaryLanguage}.json`) {
      return false;
    }
    return fs
      .statSync(path.join(i18nAssetsPath, possibleSecondaryLanguage))
      .isFile();
  });

console.log(`Found ${secondaryLanguages.length} secondary language file(s):`);

secondaryLanguages.forEach((secondaryLanguage) => console.log(`- ${secondaryLanguage}`));

console.log(`Searching secondary language strings to translate:`);

// Process each secondary language.
const processSecondaryLanguages = async () => {
  await asyncForEach(secondaryLanguages, async (secondaryLanguage) => {
    const secondaryI18nPath = path.join(i18nAssetsPath, secondaryLanguage);

    const secondaryI18n = JSON.parse(fs.readFileSync(secondaryI18nPath, {encoding: 'utf8'}));
    const secondaryI18nIdWithoutDialect = secondaryLanguage.split('-')[0];
    const secondaryKeys = Object.keys(secondaryI18n);

    const stringsToTranslate = [];

    secondaryKeys.forEach((key, index) => {
      if (secondaryI18n[key].length > 0) {
        return;
      }
      stringsToTranslate.push(key);
    });

    console.log(`- ${secondaryI18nIdWithoutDialect}: ${stringsToTranslate.length} string(s) to translate.`);

    if (stringsToTranslate.length <= 0) {
      return;
    }

    for (let i = 0; i < stringsToTranslate.length; i += batchSize) {
      const batch = stringsToTranslate.slice(i, i + batchSize);

      try {
        let translations = await getTranslationsFromGoogleTranslate(secondaryI18nIdWithoutDialect, batch);

        if (batch.length !== translations.length) {
          throw new Error('Unexpected: Strings to be translated & translated strings do not have the same length.');
        }

        // Both `stringsToTranslate` and `translations` are paired on index,
        // so it should be safe to get the key and index at the same time.
        batch.forEach((string, index) => {
          secondaryI18n[string] = translations[index];
        });

        fs.writeFileSync(secondaryI18nPath, JSON.stringify(secondaryI18n, null, 1));
      } catch (e) {
        console.log('ERROR:', e.message);
      }
    }
  });
  console.log('Done.');
};

processSecondaryLanguages();

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function getTranslationsFromGoogleTranslate(targetLanguage, stringArr) {
  const [translations] = await translate.translate(stringArr, targetLanguage);
  return translations;
}
