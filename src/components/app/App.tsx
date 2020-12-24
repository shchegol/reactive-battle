import SignIn from '@root/pages/signin/SignIn';
import SignUp from '@root/pages/signup/SignUp';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '@components/privateRoute';
import { AuthContext } from '@root/context/auth';

export default function App() {
  const currentUserId = localStorage.getItem('userId') || '';
  const [userId, setUserId] = useState(currentUserId);

  const setUser = (id: string) => {
    localStorage.setItem('userId', id);
    setUserId(id);
  };

  return (
    <AuthContext.Provider value={{ userId, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <PrivateRoute path="/game" component={SignIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
