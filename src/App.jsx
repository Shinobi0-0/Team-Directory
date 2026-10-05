import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Loader from './components/Loader'
import { initialUsers } from './data/users'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import UserDetails from './pages/UserDetails'
import Users from './pages/Users'

function App() {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [favorites, setFavorites] = useState(() => {
    if (typeof window === 'undefined') {
      return []
    }

    try {
      const savedFavorites = window.localStorage.getItem('teamFavorites')
      return savedFavorites ? JSON.parse(savedFavorites) : []
    } catch {
      return []
    }
  })
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return true
    }

    try {
      const savedTheme = window.localStorage.getItem('teamTheme')
      return savedTheme ? savedTheme === 'dark' : true
    } catch {
      return true
    }
  })

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setUsers(initialUsers)
      setIsLoading(false)
    }, 1000)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('teamFavorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    window.localStorage.setItem('teamTheme', darkMode ? 'dark' : 'light')
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  const addUser = (newUser) => {
    setUsers((currentUsers) => [newUser, ...currentUsers])
  }

  const toggleFavorite = (id) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(id)
        ? currentFavorites.filter((favoriteId) => favoriteId !== id)
        : [...currentFavorites, id],
    )
  }

  const deleteUser = (id) => {
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id))
    setFavorites((currentFavorites) => currentFavorites.filter((favoriteId) => favoriteId !== id))
  }

  return (
    <BrowserRouter>
      <div className={`app-shell ${darkMode ? 'dark' : 'light'}`}>
        <NavBar
          favoritesCount={favorites.length}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode((currentMode) => !currentMode)}
        />

        <main className="main-content">
          {isLoading ? (
            <Loader message="Loading team data..." />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/users"
                element={
                  <Users
                    users={users}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                    deleteUser={deleteUser}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    addUser={addUser}
                    errorMessage={errorMessage}
                    setErrorMessage={setErrorMessage}
                  />
                }
              />
              <Route
                path="/users/:id"
                element={<UserDetails users={users} favorites={favorites} toggleFavorite={toggleFavorite} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
