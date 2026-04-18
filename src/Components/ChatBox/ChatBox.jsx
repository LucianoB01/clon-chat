import React from 'react'
import { useState } from 'react'
import './ChatBox.css'

const ChatBox = ({ selectedUser, conversation, handleSendMessage }) => {
  const [messageText, setMessageText] = useState('')

  const onSend = () => {
    handleSendMessage(messageText)
    setMessageText('')
  }

  return (
    <div className='chatbox-container'>
      {conversation.length > 0 && conversation.map((message, index) => {
        return (
          <div key={`${message.sender}-${index}`}>
            <span className='sender'>{message.sender}</span>
            <span>{message.message}</span>
          </div>
        )
      })}
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