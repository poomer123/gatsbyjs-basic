import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './dictionaries/en'
import th from './dictionaries/th'

const resources = {
    en: en,
    th: th
}

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        resources: resources
    })

export default i18n