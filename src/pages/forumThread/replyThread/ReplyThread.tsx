import React, { FC, useState } from 'react';
import Button from '@components/button';
import Input from '@components/input';
import { Props } from './types';

import './thread-reply.scss';

const ReplyThread: FC<Props> = ({ onOk: onSend = () => { } }) => {
  const [text, setText] = useState('');

  return (
    <div className="thread-reply">
      <div className="col-12 col-md-8 col-lg-6">
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
      </div>
    </div>

  );
};

export default ReplyThread;
