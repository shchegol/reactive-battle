import App from '@components/app/App';
import Forum from '@pages/forum/Forum';
import ForumThread from '@pages/forumThread/ForumThread';

export default [
  {
    component: App,
    routes: [
      {
        path: '/forum',
        exact: true,
        component: Forum,
        routes: [
          {
            path: '/forum/:id',
            component: ForumThread,
          },
        ],
      },
    ],
  },
];
