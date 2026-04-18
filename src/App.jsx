import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen'
import users from './data/users'

const loggedUser = users[0]

function App() {
  const [usersList, setUsersList] = useState(users)
  const [selectedUser, setSelectedUser] = useState(users[0])
  const [conversation, setConversation] = useState(users[0].conversation)

  const handleUserClick = (user) => {
    setSelectedUser(user)
    setConversation(user.conversation)
  }

  const handleSendMessage = (messageText) => {
    const trimmedMessage = messageText.trim()
    if (!trimmedMessage) {
      return
    }

    const user = usersList.find((user) => user.userName === selectedUser.userName)
    if (!user) {
      return
    }

    const newMessage = {
      message: trimmedMessage,
      sender: loggedUser.userName
    }

    const updatedUser = {
      ...user,
      conversation: [...user.conversation, newMessage]
    }

    setUsersList(
      usersList.map((currentUser) =>
        currentUser.userName === updatedUser.userName ? updatedUser : currentUser
      )
    )
    setSelectedUser(updatedUser)
    setConversation(updatedUser.conversation)

    setTimeout(() => {
      const botMessage = {
        message: 'Mensaje recibido',
        sender: selectedUser.userName
      }

      const updatedUserWithBotResponse = {
        ...updatedUser,
        conversation: [...updatedUser.conversation, botMessage]
      }

      setUsersList(
        usersList.map((currentUser) =>
          currentUser.userName === updatedUserWithBotResponse.userName ? updatedUserWithBotResponse : currentUser
        )
      )
      setSelectedUser(updatedUserWithBotResponse)
      setConversation(updatedUserWithBotResponse.conversation)
    }, 1000)
  }

  const handleAddChat = (user) => {
    const newUser = {
      id: usersList.length + 1,
      userName: user,
      lastSession: new Date(),
      photo: '',
      conversation: []
    }

    setUsersList([...usersList, newUser])
  }

  return (
    <>
      <Routes>
          <Route
              path='/'
              element={<HomeScreen 
                          loggedUser={loggedUser} 
                          usersList={usersList} 
                          selectedUser={selectedUser} 
                          handleUserClick={handleUserClick} 
                          handleAddChat={handleAddChat}
                        />}
          />
          <Route
              path='/:id'
              element={<ChatScreen 
                          loggedUser={loggedUser} 
                          usersList={usersList} 
                          selectedUser={selectedUser} 
                          handleUserClick={handleUserClick} 
                          conversation={conversation} 
                          setConversation={setConversation} 
                          handleSendMessage={handleSendMessage} 
                          handleAddChat={handleAddChat}
                        />}
          />
          <Route 
              path='/*'
              element={<NotFoundScreen />}
          />
      </Routes>
    </>  
  )
}

export default App
