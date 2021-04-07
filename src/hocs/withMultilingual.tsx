import React from 'react';
import { IntlProvider } from 'react-intl';
import messages_ru from '@root/lang/ru.json';
import messages_en from '@root/lang/en.json';
// import { IS_SERVER } from '@root/constants';

export enum Locales {
  ru = 'ru',
  en = 'en',
}

export const withMultilingual = (WrappedComponent: React.FC) => () => {
  const messages = {
    en: messages_en,
    ru: messages_ru,
  };
  // let locale: string | null = null;
  // let cachedLocale: string | null = null;
  const currLocale = 'ru';

  // if (!IS_SERVER) {
  //   // eslint-disable-next-line prefer-destructuring
  //   locale = navigator.language.split(/[-_]/)[0];
  //   cachedLocale = localStorage.getItem('lang');
  // }
  //
  // if (
  //   !cachedLocale
  //     && typeof locale === 'string'
  //     && !!messages[locale as Locales]
  // ) {
  //   localStorage.setItem('lang', locale);
  // }
  //
  // if (cachedLocale) {
  //   currLocale = cachedLocale;
  // }

  return (
    <IntlProvider
      locale={currLocale}
      messages={messages[currLocale as Locales]}
    >
      <WrappedComponent />
    </IntlProvider>
  );
};
