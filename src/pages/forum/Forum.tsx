import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '@root/store/types';
import { addThread } from '@store/actionsCreators/forum';
import NewThread from '@pages/forum/newThread';
import Threads from '@pages/forum/threads';
import MainTitle from '@components/mainTitle';
import Button from '@components/button';
import { Helmet } from 'react-helmet';

export default function Forum() {
  const history = useHistory();

  const handleGoBack = () => history.goBack();

  const dispatch = useDispatch();
  const threads = useSelector((state: ApplicationState) => state.forum?.threads ?? []);

  return (
    <div className="container-fluid">
      <Helmet
        title="Forum - Reactive Battle"
      />
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
            onOk={(name) => dispatch(addThread(name))}
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
