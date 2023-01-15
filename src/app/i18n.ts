import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const fallbackLng = ['en']
const availableLanguages = ['en', 'ua', 'ru', 'bel']

/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-ignore
i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,

    detection: {
      checkWhitelist: true,
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
