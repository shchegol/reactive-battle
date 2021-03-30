import React, { FC, useContext, useState } from 'react';
import Button from '@components/button';
import Input from '@components/input';
import Icon from '@components/icon';
import { ReplyContext, TReplyContext } from '@root/contexts/reply';
import { Props } from './types';
import './reply.scss';

const Reply: FC<Props> = ({
  onOk: onSend = () => { },
}) => {
  const [text, setText] = useState('');
  const { reply, updateReply } = useContext(ReplyContext) as TReplyContext;

  const handleSend = (event: React.FormEvent) => {
    event.preventDefault();

    if (text) {
      onSend(text, reply?.id || null);
      setText('');
    }
  };

  return (
    <div className="reply">
      <div className="container pb-60">

        {reply && (
        <div className="row align-items-center mb-4">
          <div className="col-auto text-size-l pr-0">
            <Icon name="reply" />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <p className="text-color-secondary text-size-s">
                  {reply.user.login}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p className="text-size-s">
                  {reply.body}
                </p>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <Button
              type="button"
              color="link"
              icon
              onClick={() => updateReply(null)}
            >
              <Icon name="close" />
            </Button>
          </div>
        </div>
        )}

        <form>
          <div className="row">
            <div className="col pr-4">
              <Input
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="MESSAGE"
              />
            </div>

            <div className="col-auto pl-0">
              <Button
                type="submit"
                size="icon"
                onClick={handleSend}
              >
                <Icon name="send" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Reply;
