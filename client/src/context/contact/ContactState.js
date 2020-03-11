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
    ],
    current: null,
    filtered: null
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
  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  };

  // Set current contact
  const setCurrent = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };

  // Update contact
  const updateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  };

  // Filter contact
  const filterContacts = text => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text
    });
  };

  // Clear current
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        current: state.current,
        updateContact,
        filterContacts,
        clearFilter,
        filtered: state.filtered
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
