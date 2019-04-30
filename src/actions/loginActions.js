import {LOGIN_SUCCESS, LOGIN_FAILURE, IS_LOADING} from '../actions/types'
import M from 'materialize-css/dist/js/materialize.js';


 const loginuser = (logindata,props) =>(dispatch) => {
      dispatch({type:IS_LOADING})
      return fetch(`https://senditapp3.herokuapp.com/api/v2/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(logindata),
      }).then(
        res => res.json(),
       
      ).then(
       
        (data) => {
          if (data.status==="failure") {
             
            M.toast({html:data.message}),
            dispatch({
              type: LOGIN_FAILURE,
              payload: data.errors,
            });
          } else {
            M.toast({html:`Successfully logged in as `}),
            localStorage.setItem('auth_token',data.access_token)
            dispatch({
                
              type: LOGIN_SUCCESS,
              payload: data,
              
            });

            props.history.push("/create_parcel")
            

          }
        },
      )
    };
    
    export default loginuser;