import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from './index';

configure({ adapter: new Adapter() });

describe('Icon', () => {
  const snapshoot = (name: string) => {
    const wrapper = render(<Icon name={name} />);
    it('Render', () => {
      expect(wrapper).toMatchSnapshot();
    });
  };

  snapshoot('TestIcon');
});
