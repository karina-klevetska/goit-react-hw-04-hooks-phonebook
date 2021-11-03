import { useState } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import './ContactForm.css'

function ContactForm({ banOnAddingDuplicateContact }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  let nameId = shortid()
  let numberId = shortid()

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeNumber = (e) => {
    setNumber(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const contact = {
      id: shortid(),
      name,
      number,
    }

    banOnAddingDuplicateContact(contact)
    resetForm()
  }

  const resetForm = () => {
    setName('')
    setNumber('')
  }

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <label className='label' htmlFor={nameId}>
        Enter name
      </label>
      <input
        id={nameId}
        type='text'
        className='input'
        name='name'
        value={name}
        onChange={handleChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label className='label' htmlFor={numberId}>
        Enter number
      </label>
      <input
        id={numberId}
        type='tel'
        className='input'
        name='number'
        value={number}
        onChange={handleChangeNumber}
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
        required
      />
      <button type='submit' className='contact-button'>
        Add contact
      </button>
    </form>
  )
}

ContactForm.propTypes = {
  banOnAddingDuplicateContact: PropTypes.func,
}

export default ContactForm
