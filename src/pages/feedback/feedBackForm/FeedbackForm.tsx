import React from 'react';
import Input from '@components/input';
import Button from '@components/button';
import { Props } from './types';

const FeedbackForm = ({
  errorMsg = '',
  userData = {},
  onInputChange = undefined,
  ...rest
}: Props) => (
  <form
    className={rest.className}
    onSubmit={rest.onSubmit}
  >
    <div className="row">
      <div className="col pr-4">
        <Input
          labelText="NAME"
          value={userData.name}
          name="name"
          placeholder="NAME"
          onChange={onInputChange}
          required
        />
      </div>
      <div className="col pl-4">
        <Input
          labelText="EMAIL"
          value={userData.email}
          name="email"
          placeholder="EMAIL"
          onChange={onInputChange}
          required
        />
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col">
        <textarea
          className="input__field"
          name="text"
          placeholder="Leave your comments and proposals here"
          onChange={onInputChange}
          required
        />
      </div>
    </div>

    { !!errorMsg && (
    <div className="text-color-dange mt-20">
      {errorMsg}
    </div>
    ) }

    <div className="row justify-content-center mt-40">
      <div className="col">
        <Button
          type="submit"
          width="full"
        >
          SEND
        </Button>
      </div>
    </div>
  </form>
);

export default FeedbackForm;
