import { useState, useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import ContactItem from './ContactItem/ContactItem'
import './App.css'

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  )

  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addNewContact = (contact) => {
    setContacts((contacts) => [...contacts, contact])
  }

  const banOnAddingDuplicateContact = (value) => {
    contacts.map((contact) => contact.name).includes(value.name)
      ? alert(`${value.name} is already in contacts`)
      : addNewContact(value)
  }

  const handleChangeFilter = (e) => {
    setFilter(e.target.value)
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  return (
    <div className='App'>
      <h1>Phonebook</h1>

      <ContactForm
        banOnAddingDuplicateContact={banOnAddingDuplicateContact}
      ></ContactForm>

      <h2>Contacts</h2>

      <Filter handleChangeFilter={handleChangeFilter}></Filter>

      <ContactList>
        <ContactItem
          filter={filter}
          contacts={contacts}
          deleteContact={deleteContact}
        ></ContactItem>
      </ContactList>
    </div>
  )
}

export default App
