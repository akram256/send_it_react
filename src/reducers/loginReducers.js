 import {LOGIN_SUCCESS, LOGIN_FAILURE,IS_LOADING} from '../actions/types'
 const initialState={

    isSuccessful: false,
    token: '',
    errors: null,
    isloading:false
  };


const loginReducers = (state=initialState,action) => {
  switch(action.type){
    case LOGIN_SUCCESS:
        return {
            ...state,
            isSuccessful:true,
            isloading:false,
            token:action.payload
        };
    case LOGIN_FAILURE:
        return {
            ...state,
            isloading:false,
            errors:action.payload
        };
        case IS_LOADING:
        return {
            ...state,
            isloading:true
        };
    default:
        return state;
  }
}

export default loginReducers;
