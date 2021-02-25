import { Dispatch } from 'react';
import { Comment, Topic } from '@store/types';
import { ForumAction } from '@store/actions/types';
import { DispatchSnackbar } from '@store/actionsCreators/types';
import { ForumActions } from '@store/actions/forum';
import ForumAPI from '@api/ForumAPI';
import { showSnackbar } from '@store/actionsCreators/snackbar';

export const fetchTopicsList = () => {
  const request = () => ({ type: ForumActions.FETCH_TOPICS_REQUEST });
  const success = (topics: Topic[]) => ({ type: ForumActions.FETCH_TOPICS_SUCCESS, payload: { topics } });
  const failure = (error: string) => ({ type: ForumActions.FETCH_TOPICS_FAILURE, payload: { error } });

  return (dispatch: Dispatch<ForumAction | DispatchSnackbar>) => {
    dispatch(request());

    return ForumAPI.fetchTopics()
      .then((topics) => {
        dispatch(success(topics));
      })
      .catch((error) => {
        dispatch(showSnackbar({ type: 'danger', message: `Something went wrong. ${error.toString()}` }));
        dispatch(failure(error.toString()));
      });
  };
};

export const fetchTopic = (topicId: number) => {
  const request = () => ({ type: ForumActions.FETCH_TOPIC_REQUEST });
  const success = (topic: Topic) => ({ type: ForumActions.FETCH_TOPIC_SUCCESS, payload: { topic } });
  const failure = (error: string) => ({ type: ForumActions.FETCH_TOPIC_FAILURE, payload: { error } });

  return (dispatch: Dispatch<ForumAction | DispatchSnackbar>) => {
    dispatch(request());

    return ForumAPI.fetchTopic(topicId)
      .then((topic) => {
        dispatch(success(topic));
      })
      .catch((error) => {
        dispatch(showSnackbar({ type: 'danger', message: `Something went wrong. ${error.toString()}` }));
        dispatch(failure(error.toString()));
      });
  };
};

export const addTopic = (
  name: string,
  description: string,
  login: string,
) => {
  const request = () => ({ type: ForumActions.ADD_TOPIC_REQUEST });
  const success = (topic: Topic) => ({ type: ForumActions.ADD_TOPIC_SUCCESS, payload: { topic } });
  const failure = (error: string) => ({ type: ForumActions.ADD_TOPIC_FAILURE, payload: { error } });

  return (dispatch: Dispatch<ForumAction>) => {
    dispatch(request());

    return ForumAPI.addTopic(name, description, login)
      .then((topic) => {
        dispatch(success(topic));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
      });
  };
};

export const addComment = (
  topicId: number,
  commentId: number | null,
  body: string,
  login: string,
) => {
  const request = () => ({ type: ForumActions.ADD_COMMENT_REQUEST });
  const success = (comment: Comment) => ({ type: ForumActions.ADD_COMMENT_SUCCESS, payload: { comment } });
  const failure = (error: string) => ({ type: ForumActions.ADD_COMMENT_FAILURE, payload: { error } });

  return (dispatch: Dispatch<ForumAction>) => {
    dispatch(request());

    return ForumAPI.addComment(topicId, body, login, commentId)
      .then((comment) => {
        dispatch(success(comment));
      })
      .catch((error) => {
        dispatch(failure(error.toString()));
      });
  };
};
