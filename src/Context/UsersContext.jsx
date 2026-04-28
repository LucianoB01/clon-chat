import { createContext, useState, useCallback } from 'react'
import users from '../data/users'

export const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
  const [usersList, setUsersList] = useState(users)
  const [selectedUser, setSelectedUser] = useState(users[0])
  const [conversation, setConversation] = useState(users[0].conversation)
  const [searchValue, setSearchValue] = useState('')

  const loggedUser = usersList[0]

  const filteredUsers = searchValue.trim()
    ? usersList.filter((user) => user.userName.toLowerCase().includes(searchValue.toLowerCase()))
    : usersList

  const handleUserClick = useCallback((user) => {
    const updatedUser = {
      ...user
    }

    setUsersList((prevUsers) =>
      prevUsers.map((currentUser) =>
        currentUser.id === updatedUser.id ? updatedUser : currentUser
      )
    )

    setSelectedUser(updatedUser)
    setConversation(updatedUser.conversation)
  }, [])

  const handleSendMessage = useCallback((messageText) => {
    const recipientId = selectedUser.id
    const recipientName = selectedUser.userName

    const user = usersList.find((user) => user.id === selectedUser.id)
    if (!user) {
      return
    }

    const newMessage = {
      message: messageText,
      sender: loggedUser.userName
    }

    // Modifico la conversacion del usuario seleccionado
    const updatedUser = {
      ...user,
      conversation: [...user.conversation, newMessage]
    }

    setUsersList((prevUsers) =>
      prevUsers.map((currentUser) =>
        currentUser.id === updatedUser.id ? updatedUser : currentUser
      )
    )
    setSelectedUser(updatedUser)
    setConversation(updatedUser.conversation)

    // Creo timer para respuesta de "mensaje enviado"
    setTimeout(() => {
      const botMessage = {
        message: 'Mensaje recibido',
        sender: recipientName
      }

      setUsersList((prevUsers) => {
        const updatedUserWithBotResponse = {
          ...updatedUser,
          conversation: [...updatedUser.conversation, botMessage],
          lastSession: new Date().toISOString()
        }

        setSelectedUser(updatedUserWithBotResponse)
        setConversation(updatedUserWithBotResponse.conversation)

        return prevUsers.map((currentUser) =>
          currentUser.id === updatedUserWithBotResponse.id ? updatedUserWithBotResponse : currentUser
        )
      })
    }, 1000)
  }, [selectedUser, usersList, loggedUser])

  const handleAddChat = useCallback((userName) => {
    const trimmedName = userName.trim()
    if (!trimmedName) {
      return
    }

    const newUser = {
      id: usersList.length + 1,
      userName: trimmedName,
      lastSession: new Date().toISOString(),
      photo: 'https://as1.ftcdn.net/jpg/04/56/58/14/1000_F_456581427_5XpGqNqCwLAGwaFFvxVGvnW2teOfJ0ZL.jpg',
      conversation: []
    }

    // Agrego nuevo usuario a la lista de usuarios 
    setUsersList((prevUsers) => [...prevUsers, newUser])
  }, [usersList.length])

  const onSearch = useCallback((query) => {
    setSearchValue(query)
  }, [])

  const value = {
    usersList,
    selectedUser,
    conversation,
    searchValue,
    filteredUsers,
    loggedUser,
    handleUserClick,
    handleSendMessage,
    handleAddChat,
    onSearch
  }

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
}
