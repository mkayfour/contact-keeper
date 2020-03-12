import React, { useContext, Fragment, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";
import Spinner from "../../components/layout/Spinner";

const Contacts = props => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact </h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <div>
          {filtered !== null
            ? filtered.map(contact => (
                <ContactItem key={contact._id} contact={contact} />
              ))
            : contacts.map(contact => (
                <ContactItem key={contact._id} contact={contact} />
              ))}
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

Contacts.propTypes = {};

export default Contacts;
