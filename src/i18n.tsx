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
      loadPath: `${process.env.NEXT_PUBLIC_I18N_LOADPATH}/locales/{{lng}}/{{ns}}.json`
    }

  });

}

  export default i18n;