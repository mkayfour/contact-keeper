import React, { useContext, useEffect, useRef } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  }, []);

  const contactContext = useContext(ContactContext);

  const { filterContacts, clearFilter, filtered } = contactContext;

  const text = useRef("");

  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
