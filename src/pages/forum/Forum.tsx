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
          id: 1001,
          author: 'Alex Johnson',
          date: new Date('2021-01-17 11:12'),
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
              + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
              + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi '
              + 'ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit '
              + 'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint '
              + 'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit '
              + 'anim id est laborum.',
        } as Message,
        {
          id: 1002, author: 'Jon Snow', date: new Date('2021-01-18 11:12'), text: 'fsjdfs',
        } as Message,
      ],
    } as Thread,
    { id: 2, name: 'Годное топливо' } as Thread,
    { id: 3, name: 'Правильное питание' } as Thread]);

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
          <div className="row mb-60">
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

          <div className="row justify-content-center mt-20">
            <div className="col">
              <Threads
                threads={threads}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
