import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Configuración de i18next
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                intro: 'Welcome to my portfolio',
                aboutMe: 'About Me',
            },
        },
        es: {
            translation: {
                intro: 'Bienvenido a mi portafolio',
                aboutMe: 'Sobre mí',
            },
        },
    },
    lng: 'es',
    fallbackLng: 'en', 
    debug: true,
});

export default i18n;