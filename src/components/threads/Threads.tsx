import React, { FC } from 'react';
import ThreadItem from '@components/threadItem';

import { useHistory } from 'react-router-dom';
import { Props } from './types';

/**
 * Threads
 * @param {Thread[]} [threads=[]] - threads
 * @constructor
 */

const Threads: FC<Props> = ({ threads = [] }) => {
  const history = useHistory();

  return (
    <div>
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          thread={thread}
          onClick={() => history.push(`/forum/${thread.id}`, thread)}
        />
      ))}
    </div>
  );
};

export default Threads;
