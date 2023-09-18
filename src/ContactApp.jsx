import React from "react";
import ContactList from "./ContactList";
import { getData } from "./data";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onReset = this.onReset.bind(this);
  };

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }

  onReset() {
    location.reload();
  }

  render() {
    return (
      <div className="contactApp">
        <div className="contactApp_header">
        <h1>Daftar Kontak</h1>
        <span className="btnReset" onClick={this.onReset}>RESET</span>
        </div>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default ContactApp;