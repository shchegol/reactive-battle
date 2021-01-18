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
        <div className="row justify-content-center mt-60">

          <div className="col-4">
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="THREAD NAME"
              required
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2">
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                onOk(name);
                setNewThreadVisible(false);
              }}
            >
              OK
            </Button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <div className="row justify-content-center mt-60">
      <div className="col-2">
        <Button
          type="button"
          onClick={() => { setNewThreadVisible(true); }}
        >
          New thread
        </Button>
      </div>
    </div>
  );
};

export default NewThread;
