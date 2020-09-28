import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import languageEN from './en'
import languageRU from './ru'
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
               translations:languageEN
            },
            ru: {
                translations:languageRU
            }
        },
        /* default language when load the website in browser */
        lng: "ru",
        /* When react i18next not finding any language to as default in borwser */
        fallbackLng: "ru",
        /* debugger For Development environment */
        debug: true,
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: '.',
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: true,
        },
    });

export default i18n;
