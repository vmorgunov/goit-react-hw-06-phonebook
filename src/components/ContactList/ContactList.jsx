import React from 'react';
import PropTypes from 'prop-types';
import { Titel, Button, List, Item } from './ContactList.styled';
import { BsFillPersonFill, BsFillTrashFill } from 'react-icons/bs';
import { connect } from 'react-redux';
import contactsAction from 'redux/contacts/contacts-action';

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <>
      <Titel>Contacts</Titel>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id} id={id}>
            <BsFillPersonFill />
            <span>{name}:</span> <span>{number}</span>
            <Button type="button" onClick={() => onDeleteContacts(id)}>
              <BsFillTrashFill />
            </Button>
          </Item>
        ))}
      </List>
    </>
  );
};

const getFilteredContacts = (contacts, filter) => {
  const normalizedContacts = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContacts),
  );
  return filteredContacts;
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(contactsAction.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContacts: PropTypes.func.isRequired,
};
