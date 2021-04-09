import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NewTopic from '@pages/forum/newTopic';
import Topics from '@pages/forum/topics';
import MainTitle from '@components/mainTitle';
import Button from '@components/button';
import { Helmet } from 'react-helmet';
import Icon from '@components/icon';
import forumSelector from '@store/selectors/forum';
import { addTopic, fetchTopicsList } from '@root/store/actionsCreators/forum';
import { useIntl } from 'react-intl';

export default function About() {
  const history = useHistory();
  const { topics } = useSelector(forumSelector);
  const intl = useIntl();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopicsList());
  }, []);

  const handleGoBack = () => history.goBack();

  return (
    <div className="container-fluid pb-60">
      <Helmet
        title={
          intl.formatMessage({
            id: 'page.game.menu.forum',
            defaultMessage: 'FORUM',
          })
        }
      />
      <div className="row justify-content-left mt-20">
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
          <div className="row mb-40">
            <div className="col">
              <MainTitle
                subtitleText={
                  intl.formatMessage({
                    id: 'page.game.menu.forum',
                    defaultMessage: 'FORUM',
                  })
                }
              />
            </div>
          </div>

          <NewTopic
            onOk={(name) => dispatch(addTopic(name, ''))}
          />

          <div className="row justify-content-center mt-20">
            <div className="col">
              <Topics
                topics={topics}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
