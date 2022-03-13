import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import langEn from './lang.en';
import langKo from './lang.ko';

const resources = {
    'en-US': {
        translations: langEn
    },
    'ko-KR': {
        translations: langKo
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources: resources,
        //초기 설정언어
        lng: 'ko-KR',
        fallbackLng: {
            'en-US': ['en-US'],
            default: ['ko-KR']
        },
        debug: true,
        defaultNS: 'translations',
        ns: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    })

export default i18n;