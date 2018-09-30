import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import contacts from './HomePage/reducer';

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  contacts
});
