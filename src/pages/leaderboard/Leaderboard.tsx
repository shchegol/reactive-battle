import React from 'react';
import MainTitle from '@root/components/mainTitle';
import LeadersTable from '@root/components/leadersTable';

export default function Leaderboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <MainTitle subtitleText="LEADERBOARD" />
        </div>
      </div>

      <div className="row justify-content-center mt-60">
        <div className="col-12 col-md-7 col-lg-5">
          <LeadersTable
            players={
                  [
                    { position: 1, name: 'Alex Johnson', score: 124600 },
                    { position: 2, name: 'Jon Snow', score: 56800 },
                    { position: 3, name: 'Alex Fincher', score: 24600 },
                    { position: 4, name: 'Willy Wonka', score: 20000 },
                  ]
                }
          />
        </div>
      </div>
    </div>
  );
}
