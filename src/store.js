/*import { createStore } from 'redux'
import counter from './reducers/counter'

const store = createStore(counter,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
*/

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import change from './reducers/change'

const reducers = {
  // ... your other reducers here ...
  form: formReducer
};
const reducer = combineReducers(reducers,change);
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
