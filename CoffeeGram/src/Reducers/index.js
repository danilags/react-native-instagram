import { combineReducers } from 'redux';

import photosReducers from './photosReducers';

const rootReducer = combineReducers({
  dataImage: photosReducers,
})

export default rootReducer;
