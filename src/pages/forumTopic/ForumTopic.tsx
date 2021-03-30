import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Topic } from '@root/store/types';
import Reply from '@root/pages/forumTopic/reply';
import Comments from '@pages/forumTopic/comments';
import Button from '@components/button';
import MainTitle from '@components/mainTitle';
import Icon from '@components/icon';
import forumSelector from '@store/selectors/forum';
import { ReplyProvider } from '@root/contexts/reply';
import { Helmet } from 'react-helmet';
import { addComment, fetchTopic } from '@root/store/actionsCreators/forum';

export default function ForumTopic() {
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const { topics } = useSelector(forumSelector);
  const topicId = Number.parseInt(params.id, 10);
  const topic = useMemo(() => topics.find((f) => f.id === topicId) || {} as Topic, [topicId, topics]);
  const comments = topic?.comments || [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopic(topicId));
  }, []);

  const handleGoBack = () => history.goBack();

  return (
    <>
      <div className="container-fluid pb-60">
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
        <div className="container mt-40 pb-60">
          <div className="row">
            <div className="col">
              <Comments
                topicComments={comments}
                parentCommentId={null}
              />
            </div>
          </div>
        </div>

        <Reply
          onOk={(text, commentId) => dispatch(addComment(topicId, commentId, text))}
        />
      </ReplyProvider>
    </>
  );
}
