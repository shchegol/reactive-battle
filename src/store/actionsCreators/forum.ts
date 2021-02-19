// todo после создания API раскомментировать

// import { Dispatch } from 'redux';
// import { ForumActions } from '@store/actions/forum';
// import { Topic } from '@store/types';
// import { ForumAction } from '@store/actions/types';
//
// export const addTopic = (
//   name: string,
//   description: string,
// ) => {
//   const request = () => ({ type: ForumActions.ADD_TOPIC_REQUEST });
//   const success = (topic: Topic) => ({ type: ForumActions.ADD_TOPIC_SUCCESS, payload: { topic } });
//   const failure = (error: string) => ({ type: ForumActions.ADD_TOPIC_FAILURE, payload: { error } });
//
//   return (dispatch: Dispatch<ForumAction>) => {
//     dispatch(request());
//
//     return ForumAPI.addTopic(name, description)
//       .then((topic) => {
//         dispatch(success(topic));
//       })
//       .catch((error) => {
//         dispatch(failure(error.toString()));
//       });
//   };
// };
//
// export const addComment = (
//   topic_id: string,
//   comment_id: string | null,
//   body: string,
// ) => {
//   const request = () => ({ type: ForumActions.UPDATE_TOPIC_REQUEST });
//   const success = (topic: Topic) => ({ type: ForumActions.UPDATE_TOPIC_SUCCESS, payload: { topic } });
//   const failure = (error: string) => ({ type: ForumActions.UPDATE_TOPIC_FAILURE, payload: { error } });
//
//   return (dispatch: Dispatch<ForumAction>) => {
//     dispatch(request());
//
//     return ForumAPI.addComment(topic_id, comment_id, body)
//       .then((topic) => {
//         dispatch(success(topic));
//       })
//       .catch((error) => {
//         dispatch(failure(error.toString()));
//       });
//   };
// };
