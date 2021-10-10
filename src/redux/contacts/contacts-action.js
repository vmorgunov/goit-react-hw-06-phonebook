import types from 'redux/contacts/contacts-types';
import shortid from 'shortid';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContacts = id => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const manageContacts = {
  addContact,
  deleteContacts,
  changeFilter,
};

export default manageContacts;
