import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import createparcel from '../src/actions/createparcelActions';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


 describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('dispatch actions when create a parcel fails', () => {
    fetchMock.post(`https://senditapp3.herokuapp.com/api/v2/parcels`, 
    { body:{errors:{}} },

    );
    const store = mockStore({});
    store.dispatch(createparcel());
    expect(store.getActions()).toEqual([]);
});

});

it('dispatch actions when craete a parcel is a success', () => {
 fetchMock.post(`https://senditapp3.herokuapp.com/api/v2/parcels`, 
      { body:{} },
);
const store = mockStore({});
store.dispatch(createparcel()).then(()=>{
expect(store.
         getActions()).toEqual([ { type: 'CREATE_PARCEL_SUCCESS', payload: { } }]);
     


});
});