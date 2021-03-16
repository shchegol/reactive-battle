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
        topics.length !== 0
          ? topics.map((topic) => (
            <TopicItem
              key={topic.id}
              topic={topic}
              onClick={() => history.push(`/forum/${topic.id}`, topic)}
            />
          ))
          : (
            <div className="text-color-gray-500 text-align-center mt-60">
              <p>There are no topics here yet</p>
              <p>Be first ;)</p>
            </div>
          )
      }
    </div>
  );
};

export default Topics;
