import loginReducers from '../src/reducers/loginReducers'
import registerReducers from '../src/reducers/registerReducers'
import createReducers from '../src/reducers/createparcelReducers'
import getallparcelsReducers from '../src/reducers/getallReducers'
import {
    LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE,
    CREATE_PARCEL_FAILURE, CREATE_PARCEL_SUCCESS,
    GETPARCELS_PARCEL_FAILURE, GETPARCELS_PARCEL_SUCCESS
} from '../src/actions/types'


describe('logins a user', () => {
    it('should return initial state', () => {
        expect(loginReducers(undefined, {})).toEqual(
            {

                isSuccessful: false,
                token: '',
                errors: null

            }
        );
    }
    )

    it('should update the LOGIN_SUCCESS', () => {
        expect(loginReducers([], { type: LOGIN_SUCCESS, token: '' })).toEqual({
            isSuccessful: true,
            token: undefined,
        });
    })
}
);
it('should update state if there is LOGIN_FAILURE', () => {
    expect(loginReducers([], { type: LOGIN_FAILURE, errors: '' })).toEqual({
        errors: undefined,
    });

});
it('should return initial state', () => {
    expect(registerReducers(undefined, {})).toEqual(
        {

            isSuccessful: false,
            token: '',
            errors: null

        }
    );
}
)
it('should update the REGISTER_SUCCESS', () => {
    expect(registerReducers([], { type: REGISTER_SUCCESS, token: '' })).toEqual({
        isSuccessful: true,
        token: undefined,
    });

})
it('should update state if there is REGISTER_FAILURE', () => {
    expect(registerReducers([], { type: REGISTER_FAILURE, errors: '' })).toEqual({
        errors: undefined,
    });
})
it('should return initial state', () => {
    expect(createReducers(undefined, {})).toEqual(
        {

            isSuccessfully_created: false,
            createdata: '',
            errors: null,

        }
    );
}
)
it('should update the CREATE_PARCEL_SUCCESS', () => {
    expect(createReducers([], { type: CREATE_PARCEL_SUCCESS, createdata: '' })).toEqual({
        isSuccessfully_created: true,
        createdata: undefined,
    });

})
it('should update state if there is CREATE_PARCEL_FAILURE', () => {
    expect(createReducers([], { type: CREATE_PARCEL_FAILURE, errors: '' })).toEqual({
        errors: undefined,
    });
})
it('should return initial state', () => {
    expect(getallparcelsReducers(undefined, {})).toEqual(
        {

            isSuccessfully_retrived: false,
            parcels: [],
            errors: null,
        }
    );
}
)
it('should update the GET_PARCEL_SUCCESS', () => {
    expect(getallparcelsReducers([], { type: GETPARCELS_PARCEL_SUCCESS, parcels: [] })).toEqual({
        isSuccessfully_retrived: true,
        parcels: undefined,
    });

})
it('should update state if there is GET_PARCEL_FAILURE', () => {
    expect(getallparcelsReducers([], { type: GETPARCELS_PARCEL_FAILURE, errors: '' })).toEqual({
        errors: undefined,
    });
})


