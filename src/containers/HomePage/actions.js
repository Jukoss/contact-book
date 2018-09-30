import * as ContactsListTypes from './constants';

export function getContacts() {
  return {
    type: ContactsListTypes.GET_CONTACTS_LIST
  };
}

export function addContact(data) {
  return {
    type: ContactsListTypes.ADD_CONTACT,
    payload: {
      data
    }
  };
}