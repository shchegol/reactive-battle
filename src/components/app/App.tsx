import Leaderboard from '@root/pages/leaderborad/Leaderboard';
import SignIn from '@root/pages/signin/Signin';
import SignUp from '@root/pages/signup/Signup';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/leaderboard" component={Leaderboard} />
      </Switch>
    </BrowserRouter>
  );
}
