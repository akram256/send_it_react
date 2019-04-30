import React from 'react';
import { shallow, mount } from 'enzyme';
import {Viewparcels} from '../src/components/Viewparcels';

describe('get parcel component', () => {
  const  props = {
     getallparcels: jest.fn(),
   
  }
it('should render without crashing', () => {
  const wrapper = shallow(
  <Viewparcels {...props}/>
  );
  expect(wrapper).toMatchSnapshot();
});


});