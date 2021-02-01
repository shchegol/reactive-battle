import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ApplicationState, Thread } from '@root/store/types';
import ReplyThread from '@root/pages/forumThread/replyThread';
import { addMessage } from '@store/actionsCreators/forum';
import Messages from '@pages/forumThread/messages';
import Button from '@components/button';
import MainTitle from '@components/mainTitle';
import { ParamTypes } from './types';

export default function ForumThread() {
  const history = useHistory();
  const params = useParams<ParamTypes>();

  const threadId = Number.parseInt(params.id, 10);
  const thread = useSelector((state: ApplicationState) => state.forum?.threads?.find((f) => f.id === threadId) || {} as Thread);
  const login = useSelector((state: ApplicationState) => state.auth.user.login);
  const dispatch = useDispatch();

  const handleGoBack = () => history.goBack();

  return (
    <div className="container-fluid">
      <div className="row mt-10">
        <div className="col-md-12 col-lg-3">
          <Button
            type="button"
            color="link"
            onClick={handleGoBack}
          >
            GO BACK
          </Button>
        </div>

        <div className="col-md-12 col-lg-6">
          <div className="row">
            <div className="col">
              <MainTitle
                subtitleText="FORUM"
              />
            </div>
          </div>

          <div className="row mt-40">
            <div className="col text-align-center">
              <h3>{thread.name}</h3>
            </div>
          </div>

          <div className="row mt-20">
            <div className="col">
              <Messages messages={thread.messages} />
            </div>
          </div>

          <div className="row mt-40">
            <div className="col">
              <ReplyThread
                onOk={(text) => dispatch(addMessage(thread.id, login, text))}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
