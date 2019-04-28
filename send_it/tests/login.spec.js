import React from 'react';
import { shallow, mount } from 'enzyme';
import { Login } from '../src/components/Login';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('create parcel component', () => {
    const props = {
        onChange: jest.fn(),
        OnSubmit: jest.fn(),
        loginuser:jest.fn()
       
    }
    const wrapper = shallow(
        <Login {...props} />
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
        expect(instance.props.loginuser()).toEqual();
      });

});