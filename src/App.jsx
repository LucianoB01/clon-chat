import { Routes, Route } from 'react-router-dom'
import { UsersProvider } from './Context/UsersContext'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ChatScreen from './Screens/ChatScreen/ChatScreen'
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen'

function App() {
  return (
    <UsersProvider>
      <Routes>
          <Route
              path='/'
              element={<HomeScreen />}
          />
          <Route
              path='/:id'
              element={<ChatScreen />}
          />
          <Route 
              path='/*'
              element={<NotFoundScreen />}
          />
      </Routes>
    </UsersProvider>
  )
}

export default App
