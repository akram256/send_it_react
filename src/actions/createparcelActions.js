import {CREATE_PARCEL_FAILURE, CREATE_PARCEL_SUCCESS} from '../actions/types'
import M from 'materialize-css/dist/js/materialize.js';


 const createparcel = (parceldata, props) =>(dispatch) => {
     console.log(parceldata)
      return fetch(`https://senditapp3.herokuapp.com/api/v2/parcels`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${localStorage.getItem('auth_token')}`,
        },
        body: JSON.stringify(parceldata),
      }).then( 
        res => res.json(),
       
      ).then(
       
        (data) => {
            console.log(data)
          if (data.errors) {
             
            M.toast({html:`invalid request `}),
            dispatch({
              type: CREATE_PARCEL_FAILURE,
              payload: data.errors,
            });
          } else {
            M.toast({html:`Successfully logged in as `}),
            dispatch({
                
              type: CREATE_PARCEL_SUCCESS,
              payload: data,
              
            });

            props.history.push("/view_parcels")
            

          }
        },
      ).catch(err=>console.log(err)
      )
    };
  
    export default createparcel;