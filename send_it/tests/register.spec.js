import React from 'react';
import { shallow, mount } from 'enzyme';
import {Register} from '../src/components/Register';

describe('register component', () => {
  const props = {
    onChange: jest.fn(),
    OnSubmit: jest.fn(),
    registeruser:jest.fn(),
  }
  const wrapper = shallow(
    <Register {...props} />
    
  );
  const instance = wrapper.instance();
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call the onChange', () => {
    const e = {
      target : {
        name: 'email',
        value: 'email'
      }
    }
    instance.onChange(e);
    expect(instance.state.email).toEqual('email');
  });
  it('should call the onsubmit', () => {
    const e = {
      preventDefault:jest.fn(),
     
    }
    instance.onSubmit(e);
    expect(instance.props.registeruser()).toEqual();
  });


});