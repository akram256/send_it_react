import React from 'react';
import { shallow, mount } from 'enzyme';
import {Parcel} from '../src/components/Parcel';

  describe('login component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Parcel />);
    expect(wrapper).toMatchSnapshot();
  });
});