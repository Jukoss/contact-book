import * as ContactsListTypes from './constants';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ContactsListTypes.GET_CONTACTS_LIST:
      return action.payload.data;
      case ContactsListTypes.ADD_CONTACT:
      const arr = state;
      arr.push(action.payload.data)
      return arr;
    default:
      return state;
  }
};
