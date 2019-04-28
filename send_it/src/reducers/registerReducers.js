import {REGISTER_SUCCESS, REGISTER_FAILURE} from '../actions/types'
const initialState={

   isSuccessful: false,
   token:'',
   errors: null,
  
 };


const registerReducers = (state=initialState,action) => {
 switch(action.type){
   case REGISTER_SUCCESS:
       return {
           ...state,
           isSuccessful:true,
           token:action.payload
       };
   case REGISTER_FAILURE:
       return {
           ...state,
           errors:action.payload
       };
   default:
       return state;
 }
}

export default registerReducers;
