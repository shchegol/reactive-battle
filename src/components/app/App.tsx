import React from 'react';
import {
  Router, Route, Switch, useHistory,
} from 'react-router-dom';
import PrivateRoute from '@components/privateRoute';
import SignIn from '@root/pages/signin/SignIn';
import SignUp from '@root/pages/signup/SignUp';
import Game from '@root/pages/game/Game';
import Profile from '@root/pages/profile/Profile';
import ProfileEdit from '@root/pages/profileEdit/ProfileEdit';
import Leaderboard from '@root/pages/leaderboard/Leaderboard';
import Error404 from '@root/pages/error404';
import Error5xx from '@root/pages/error5xx';
import Forum from '@root/pages/forum/Forum';
import ForumThread from '@root/pages/forumThread/ForumThread';
import { useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';

export default function App() {
  const login = useSelector((state: ApplicationState) => state.auth.user.login);
  const history = useHistory();

  return (
    <Router history={history}>
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
          exact
          path={`/users/${login}`}
          component={Profile}
        />
        <PrivateRoute
          path={`/users/${login}/edit`}
          component={ProfileEdit}
        />
        <Route
          exact
          path="/forum"
          component={Forum}
        />
        <Route
          path="/forum/:id"
          component={ForumThread}
        />
        <Route
          path="**"
          component={Error404}
        />
        <Route
          path="/error-5xx"
          component={Error5xx}
        />
      </Switch>
    </Router>
  );
}
