import LeadersTable from '@root/components/leadersTable';
import Logo from '@root/components/logo';
import Subtitle from '@root/components/subtitle';
import Title from '@root/components/title';
import React from 'react';

import './leaderboard.scss';

export default function SignIn() {
  return (
    <div className="leaderboard">
      <Logo />
      <Title />
      <Subtitle value="Leaderboard" />
      <LeadersTable
        className="leaderboard__table"
        leaders={
        [
          { position: 1, user: 'Alex Johnson', score: 124600 },
          { position: 2, user: 'Jon Snow', score: 56800 },
          { position: 3, user: 'Alex Fincher', score: 24600 },
          { position: 4, user: 'Willy Wonka', score: 20000 },
        ]
      }
      />
    </div>
  );
}
