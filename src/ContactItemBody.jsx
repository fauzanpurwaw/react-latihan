import React from "react";
import DeleteButton from "./DeleteButton";

function ContactItemBody({ name, tag, id, onDelete }) {
  return (
    <div className="contactItem_body">
      <div>
        <h5 className="contactItem_title">{name}</h5>
        <p className="contactitem_tag">@{tag}</p>
      </div>
      <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  );
}

export default ContactItemBody;