import React, { useState, useContext } from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { UsersContext } from '../../Context/UsersContext'
import './ChatBox.css'

const ChatBox = ({ onBackToChats }) => {
  const { loggedUser, selectedUser, conversation, handleSendMessage } = useContext(UsersContext)
  const [messageText, setMessageText] = useState('')

  const onSend = () => {
    handleSendMessage(messageText)
    setMessageText('')
  }

  return (
    <div className='chatbox-container'>
      <div className='chatbox-header'>
        <button className='back-button' onClick={onBackToChats}><IoMdArrowRoundBack /></button>
        <h2>{selectedUser?.userName}</h2>
      </div>

      <div className='messages-area'>
        {conversation.length > 0 && conversation.map((message, index) => {
          const isSent = message.sender === loggedUser.userName

          return (
            <div key={`${message.sender}-${index}`} className={`message ${isSent ? 'message-sent' : 'message-received'}`}>
              <span className='sender'>{message.sender}</span>
              <p>{message.message}</p>
            </div>
          )
        })}
      </div>

      <div className='input-container'>
        <input
          type='text'
          placeholder='Escribe un mensaje...'
          value={messageText}
          onChange={(event) => setMessageText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onSend()
            }
          }}
        />
        <button onClick={onSend}>Enviar</button>
      </div>
    </div>

  )
}

export default ChatBox