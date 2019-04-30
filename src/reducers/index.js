import {combineReducers} from 'redux'
import loginReducers from '../reducers/loginReducers.js'
import registerReducers from '../reducers/registerReducers'
import createReducers from '../reducers/createparcelReducers'
import getallparcelsReducers from '../reducers/getallReducers'
export default combineReducers({

loginReducers,
registerReducers,
createReducers,
parcels:getallparcelsReducers

});