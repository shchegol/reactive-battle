import { ForumActions } from '@store/actions/forum';
import { ForumAction } from '@store/actions/types';
import { ForumState, Topic } from '../types';

const defaultState: ForumState = {
  topics: [],
  error: '',
};

export function forumReducer(
  state = defaultState,
  action: Required<ForumAction>,
): ForumState {
  switch (action.type) {
    case ForumActions.FETCH_TOPICS_REQUEST:
    case ForumActions.FETCH_TOPIC_REQUEST:
    case ForumActions.ADD_TOPIC_REQUEST:
    case ForumActions.UPDATE_TOPIC_REQUEST:
    case ForumActions.ADD_COMMENT_REQUEST:
      return {
        ...state,
        error: '',
      };
    case ForumActions.FETCH_TOPICS_SUCCESS:
      return {
        ...state,
        topics: action.payload.topics || [],
      };
    case ForumActions.FETCH_TOPIC_SUCCESS:
      if (action.payload.topic) {
        const topicInState = state.topics.find((t) => t.id === action.payload.topic?.id);
        if (topicInState) {
          return {
            ...state,
            topics: state.topics.map((topic) => {
              if (topic.id === action.payload.topic?.id) {
                return {
                  ...topic,
                  ...action.payload.topic,
                };
              }

              return topic;
            }),
          };
        }

        return {
          ...state,
          topics: [...state.topics, action.payload.topic],
        };
      }

      return state;

    case ForumActions.ADD_TOPIC_SUCCESS:
      return {
        ...state,
        topics: [
          ...state.topics,
          action.payload.topic as Topic,
        ],
        error: '',
      };
    case ForumActions.UPDATE_TOPIC_SUCCESS:
      return {
        ...state,
        topics: state.topics.map((topic) => {
          if (topic.id === action.payload.topic?.id) {
            return {
              ...topic,
              ...action.payload.topic,
            };
          }

          return topic;
        }),
        error: '',
      };
    case ForumActions.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        topics: state.topics.map((topic) => {
          if (action.payload.comment && topic.id === action.payload.comment?.topic_id) {
            return {
              ...topic,
              comments: [...topic.comments, action.payload.comment],
            };
          }

          return topic;
        }),
        error: '',
      };
    case ForumActions.FETCH_TOPICS_FAILURE:
    case ForumActions.ADD_TOPIC_FAILURE:
    case ForumActions.UPDATE_TOPIC_FAILURE:
    case ForumActions.ADD_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error || '',
      };
    default:
      return state;
  }
}
