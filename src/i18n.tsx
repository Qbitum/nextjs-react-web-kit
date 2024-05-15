import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';


if (!i18n.isInitialized) {
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    // supportedLngs: ['en', 'hn', 'sn'],
    interpolation: {
        escapeValue: false
    },
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      loadPath: 'http://localhost:4000/locales/{{lng}}/{{ns}}.json'
    }
    // backend: {
    //   /* translation file path */
    //   loadPath: '/locales/{{lng}}/translation.json',
    //   fetch
    // }, 

  });

}

  export default i18n;