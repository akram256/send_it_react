 import {LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/types'
 const initialState={

    isSuccessful: false,
    token: '',
    errors: null
  };


const loginReducers = (state=initialState,action) => {
  switch(action.type){
    case LOGIN_SUCCESS:
        return {
            ...state,
            isSuccessful:true,
            token:action.payload
        };
    case LOGIN_FAILURE:
        return {
            ...state,
            errors:action.payload
        };
    default:
        return state;
  }
}

export default loginReducers;
