import {CREATE_PARCEL_FAILURE, CREATE_PARCEL_SUCCESS} from '../actions/types'
const initialState={

   isSuccessfully_created: false,
   createdata:'',
   errors: null,
  
 };


const createReducers = (state=initialState,action) => {
 switch(action.type){
   case CREATE_PARCEL_SUCCESS:
       return {
           ...state,
           isSuccessfully_created:true,
           createdata:action.payload
       };
   case CREATE_PARCEL_FAILURE:
       return {
           ...state,
           errors:action.payload
       };
   default:
       return state;
 }
}

export default createReducers;
