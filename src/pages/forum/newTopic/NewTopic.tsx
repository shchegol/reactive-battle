import React, { FC, useEffect, useState } from 'react';
import Button from '@components/button';
import Input from '@components/input';
import Icon from '@components/icon';
import { Props } from './types';

const NewTopic: FC<Props> = (
  { onOk = () => { } },
) => {
  const [newTopicVisible, setNewTopicVisible] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => setName(''), [newTopicVisible]);

  if (newTopicVisible) {
    return (
      <form>
        <div className="row">
          <div className="col">
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="TOPIC NAME"
            />
          </div>
        </div>

        <div className="row">
          <div className="col pr-4">
            <Button
              type="submit"
              width="full"
              color="success"
              onClick={(e) => {
                e.preventDefault();

                if (name) {
                  onOk(name);
                  setNewTopicVisible(false);
                }
              }}
            >
              OK
            </Button>
          </div>

          <div className="col pl-4">
            <Button
              width="full"
              color="cancel"
              onClick={() => { setNewTopicVisible(false); }}
            >
              cancel
            </Button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <div className="row">
      <div className="col">
        <Button
          type="button"
          width="full"
          onClick={() => { setNewTopicVisible(true); }}
        >
          <Icon name="add" />
          NEW TOPIC
        </Button>
      </div>
    </div>
  );
};

export default NewTopic;
