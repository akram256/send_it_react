import {REGISTER_FAILURE, REGISTER_SUCCESS} from '../actions/types'
import M from 'materialize-css/dist/js/materialize.js';

 const registeruser = logindata =>(dispatch) => {
     console.log(logindata)
      return fetch(`https://senditapp3.herokuapp.com/api/v2/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${sessionStorage.getItem('token')}`
        },
        body: JSON.stringify(logindata),
      }).then(
        res => res.json(),
       
      ).then(
       
        (data) => {
            console.log(data)
          if (data.errors) {
             
            M.toast({html:`invalid request `}),
            dispatch({
              type: REGISTER_FAILURE,
              payload: data.errors,
            });
          } else {
            M.toast({html:`Successfully registered`}),
            dispatch({
                
              type: REGISTER_SUCCESS,
              payload: data,
              
            });
            

          }
        },
      )
    };
    
    export default registeruser;