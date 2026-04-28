import { useContext } from 'react'
import { UsersContext } from '../../Context/UsersContext'
import Chats from '../../Components/Chats/Chats'
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className='home-container'>
      <Chats />
      <div className='home-empty-state'>
        <p>Selecciona un chat para empezar a conversar</p>
      </div>
    </div>
  )
}

export default HomeScreen