import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import messages_ru from '@root/lang/ru.json';
import messages_en from '@root/lang/en.json';

export enum Locales {
  ru = 'ru',
  en = 'en',
}

export type TIntlContext = {
  locale: Locales;
  updateLocale: (newLocale: string) => void;
};

export const IntlContext = React.createContext<TIntlContext>({ locale: Locales.ru, updateLocale: () => {} });

export const withMultilingual = (WrappedComponent: React.FC) => () => {
  const [locale, setLocale] = React.useState<Locales>(Locales.ru);
  const messages = {
    en: messages_en,
    ru: messages_ru,
  };

  const updateLocale = (newLocale: string) => {
    const enumLocale: Locales = Locales[newLocale as keyof typeof Locales];

    if (!Object.keys(Locales).includes(newLocale)) return;

    localStorage.setItem('lang', newLocale);
    setLocale(Locales[enumLocale]);
  };

  useEffect(() => {
    const currentLang = localStorage.getItem('lang');

    if (!currentLang) return;
    updateLocale(currentLang);
  }, []);

  return (
    <IntlContext.Provider value={{ locale, updateLocale }}>
      <IntlProvider
        locale={locale}
        messages={messages[locale as Locales]}
      >
        <WrappedComponent />
      </IntlProvider>
    </IntlContext.Provider>
  );
};
