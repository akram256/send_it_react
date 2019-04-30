import {GETPARCELS_PARCEL_SUCCESS, GETPARCELS_PARCEL_FAILURE} from '../actions/types'
import M from 'materialize-css/dist/js/materialize.js';


 const getallparcels = () =>(dispatch) => {
   
      return fetch(`https://senditapp3.herokuapp.com/api/v2/users/parcels`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${localStorage.getItem('auth_token')}`,
        },

      }).then( 
        res => res.json(),
       
      ).then(
       
        (data) => {
            console.log(data)
          if (data.errors) {
             
            M.toast({html:`invalid request `}),
            dispatch({
              type: GETPARCELS_PARCEL_FAILURE,
              payload: data.errors,
            });
          } else {
            dispatch({
                
              type: GETPARCELS_PARCEL_SUCCESS,
              payload: data.message,
              
            });

          }
        },
      )
    };
  
    export default getallparcels;