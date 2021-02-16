import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ApplicationState, Thread } from '@root/store/types';
import ReplyThread from '@root/pages/forumThread/replyThread';
import { addMessage } from '@store/actionsCreators/forum';
import Messages from '@pages/forumThread/messages';
import Button from '@components/button';
import MainTitle from '@components/mainTitle';
import Icon from '@components/icon';
import { Helmet } from 'react-helmet';
import { ParamTypes } from './types';

export default function ForumThread() {
  const history = useHistory();
  const params = useParams<ParamTypes>();

  const threadId = Number.parseInt(params.id, 10);
  const thread = useSelector((state: ApplicationState) => state.forum?.threads?.find((f) => f.id === threadId) || {} as Thread);
  const login = useSelector((state: ApplicationState) => state.user.info.login);
  const dispatch = useDispatch();

  const handleGoBack = () => history.goBack();

  return (
    <div className="container-fluid">
      <Helmet
        title={`${thread.name} - Forum`}
      />

      <div className="row justify-content-left mt-10">
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
          <div className="row mb-60">
            <div className="col">
              <MainTitle
                titleText="FORUM"
                subtitleText={thread.name}
                hasImg={false}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Messages messages={thread.messages} />
            </div>
          </div>
        </div>

        <ReplyThread
          onOk={(text) => dispatch(addMessage(thread.id, login, text))}
        />
      </div>
    </div>
  );
}
