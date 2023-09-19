import React from "react";
import ContactList from "./ContactList";
import { getData } from "./data";
import Form from "./FormInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
      formData: {
        name: "",
        tag: "",
        imageUrl: ""
      }
    }

    //evet handler
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onTagChanged = this.onTagChanged.bind(this);
  };

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts });
  }

  onAddHandler() {
    if (this.state.formData.name == "" || this.state.formData.tag == "") {
      alert("Pastikan Semua Sudah Terisi!");
      return;
    }

    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: this.state.contacts.length + 1,
            name: this.state.formData.name,
            tag: this.state.formData.tag,
            imageUrl: "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
          }
        ]
      }
    })

    this.setState(()=>{
      return {
        formData: {
          name: "",
          tag: "",
          imageUrl: ""
        }
      }
    });

    console.log(this.state.contacts);
  }

  onReset() {
    location.reload();
  }

  onNameChanged(event) {
    this.setState((prevState) => {
      return prevState.formData.name = event.target.value;
    });
  }

  onTagChanged(event) {
    this.setState((prevState) => {
      return prevState.formData.tag = event.target.value;
    });
  }

  render() {
    return (
      <div className="contactApp">
        <div className="contactApp_header">
          <h1>Daftar Kontak</h1>
          <span className="btnReset" onClick={this.onReset}>RESET</span>
        </div>
        <div className="formContainer">
          <Form formData={this.state.formData} onNameChanged={this.onNameChanged} onTagChanged={this.onTagChanged} onAddHandler={this.onAddHandler} />
        </div>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default ContactApp;