import en from './en.json'
import ta from './ta.json'
import si from './si.json'
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next';

const resources={
    'en':{translation:en},
    'ta':{translation:ta},
    'sl':{translation:si},
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng:'en',
    fallbackLng:'sl',
    interpolation:{
        escapeValue:false
    }

})

export {i18n}