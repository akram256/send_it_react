import React from 'react';
import { shallow, mount } from 'enzyme';
import {Createparcel, mapDispatchToProps} from '../src/components/Createparcel';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('create parcel component', () => {
    const  props = {
      createparcel:jest.fn(),
        onChange: jest.fn(),
        OnSubmit: jest.fn(),
    }
    const wrapper = shallow(
    <Createparcel {...props}/>
    );
    const instance = wrapper.instance();

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the onChange', () => {
    const e = {
      target : {
        name: 'reciever',
        value: 'reciever'
      }
    }
    instance.onChange(e);
    expect(instance.state.reciever).toEqual('reciever');
  });
  it('should call the onsubmit', () => {
    const e = {
      preventDefault:jest.fn(),
   
    }
    instance.onSubmit(e);
    expect(instance.props.createparcel()).toEqual();
  });
 

});