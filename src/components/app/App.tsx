import React from 'react';

import './app.scss';

const sprite = require('@root/images/sprite-base.png').default;

export default function App() {
  return (
    <div className="app">
      <h1 className="app__title">
        Reactive Battle
      </h1>
      <div>
        <img src={sprite} alt="logo" />
      </div>
    </div>
  );
}
