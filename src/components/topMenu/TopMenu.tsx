import React, { FC } from 'react';
import toClassNames from '@utils/toClassNames';
import './topMenu.scss';
import Select from '@components/select';
import { Locales } from '@root/hocs/withMultilingual';
import { Option } from '@components/select/types';
import { Props } from './types';

/**
 * Top menu
 * @constructor
 */

const TopMenu: FC<Props> = ({
  ...rest
}) => {
  const languages: Option[] = [];

  Object.keys(Locales).forEach((lang) => {
    const language: Locales = Locales[lang as keyof typeof Locales];
    languages.push({
      value: language,
      text: language,
    });
  });

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.currentTarget.value;
    console.log(newValue);
  };

  return (
    <div
      className={toClassNames(
        'top-menu row justify-content-end align-items-center',
        rest.className,
      )}
    >
      <div className="col-auto">
        <Select
          options={languages}
          onChange={changeLanguage}
        />
      </div>

    </div>
  );
};

export default TopMenu;
