import React, { FC, useState } from 'react';
import Button from '../button';
import Input from '../input';
import { Props } from './types';

const ReplyThread: FC<Props> = ({ onOk: onSend = () => { } }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <div className="row justify-content-center">

        <div className="col">
          <Input
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="MESSAGE"
            required
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSend(text);
              setText('');
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ReplyThread;
