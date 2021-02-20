import { Dispatch } from 'react';
import { Topic } from '@store/types';
import { ForumAction } from '@store/actions/types';
import { DispatchSnackbar } from '@store/actionsCreators/types';
import { ForumActions } from '@store/actions/forum';
import ForumAPI from '@api/ForumAPI';
import { showSnackbar } from '@store/actionsCreators/snackbar';

export const fetchTopics = () => {
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

// export const addComment = (
//     topic_id: string,
//     comment_id: string | null,
//     body: string,
// ) => {
//     const request = () => ({ type: ForumActions.UPDATE_TOPIC_REQUEST });
//     const success = (topic: Topic) => ({ type: ForumActions.UPDATE_TOPIC_SUCCESS, payload: { topic } });
//     const failure = (error: string) => ({ type: ForumActions.UPDATE_TOPIC_FAILURE, payload: { error } });

//     return (dispatch: Dispatch<ForumAction>) => {
//         dispatch(request());

//         return ForumAPI.addComment(topic_id, comment_id, body)
//             .then((topic) => {
//                 dispatch(success(topic));
//             })
//             .catch((error) => {
//                 dispatch(failure(error.toString()));
//             });
//     };
// };
