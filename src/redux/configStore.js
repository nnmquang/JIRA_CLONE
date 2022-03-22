import {combineReducers, createStore,applyMiddleware} from 'redux';
import {LoadingReducer} from './reducers/LoadingReducer'

//middlwware saga
import createMiddleWareSaga from 'redux-saga'
import { rootSaga } from './sagas/rootSaga';

const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    //reducer khai bao tai day
    LoadingReducer

})


const store = createStore(rootReducer,applyMiddleware(middleWareSaga));

middleWareSaga.run(rootSaga);


export default store;