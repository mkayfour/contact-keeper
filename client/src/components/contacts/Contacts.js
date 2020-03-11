import React, { useContext, Fragment } from "react";
import ContactContext from "../../context/contact/contactContext";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";

const Contacts = props => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

Contacts.propTypes = {};

export default Contacts;
