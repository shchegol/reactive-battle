import React, { FC, useEffect, useState } from 'react';
import Button from '../button';
import Input from '../input';
import { Props } from './types';

const NewThread: FC<Props> = ({ onOk = () => { } }) => {
  const [newThreadVisible, setNewThreadVisible] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => setName(''), [newThreadVisible]);

  if (newThreadVisible) {
    return (
      <form>
        <div className="row">
          <div className="col">
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="THREAD NAME"
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
                onOk(name);
                setNewThreadVisible(false);
              }}
            >
              OK
            </Button>
          </div>

          <div className="col pl-4">
            <Button
              width="full"
              color="cancel"
              onClick={() => { setNewThreadVisible(false); }}
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
          onClick={() => { setNewThreadVisible(true); }}
        >
          New thread
        </Button>
      </div>
    </div>
  );
};

export default NewThread;
