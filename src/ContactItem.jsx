import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";

function ContactItem ({imageUrl, name, tag, id, onDelete}) {
  return (
    <div className="contactItem">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} onDelete={onDelete} id={id}/>
    </div>
  );
}

export default ContactItem;