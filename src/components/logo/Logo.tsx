import React from 'react';

const logo = require('@root/images/logo.svg').default;

export default function Logo() {
  return (
    <img src={logo} alt="Reactive Battle" />
  );
}
