import {REGISTER_FAILURE, REGISTER_SUCCESS} from '../actions/types'
import M from 'materialize-css/dist/js/materialize.js';

 const registeruser = (logindata, props )=>(dispatch) => {
     
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
       
          if (data.status==="failure") {
             
            M.toast({html:data.message}),
            dispatch({
              type: REGISTER_FAILURE,
              payload: data.errors,
            });
          } else {
            M.toast({html:data.message}),
            dispatch({
                
              type: REGISTER_SUCCESS,
              payload: data,
              
            });

              props.history.push("/")

          }
        },
      )
    };
    
    export default registeruser;