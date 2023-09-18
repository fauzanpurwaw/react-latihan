import React from "react";

function DeleteButton({id, onDelete}) {
  return (
    <span className="btnClose" onClick={()=>onDelete(id)}>X</span>
  );
}

export default DeleteButton;