import React, { useEffect, useState } from 'react';
import Button from '@components/button';
import { useHistory, useLocation } from 'react-router-dom';
import MainTitle from '@components/mainTitle';
import { Message, Thread } from '@root/store/types';
import Messages from '@components/messages';
import ReplyThread from '@root/components/replyThread';
import { AuthContext } from '@root/context/auth';

export default function ForumThread() {
  const history = useHistory();
  const location = useLocation();

  const thread = location.state as Thread || {};

  // TODO Заменить две строки, когда будет Redux
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => setMessages((location.state as Thread || {}).messages || []), []);

  const handleGoBack = () => history.goBack();

  return (
    <div className="container">
      <div className="row mt-10">
        <div className="col-auto">
          <Button
            type="button"
            color="link"
            onClick={handleGoBack}
          >
            GO BACK
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <MainTitle
            subtitleText={`FORUM/${thread.name}`}
          />
        </div>
      </div>

      <div className="row justify-content-center mt-60">
        <div
          className="col-6"
        >
          <Messages messages={messages} />
        </div>
      </div>

      <div className="row justify-content-center mt-60">
        <div
          className="col-6"
        >
          <AuthContext.Consumer>
            {(auth) => (
              <ReplyThread
                onOk={(text) => {
                  // TODO Получать из API
                  const maxId = messages.length > 0 ? Math.max(...messages.map((m) => m.id)) : 1;

                  const message = {
                    id: maxId + 1,
                    author: auth.userId,
                    date: new Date(Date.now()),
                    text,
                  } as Message;
                  setMessages([...messages || [], message]);
                }}
              />
            )}
          </AuthContext.Consumer>
        </div>
      </div>
    </div>
  );
}
