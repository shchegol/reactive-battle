import React from 'react';
import { IntlProvider } from 'react-intl';
import messages_ru from '@root/lang/ru.json';
import messages_en from '@root/lang/en.json';

export const withMultilingual = (WrappedComponent: React.FC) => () => {
  const messages = {
    ru: messages_ru,
    en: messages_en,
  };

  return (
    <IntlProvider
      locale="ru"
      messages={messages.ru}
    >
      <WrappedComponent />
    </IntlProvider>
  );
};
