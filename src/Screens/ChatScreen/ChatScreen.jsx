import Chats from '../../Components/Chats/Chats'
import ChatBox from '../../Components/ChatBox/ChatBox'
import './ChatScreen.css'

const ChatScreen = ({loggedUser, usersList, selectedUser, handleUserClick, conversation, handleSendMessage, handleAddChat}) => {
  return (
    <div className='chat-container'>
        <Chats loggedUser={loggedUser} users={usersList} selectedUser={selectedUser} handleUserClick={handleUserClick} handleAddChat={handleAddChat} />
        <ChatBox loggedUser={loggedUser} selectedUser={selectedUser} conversation={conversation} handleSendMessage={handleSendMessage} />
    </div>
  )
}

export default ChatScreen