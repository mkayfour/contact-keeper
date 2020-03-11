import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/contactContext";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";

const Contacts = props => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact </h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

Contacts.propTypes = {};

export default Contacts;
