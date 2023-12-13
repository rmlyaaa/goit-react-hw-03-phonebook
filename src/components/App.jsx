import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Component } from 'react';
import { GlobalStyled } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title1, Title2 } from './App.styled';

const storageKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevPrors, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        storageKey,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  componentDidMount() {
    const savedContacts = window.localStorage.getItem(storageKey);
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  onInput = evt => {
    this.setState({ [evt.name]: evt.value });
  };

  onAdd = values => {
    const { name, number } = values;
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notify.failure(`${name} is already in conracts`);
    }
    const contact = {
      contacts: [
        ...this.state.contacts,
        { id: nanoid(), name: name, number: number },
      ],
    };
    this.setState(contact);
  };

  onDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact => {
      const hasContact = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      return hasContact;
    });

    return (
      <>
        <GlobalStyled />
        <Title1>Phonebook</Title1>
        <ContactForm onAdd={this.onAdd} />

        <Title2>Contacts</Title2>
        <Filter filter={filter} onInput={this.onInput} />
        <ContactList
          visibleContacts={visibleContacts}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}
