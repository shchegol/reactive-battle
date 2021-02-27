import React, { useEffect, useState } from 'react';
import MainTitle from '@root/components/mainTitle';
import PlayersList from '@root/pages/leaderboard/playersList';
import Button from '@components/button';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LeaderboardAPI from '@api/LeaderboardAPI';
import { Player } from '@store/types';
import SearchBox from '@components/searchBox';

/**
 * Leaderboard page
 * @constructor
 */
export default function Leaderboard() {
  const history = useHistory();
  const handleGoBack = () => history.goBack();
  const [players, setPlayers] = useState([] as Player[]);
  const [searchValue, setSearchValue] = useState('');
  const [searchedPlayers, setSearchedPlayers] = useState([] as Player[]);

  /**
   * Get leaders from API
   * Not organized through redux because it is used only here
   * @param {number} cursor - current page number
   * @param {number} limit - amount of users on the page
   */
  const getLeaders = (cursor: number, limit: number) => {
    LeaderboardAPI
      .getAllLeaderboard({ ratingFieldName: 'score', limit, cursor })
      .then((rPlayers) => {
        const newPlayers = rPlayers.map((rPlayer, i) => ({
          position: i + 1,
          login: rPlayer.data.login || rPlayer.data.name || 'noname',
          score: rPlayer.data.score,
        }));

        setPlayers(newPlayers);
        setSearchedPlayers(newPlayers);
      });
  };

  /**
   * Leaders filter
   * @param {string} newValue - the string on which to compare
   */
  const filterLeaders = (newValue: string) => {
    setSearchValue(newValue);
    setSearchedPlayers(players.filter((player) => player.login.toLocaleLowerCase().indexOf(newValue.toLocaleLowerCase()) !== -1));
  };

  useEffect(() => {
    getLeaders(0, 1000);
  }, []);

  return (
    <div className="container-fluid">
      <Helmet title="Leaderboard" />
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
              <div className="row">
                <div className="col">
                  <SearchBox
                    value={searchValue}
                    onChange={filterLeaders}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <PlayersList
                    players={searchedPlayers}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
