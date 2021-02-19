import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Topic } from '@root/store/types';
import Reply from '@root/pages/forumTopic/reply';
import Comments from '@pages/forumTopic/comments';
import Button from '@components/button';
import MainTitle from '@components/mainTitle';
import Icon from '@components/icon';
import forumSelector from '@store/selectors/forum';
import ReplyProvider from '@pages/forumTopic/ReplyContext';
import { Helmet } from 'react-helmet';

export default function ForumTopic() {
  const history = useHistory();
  const params = useParams<{id: string}>();

  const topicId = Number.parseInt(params.id, 10);
  const { topics } = useSelector(forumSelector);
  const topic = topics.find((f) => f.id === topicId) || {} as Topic;
  // const login = useSelector((state: ApplicationState) => state.user.info.login);
  // const dispatch = useDispatch();

  const handleGoBack = () => history.goBack();

  return (
    <>
      <div className="container-fluid">
        <Helmet
          title={`${topic.name} - Forum`}
        />

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
            <MainTitle
              titleText="FORUM"
              subtitleText={topic.name}
              hasImg={false}
            />
          </div>
        </div>
      </div>

      <ReplyProvider>
        <div className="container mt-40">
          <div className="row">
            <div className="col">
              <Comments comments={topic.comments} />
            </div>
          </div>
        </div>

        <Reply
            // todo дописать когда будет готово API
            // onOk={(text) => dispatch(addMessage(thread.id, login, text))}
          onOk={(text, commentId) => console.log(text, commentId)}
        />
      </ReplyProvider>
    </>
  );
}
