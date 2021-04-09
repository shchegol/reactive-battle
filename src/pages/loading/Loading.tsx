import React, { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import './loading.scss';

const Loading: FC = () => (
  <div className="loading">
    <div className="loading__img" />
    <p className="loading__text">
      <FormattedMessage
        id="loading.text"
        defaultMessage="LOADING..."
      />
    </p>
  </div>
);

export default Loading;
