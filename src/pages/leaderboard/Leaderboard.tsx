import React from 'react';
import MainTitle from '@root/components/mainTitle';
import PlayersTable from '@root/pages/leaderboard/playersTable';
import Button from '@components/button';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Icon from '@components/icon';

export default function Leaderboard() {
  const history = useHistory();
  const handleGoBack = () => history.goBack();
  const players = [
    { position: 1, name: 'Alex Johnson', score: 124600 },
    { position: 2, name: 'Jon Snow', score: 56800 },
    { position: 3, name: 'Alex Fincher', score: 24600 },
    { position: 4, name: 'Willy Wonka', score: 20000 },
  ];

  return (
    <div className="container-fluid">
      <Helmet title="Leaderboard" />

      <div className="row mt-20">
        <div className="col-12 col-md-2 col-lg-3">
          <Button
            type="button"
            color="link"
            size="xl"
            onClick={handleGoBack}
            icon
          >
            <Icon name="arrow_back" />
          </Button>
        </div>

        <div className="col-12 col-md-8 col-lg-6">
          <div className="row">
            <div className="col">
              <MainTitle subtitleText="LEADERBOARD" />
            </div>
          </div>

          <div className="row mt-40">
            <div className="col">
              <PlayersTable
                players={players}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
