import React, { useState, useEffect, useContext } from 'react'
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { UsersContext } from '../../Context/UsersContext'
import './Chats.css'

const Chats = () => {
  const { loggedUser, filteredUsers, selectedUser, handleUserClick, handleAddChat, onSearch, searchValue } = useContext(UsersContext)
  const [showModal, setShowModal] = useState(false)
  const [newUser, setNewUser] = useState('')
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 15000)
    return () => clearInterval(id)
  }, [])

  const getStatusText = (lastSession) => {
    if (!lastSession) return 'Online'

    const lastSessionMs = Date.parse(lastSession)
    if (Number.isNaN(lastSessionMs)) return 'Online'

    const diffMs = now - lastSessionMs
    const diffMinutes = Math.floor(diffMs / 60000)

    if (diffMinutes < 1) return 'Online'
    return `Ultima vez hace ${diffMinutes} minuto${diffMinutes > 1 ? 's' : ''}`
  }

  const onAdd = () => {
    handleAddChat(newUser)
    setShowModal(false)
    setNewUser('')
  }

  return (
    <div className='chats-container'>
      <div className='logged-user'>
        <span className='logged-user-label'>Usuario logueado</span>
        <img src={loggedUser.photo} alt={loggedUser.userName} />
        <span className='logged-user-name'>{loggedUser.userName}</span>
      </div>

      <div className='search-bar'>
        <input className='search-input' type="text" placeholder="Buscar usuarios..." value={searchValue} onChange={(event) => onSearch(event.target.value)} />
      </div>

      <div className='chat-links'>
        {filteredUsers.map((user) => {
          const isActive = selectedUser ? selectedUser.id === user.id : false

          return (
            <Link
              className={`chat-link ${isActive ? 'active' : ''}`}
              to={`/${user.id}`}
              key={user.userName}
              onClick={() => handleUserClick(user)}
            >
              <img src={user.photo} alt={user.userName} />
              <div className='chat-link-body'>
                <span className='chat-link-name'>{user.userName}</span>
                <span className='chat-link-status'>{getStatusText(user.lastSession)}</span>
              </div>
            </Link>
          )
        })}
      </div>

      <button className='add-chat-button' onClick={() => setShowModal(!showModal)}><FaPlus size={28} /></button>

      {showModal && (
        <div className='modal' onClick={() => setShowModal(false)}>
          <div className='modal-content' onClick={(event) => event.stopPropagation()}>
            <span>Nombre del nuevo chat:</span>
            <input
              type='text'
              value={newUser}
              onChange={(event) => setNewUser(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  onAdd()
                }
              }}
            />
            <button onClick={onAdd}>Agregar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chats
