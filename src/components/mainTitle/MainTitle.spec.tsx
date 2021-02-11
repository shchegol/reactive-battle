import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainTitle from './index';

configure({ adapter: new Adapter() });

describe('MainTitle', () => {
  const snapshoot = (title: string, subtitle: string, imgSrc: string) => {
    const wrapper = render(<MainTitle
      titleText={title}
      subtitleText={subtitle}
      imgSrc={imgSrc}
    />);
    it('Render', () => {
      expect(wrapper).toMatchSnapshot();
    });
  };

  snapshoot('reactive-battle', 'forum', 'https://ya.ru/title.png');
});
