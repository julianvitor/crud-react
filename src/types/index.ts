import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/Reducer.js';

export type RootState = ReturnType<typeof userReducer>;

export const store = createStore(userReducer, applyMiddleware(thunk));