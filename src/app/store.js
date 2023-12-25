import { createStore, applyMiddleware, combineReducers } from 'react-redux';
import missionsReducer from './missions/missions';
import rocketReducer from './rocket/rocket';

const reducer = combineReducers({
  missionsReducer,
  rocketReducer,
});

const store = createStore(
  reducer,
);

export default store;