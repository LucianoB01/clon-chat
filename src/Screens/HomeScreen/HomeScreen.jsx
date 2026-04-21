import Chats from '../../Components/Chats/Chats'
import './HomeScreen.css'

const HomeScreen = ({ loggedUser, usersList, selectedUser, handleUserClick, handleAddChat }) => {
  return (
    <div className='home-container'>
      <Chats
        loggedUser={loggedUser}
        users={usersList}
        selectedUser={selectedUser}
        handleUserClick={handleUserClick}
        handleAddChat={handleAddChat}
      />
      <div className='home-empty-state'>
        <p>Selecciona un chat para empezar a conversar</p>
      </div>
    </div>
  )
}

export default HomeScreen