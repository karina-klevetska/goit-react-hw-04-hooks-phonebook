import PropTypes from 'prop-types'
import './ContactItem.css'

const ContactItem = ({ filteredContacts, deleteContact }) => {
  return (
    <>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type='button'
            className='delete-button'
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  )
}

ContactItem.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
}

export default ContactItem
