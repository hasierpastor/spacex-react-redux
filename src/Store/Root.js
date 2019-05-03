import thunk from 'redux-thunk';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from '../../node_modules/redux';

import launchCollection from './LaunchCollectionReducer';

const rootReducer = combineReducers({
  launchCollection
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
