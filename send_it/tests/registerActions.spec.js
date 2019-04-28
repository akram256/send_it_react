import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import registeruser from '../src/actions/registerActions';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


 describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('dispatch actions when signup fails', () => {
    fetchMock.post(`https://senditapp3.herokuapp.com/api/v2/auth/signup`, 
    { body:{errors:{}} },

    );
    const store = mockStore({});
    store.dispatch(registeruser());
    expect(store.getActions()).toEqual([]);
});

});

it('dispatch actions when register is a success', () => {
    
 fetchMock.post(`https://senditapp3.herokuapp.com/api/v2/auth/signup`, 
      { body:{} },
);
const store = mockStore({});
store.dispatch(registeruser()).then(()=>{
expect(store.
         getActions()).toEqual([ { type: 'REGISTER_SUCCESS', payload: { } }]);
     


});
});