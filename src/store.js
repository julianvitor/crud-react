import { createStore } from 'redux';
import rootReducer from './reducers/Reducer'; // Importe o root reducer

const store = createStore(rootReducer);

export default store;
