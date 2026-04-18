import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Chats.css'

const Chats = ({ loggedUser, users, handleUserClick, handleAddChat }) => {
  const [showModal, setShowModal] = useState(false)
  const [newUser, setNewUser] = useState('')

  const onAdd = () => {
    handleAddChat(newUser)
    setShowModal(false)
    setNewUser('')
  }
  return (
    <div className='chats-container'>
      <div>
        <span>Usuario logueado:</span>
        <img src={loggedUser.photo} alt={loggedUser.userName} />
        <span>{loggedUser.userName}</span>
      </div>
      <div className='chat-links'>
        {users.map((user) => {
          return (
            <Link to={`/${user.id}`} key={user.userName} onClick={() => handleUserClick(user)}>
              <img src={user.photo} alt={user.userName} />
              <span>{user.userName}</span>
            </Link>
          )
        })}
      </div>
      <button onClick={() => setShowModal(!showModal)}>Agregar chat</button>
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <span>Nombre del nuevo chat:</span>
            <input type='text' value={newUser} onChange={(event) => setNewUser(event.target.value)} />
            <button onClick={onAdd}>Agregar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chats
