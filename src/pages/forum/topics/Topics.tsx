import React, { FC } from 'react';
import TopicItem from '@pages/forum/topicItem';

import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
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
              <FormattedMessage
                id="page.forum.noTopicMessage"
                defaultMessage="<p>There are no topics here yet</p><p>Be first ;)</p>"
                values={{
                  p: (chunks: string) => <p>{chunks}</p>,
                }}
              />
            </div>
          )
      }
    </div>
  );
};

export default Topics;
