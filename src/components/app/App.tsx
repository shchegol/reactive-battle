import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '@components/privateRoute';
import { AuthContext } from '@root/context/auth';
import SignIn from '@root/pages/signin/SignIn';
import SignUp from '@root/pages/signup/SignUp';
import Game from '@root/pages/game/Game';
import Leaderboard from '@root/pages/leaderboard/Leaderboard';
import Error404 from '@root/pages/error404';
import Error5xx from '@root/pages/error5xx';
import ErrorBoundary from '@components/errorBoundary';

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
          >
            <ErrorBoundary>
              <Game />
            </ErrorBoundary>
          </PrivateRoute>
          <Route
            path="/signin"
          >
            <ErrorBoundary>
              <SignIn />
            </ErrorBoundary>
          </Route>
          <Route
            path="/signup"
          >
            <ErrorBoundary>
              <SignUp />
            </ErrorBoundary>
          </Route>
          <PrivateRoute
            path="/leaderboard"
            component={Leaderboard}
          >
            <ErrorBoundary>
              <Leaderboard />
            </ErrorBoundary>
          </PrivateRoute>
          <PrivateRoute
            path="/game"
          >
            <ErrorBoundary>
              <Game />
            </ErrorBoundary>
          </PrivateRoute>
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
