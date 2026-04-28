import { useContext } from 'react'
import { UsersContext } from '../../Context/UsersContext'
import Chats from '../../Components/Chats/Chats'
import ChatBox from '../../Components/ChatBox/ChatBox'
import { useNavigate } from 'react-router-dom'
import './ChatScreen.css'

const ChatScreen = () => {
  const navigate = useNavigate()

  return (
    <div className='chat-container'>
      <Chats />
      <ChatBox onBackToChats={() => navigate('/')} />
    </div>
  )
}

export default ChatScreen