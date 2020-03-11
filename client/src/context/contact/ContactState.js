import React, { useReducer } from "react";
import { v4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: "personal",
        id: 1,
        name: "Mohit Kumar",
        email: "mk4227525@gmail.com",
        phone: "8975956469"
      },
      {
        type: "professional",
        id: 2,
        name: "Ted Mosby",
        email: "tedmosby@gmail.com",
        phone: "8975956469"
      },
      {
        type: "professional",
        id: 3,
        name: "Sarah Watson",
        email: "sarahwatson@gmail.com",
        phone: "8975956469"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contact

  // Clear current

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
