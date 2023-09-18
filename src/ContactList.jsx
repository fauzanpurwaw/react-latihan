import React from "react";
import ContactItem from "./ContactItem";

function ContactList ({contacts, onDelete}) {
  return (
    <div className="contactList">
      {
        contacts.map(contact => (
          <div>
            <ContactItem key={contact.id} id={contact.id} onDelete={onDelete} {...contact} />  
          </div>
        ))
      }
    </div>
  );
}

export default ContactList;
