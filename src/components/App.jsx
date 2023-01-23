import React, { Component } from 'react';
import ContactForm from '..//components/ContactForm/ContactForm';
import ContactList from '..//components/ContactList/ContactList';
//import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  handleDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <ContactList contacts={contacts} onDelete={this.handleDelete} />
      </div>
    );
  }
}

/*export const App = () => {
  return (
    <div
    style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};*/
