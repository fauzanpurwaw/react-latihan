import React from "react";

function Form({formData, onNameChanged, onTagChanged, onAddHandler}) {
  
  return (
    <div className="formInput">
      <input type="text" id="name" placeholder="Nama" value={formData.name} onChange={onNameChanged} />
      <input type="text" id="tag" placeholder="Tag" value={formData.tag} onChange={onTagChanged} />
      <span className="submit" onClick={onAddHandler}>ADD TO CONTACT</span>
    </div>
  );
}

export default Form;