import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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
import ForumTopic from '@root/pages/forumTopic/ForumTopic';
import Feedback from '@pages/feedback/Feedback';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '@store/actionsCreators/user';
import { getUrlParam } from '@utils/getUrlParams';
import { yaOauth } from '@store/actionsCreators/auth';
import authSelector from '@store/selectors/auth';
import userSelector from '@store/selectors/user';
import { ThemeContext, TThemeContext } from '@root/contexts/theme';

export default function App() {
  const dispatch = useDispatch();
  const { isLoggedIn, oAuthCode } = useSelector(authSelector);
  const { login } = useSelector(userSelector);
  const { theme } = useContext(ThemeContext) as TThemeContext;

  useEffect(() => {
    const code = oAuthCode || getUrlParam('code');
    if (code) dispatch(yaOauth(code));
    if (isLoggedIn) dispatch(fetchUser());
  }, [dispatch, isLoggedIn, oAuthCode]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.removeAttribute('theme');
    } else {
      document.documentElement.setAttribute('theme', 'light');
    }
  }, [theme]);

  return (
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
        component={ForumTopic}
      />
      <Route
        exact
        path="/feedback"
        component={Feedback}
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
  );
}
