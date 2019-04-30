import {GETPARCELS_PARCEL_FAILURE, GETPARCELS_PARCEL_SUCCESS} from '../actions/types'
const initialState={

   isSuccessfully_retrived: false,
   parcels:[],
   errors: null,
  
 };


const getallparcelsReducers = (state=initialState,action) => {
 switch(action.type){
   case GETPARCELS_PARCEL_SUCCESS:
       return {
           ...state,
           isSuccessfully_retrived:true,
           parcels:action.payload
       };
   case GETPARCELS_PARCEL_FAILURE:
       return {
           ...state,
           errors:action.payload
       };
   default:
       return state;
 }
}

export default getallparcelsReducers;
