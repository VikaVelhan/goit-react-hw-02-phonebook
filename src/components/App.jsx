import React, { Component } from 'react';
import ContactForm from '..//components/ContactForm/ContactForm';
//import { nanoid } from 'nanoid';

export class App extends Component {
  render() {
    return (
      <div>
        <ContactForm />
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
