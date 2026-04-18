import Chats from '../../Components/Chats/Chats'
import './HomeScreen.css'

const HomeScreen = ({loggedUser, usersList, selectedUser, handleUserClick, handleAddChat}) => {
  return (
    <>
      <div className='home-container'>
        <Chats loggedUser={loggedUser} users={usersList} selectedUser={selectedUser} handleUserClick={handleUserClick} handleAddChat={handleAddChat} />
        <span>No ha seleccionado ningun chat</span>
      </div>
    </>
  )
}

export default HomeScreen