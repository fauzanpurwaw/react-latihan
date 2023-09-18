import React from "react";

function ContactItemImage ({imageUrl}) {
  return (
    <div>
      <img className="ContactItem_img" src={imageUrl} alt="user image" />
    </div>
  );
}

export default ContactItemImage;