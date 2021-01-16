import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '@components/privateRoute';
import { AuthContext } from '@root/context/auth';
import SignIn from '@root/pages/signin/SignIn';
import SignUp from '@root/pages/signup/SignUp';
import Game from '@root/pages/game/Game';
import Profile from '@root/pages/profile/Profile';
import Leaderboard from '@root/pages/leaderboard/Leaderboard';
import Error404 from '@root/pages/error404';
import Error5xx from '@root/pages/error5xx';

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
          <PrivateRoute
            exact
            path="/"
            component={Game}
          />
          <Route
            path="/signin"
            component={SignIn}
          />
          <Route
            path="/signup"
            component={SignUp}
          />
          <PrivateRoute
            path="/leaderboard"
            component={Leaderboard}
          />
          <PrivateRoute
            path="/game"
            component={Game}
          />
          <PrivateRoute
            path="/users/:id"
            component={Profile}
          />
          <Route
            path="/error-404"
            component={Error404}
          />
          <Route
            path="/error-5xx"
            component={Error5xx}
          />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
