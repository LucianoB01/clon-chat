import Chats from '../../Components/Chats/Chats'
import ChatBox from '../../Components/ChatBox/ChatBox'
import { useNavigate } from 'react-router-dom'
import './ChatScreen.css'

const ChatScreen = ({ loggedUser, usersList, selectedUser, handleUserClick, conversation, handleSendMessage, handleAddChat, onSearch, searchValue }) => {
  const navigate = useNavigate()

  return (
    <div className='chat-container'>
      <Chats
        loggedUser={loggedUser}
        users={usersList}
        selectedUser={selectedUser}
        handleUserClick={handleUserClick}
        handleAddChat={handleAddChat}
        onSearch={onSearch}
        searchValue={searchValue}
      />
      <ChatBox
        loggedUser={loggedUser}
        selectedUser={selectedUser}
        conversation={conversation}
        handleSendMessage={handleSendMessage}
        onBackToChats={() => navigate('/')}
      />
    </div>
  )
}

export default ChatScreen