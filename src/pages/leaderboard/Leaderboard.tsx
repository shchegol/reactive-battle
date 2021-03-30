import React, { useEffect, useState } from 'react';
import MainTitle from '@root/components/mainTitle';
import PlayersList from '@root/pages/leaderboard/playersList';
import Button from '@components/button';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LeaderboardAPI from '@api/LeaderboardAPI';
import { Player } from '@store/types';
import SearchBox from '@components/searchBox';
import Icon from '@components/icon';

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
   */
  const getLeaders = () => {
    LeaderboardAPI
      .getAllLeaderboard()
      .then((rPlayers) => {
        const newPlayers = rPlayers
          .map((rPlayer, i) => ({
            position: i + 1,
            login: rPlayer.user.login,
            score: rPlayer.score,
          }));

        setPlayers(newPlayers);
        setSearchedPlayers(newPlayers);
      }, (err) => {
        console.error(err);
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
    getLeaders();
  }, []);

  return (
    <div className="container-fluid pb-60">
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
