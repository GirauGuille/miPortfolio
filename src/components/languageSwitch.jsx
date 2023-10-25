import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitch() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="language-switch">
            <div
                className={`language-option ${i18n.language === 'es' ? 'active' : ''}`}
                onClick={toggleLanguage}
            >
                ES
            </div>
            <div
                className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={toggleLanguage}
            >
                EN
            </div>
            <div className={`switch ${i18n.language === 'en' ? 'active' : ''}`} />
        </div>
    );
}

export default LanguageSwitch;