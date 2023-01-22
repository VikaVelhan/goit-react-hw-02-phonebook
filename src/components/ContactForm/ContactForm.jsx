import React, { Component } from 'react';
//import PropTypes from 'prop-types';
export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    console.log(e.currentTarget.value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </div>
    );
  }
}

export default ContactForm;
