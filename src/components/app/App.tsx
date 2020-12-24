import Error404 from '@root/pages/error404';
import Error5xx from '@root/pages/error5xx';
import Game from '@root/pages/game/Game';
import Leaderboard from '@root/pages/leaderboard/Leaderboard';
import SignIn from '@root/pages/signin/Signin';
import SignUp from '@root/pages/signup/Signup';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={SignIn}
        />
        <Route
          path="/signin"
          component={SignIn}
        />
        <Route
          path="/signup"
          component={SignUp}
        />
        <Route
          path="/leaderboard"
          component={Leaderboard}
        />
        <Route
          path="/game"
          component={Game}
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
  );
}
