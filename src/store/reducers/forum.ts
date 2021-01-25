/* eslint-disable max-len */
import { ForumState, Message, Thread } from '../types';

const defaultState: ForumState = {
  threads: [
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
    { id: 3, name: 'Правильное питание' } as Thread],
};

const ADD_THREAD = 'FORUM/ADD_THREAD';
const ADD_MESSAGE = 'FORUM/ADD_MESSAGE';

interface AddThreadActionType {
  type: typeof ADD_THREAD;
  name: string;
}

interface AddMessageActionType {
  type: typeof ADD_MESSAGE;
  threadId: number;
  author: string;
  text: string;
}

type ForumActionTypes = AddThreadActionType | AddMessageActionType;

export function forumReducer(state: ForumState = defaultState, action: ForumActionTypes): ForumState {
  switch (action.type) {
    case ADD_THREAD:
      return {
        ...state,
        threads: [...state.threads, {
          // TODO Получать из API
          id: Math.max(...state.threads.map((m) => m.id)) + 1,
          name: action.name,
          messages: [],
        }],
      };
    case ADD_MESSAGE:
      return {
        threads: state.threads.map((thread) => {
          if (thread.id === action.threadId) {
            // TODO Получать из API
            const maxId = thread.messages && thread.messages.length > 0
              ? Math.max(...thread.messages.map((m) => m.id))
              : 1;

            return {
              ...thread,
              messages: [...thread.messages || [], {
                id: maxId + 1,
                author: action.author,
                date: new Date(Date.now()),
                text: action.text,
              }],
            };
          }

          return thread;
        }),
      };
    default:
      return state;
  }
}

export function addThread(name: string): AddThreadActionType {
  return { type: ADD_THREAD, name };
}

export function addMessage(threadId: number, author: string, text: string): AddMessageActionType {
  return {
    type: ADD_MESSAGE,
    threadId,
    author,
    text,
  };
}
