import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/components/App';

  describe('App', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});