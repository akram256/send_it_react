import React from 'react';
import { shallow, mount } from 'enzyme';
import {AllParcels} from '../src/components/ParcelTable';

describe('create parcel component', () => {
    const  props = {
      parcels:[]
    }
  it('should render without crashing', () => {
    const wrapper = shallow(
    <AllParcels {...props}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
 

});