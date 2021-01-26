import React, { useEffect } from 'react';
import MainTitle from '@root/components/mainTitle';
import LeadersTable from '@root/components/leadersTable';
import Button from '@components/button';
import { useHistory } from 'react-router-dom';
import LeaderboardAPI from '@root/api/LeaderboardAPI';

export default function Leaderboard() {
  const history = useHistory();
  const handleGoBack = () => history.goBack();
  const players = [
    { position: 1, name: 'Alex Johnson', score: 124600 },
    { position: 2, name: 'Jon Snow', score: 56800 },
    { position: 3, name: 'Alex Fincher', score: 24600 },
    { position: 4, name: 'Willy Wonka', score: 20000 },
  ];

  useEffect(() => {
    // LeaderboardAPI
    //   .addNewLeader({
    //     data: { name: 'Alex Johnson', score: 124600 },
    //     ratingFieldName: 'score',
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });

    LeaderboardAPI
      .getAllLeaderboard()
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-left mt-10">
        <div className="col-12 col-md-3 col-lg-4">
          <Button
            type="button"
            color="link"
            onClick={handleGoBack}
          >
            GO BACK
          </Button>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="row">
            <div className="col">
              <MainTitle subtitleText="LEADERBOARD" />
            </div>
          </div>

          <div className="row mt-60">
            <div className="col">
              <LeadersTable
                players={players}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
