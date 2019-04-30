import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import loginuser from '../src/actions/loginActions';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


 describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('dispatch actions when login fails', () => {
    fetchMock.post(`https://senditapp3.herokuapp.com/api/v2/auth/login`, 
    { body:{errors:{}} },

    );
    const store = mockStore({});
    store.dispatch(loginuser());
    expect(store.getActions()).toEqual([]);
});

});

it('dispatch actions when login is a success', () => {
    const slug = 'anything'
 fetchMock.post(`https://senditapp3.herokuapp.com/api/v2/auth/login`, 
      { body:{} },
);
const store = mockStore({});
store.dispatch(loginuser()).then(()=>{
expect(store.
         getActions()).toEqual([ { type: 'LOGIN_SUCCESS', payload: { } }]);
     


});
});