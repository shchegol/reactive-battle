import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from './index';

configure({ adapter: new Adapter() });

describe('Input', () => {
  const snapshoot = (label: string, message: string, isError: boolean, onChange: () => void) => {
    const wrapper = render(<Input
      labelText={label}
      messageText={message}
      isError={isError}
      onChange={onChange}
    />);
    it('Render', () => {
      expect(wrapper).toMatchSnapshot();
    });
  };

  snapshoot('test', 'no error', false, () => { console.log('ok'); });
  snapshoot('test', 'error', true, () => { console.log('ok'); });
});
