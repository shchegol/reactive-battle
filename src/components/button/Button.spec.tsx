import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './index';

configure({ adapter: new Adapter() });

describe('Button', () => {
  const snapshoot = (color: 'danger' | 'success' | 'cancel' | 'link') => {
    const wrapper = render(<Button color={color}>Test</Button>);
    it('Render', () => {
      expect(wrapper).toMatchSnapshot();
    });
  };

  snapshoot('danger');
  snapshoot('success');
  snapshoot('cancel');
  snapshoot('link');
});
