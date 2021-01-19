import React, { FC, useState } from 'react';
import Button from '../button';
import Input from '../input';
import { Props } from './types';

const ReplyThread: FC<Props> = ({ onOk: onSend = () => { } }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <div className="row">
        <div className="col-8 pr-4">
          <Input
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="MESSAGE"
          />
        </div>

        <div className="col-4 pl-0">
          <Button
            type="submit"
            width="full"
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
