import SignIn from '@root/pages/signin/Signin';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );
}
