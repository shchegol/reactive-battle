import React, { FC, useContext } from 'react';
import toClassNames from '@utils/toClassNames';
import Select from '@components/select';
import { Locales, IntlContext, TIntlContext } from '@root/hocs/withMultilingual';
import { Option } from '@components/select/types';
import { ThemeContext, TThemeContext, Themes } from '@root/contexts/theme';
import { FormattedMessage } from 'react-intl';
import { Props } from './types';

/**
 * Top menu
 * @constructor
 */

const TopMenu: FC<Props> = ({
  ...rest
}) => {
  const { updateTheme, theme } = useContext(ThemeContext) as TThemeContext;
  const { updateLocale, locale } = useContext(IntlContext) as TIntlContext;
  const languages: Option[] = [];
  const themes: Option[] = [];

  Object.keys(Locales).forEach((lang) => {
    const language: Locales = Locales[lang as keyof typeof Locales];
    languages.push({
      value: language,
      text: language,
    });
  });

  Object.keys(Themes).forEach((item) => {
    const optionTheme: Themes = Themes[item as keyof typeof Themes];
    themes.push({
      value: optionTheme,
      text: optionTheme,
    });
  });

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateLocale(event.currentTarget.value);
  };

  const changeTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateTheme(event.currentTarget.value);
  };

  return (
    <div
      className={toClassNames(
        'row justify-content-end align-items-center',
        rest.className,
      )}
    >
      <div className="col-auto">
        <div className="row align-items-center">
          <div className="col pr-4">
            <FormattedMessage
              id="component.topMenu.themeTitle"
              defaultMessage="theme"
            />
          </div>
          <div className="col pl-4">
            <Select
              value={theme}
              options={themes}
              onChange={changeTheme}
            />
          </div>
        </div>
      </div>

      <div className="col-auto">
        <div className="row align-items-center">
          <div className="col pr-4">
            <FormattedMessage
              id="component.topMenu.langTitle"
              defaultMessage="lang"
            />
          </div>
          <div className="col pl-4">
            <Select
              value={locale}
              options={languages}
              onChange={changeLanguage}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default TopMenu;
