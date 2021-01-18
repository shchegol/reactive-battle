import React, { useState } from 'react';
import Button from '@components/button';
import { useHistory } from 'react-router-dom';
import Threads from '@components/threads';
import { Message, Thread } from '@root/store/types';
import MainTitle from '@components/mainTitle';
import NewThread from '@components/newThread';

export default function Forum() {
  const history = useHistory();

  const handleGoBack = () => history.goBack();

  // TODO Получать из API
  const [threads, setThreads] = useState([
    {
      id: 1,
      name: 'Типы танков',
      messages: [
        {
          id: 1001, author: 'Alex Johnson', date: new Date('2021-01-17 11:12'), text: 'бла-бла-бла',
        } as Message,
        {
          id: 1002, author: 'Jon Snow', date: new Date('2021-01-18 11:12'), text: 'fsjdfs',
        } as Message,
      ],
    } as Thread,
    { id: 2, name: 'Годное топливо' } as Thread,
    { id: 3, name: 'Правильное питание' } as Thread]);

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
            subtitleText="Forum"
          />
        </div>
      </div>

      <NewThread
        onOk={(name) => {
          // TODO Получать из API
          const maxId = Math.max(...threads.map((m) => m.id));
          setThreads([...threads, { id: maxId + 1, name } as Thread]);
        }}
      />

      <div className="row justify-content-center mt-60">
        <div
          className="col-6"
        >
          <Threads
            threads={threads}
          />
        </div>
      </div>
    </div>
  );
}
