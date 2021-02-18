import React, { FC } from 'react';
import TopicItem from '@pages/forum/topicItem';

import { useHistory } from 'react-router-dom';
import { Props } from './types';

/**
 * Threads
 * @param {Topic[]} [topics=[]] - topics
 * @constructor
 */

const Topics: FC<Props> = (
  { topics = [] },
) => {
  const history = useHistory();

  return (
    <div>
      {
        topics.map((topic) => (
          <TopicItem
            key={topic.id}
            topic={topic}
            onClick={() => history.push(`/forum/${topic.id}`, topic)}
          />
        ))
      }
    </div>
  );
};

export default Topics;
