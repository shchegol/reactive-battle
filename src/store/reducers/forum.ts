import { ForumActions } from '@store/actions/forum';
import { ForumAction } from '@store/actions/types';
import { ForumState, Topic } from '../types';

const defaultState: ForumState = {
  topics: [
    {
      id: 1,
      name: 'Типы танков',
      description: '',
      create_at: '2021-01-17 07:37:16-08',
      comments: [
        {
          id: 1001,
          topic_id: 1,
          comment_id: null,
          author: 'Федька',
          create_at: '2021-01-18 07:37:16-08',
          body: 'some text',
          comments: [
            {
              id: 1001001,
              topic_id: 1,
              comment_id: 1001,
              author: 'Васёк',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              create_at: '2021-01-19 07:37:16-08',
              comments: [
                {
                  id: 1001001001,
                  topic_id: 1,
                  comment_id: 1001,
                  author: 'Петя',
                  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  create_at: '2021-01-19 07:37:16-08',
                  comments: [],
                },
              ],
            },
            {
              id: 1001002,
              topic_id: 1,
              comment_id: 1001,
              author: 'Петя',
              body: 'some text2',
              create_at: '2021-01-20 07:37:16-08',
              comments: [],
            },
          ],
        },
      ],
    } as Topic,
    {
      id: 2,
      name: 'Типы танков',
      description: '',
      create_at: '2021-01-22 07:37:16-08',
      comments: [
        {
          id: 2001,
          topic_id: 2,
          comment_id: null,
          author: 'Васёк',
          body: 'some text3',
          create_at: '2021-01-23 07:37:16-08',
          comments: [],
        },
      ],
    } as Topic,
  ],
  error: '',
};

export function forumReducer(
  state = defaultState,
  action: Required<ForumAction>,
): ForumState {
  switch (action.type) {
    case ForumActions.ADD_TOPIC_REQUEST:
    case ForumActions.UPDATE_TOPIC_REQUEST:
      return {
        ...state,
        error: '',
      };
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
    case ForumActions.ADD_TOPIC_FAILURE:
    case ForumActions.UPDATE_TOPIC_FAILURE:
      return {
        ...state,
        error: action.payload.error || '',
      };
    default:
      return state;
  }
}
