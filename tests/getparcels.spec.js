import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import getallparcels from '../src/actions/getparcelsAction';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


 describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('dispatch actions when get a parcel fails', () => {
    fetchMock.get(`https://senditapp3.herokuapp.com/api/v2/users/parcels`, 
    { body:{errors:{}} },

    );
    const store = mockStore({});
    store.dispatch(getallparcels());
    expect(store.getActions()).toEqual([]);
});

});

it('dispatch actions when get a parcel is a success', () => {
 fetchMock.get(`https://senditapp3.herokuapp.com/api/v2/users/parcels`, 
      { body:{} },
);
const store = mockStore({});
store.dispatch(getallparcels()).then(()=>{
expect(store.
         getActions()).toEqual([ { type: 'GETPARCELS_PARCEL_SUCCESS', payload: { } }]);
     


});
});