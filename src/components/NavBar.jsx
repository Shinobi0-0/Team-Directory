import { NavLink } from 'react-router-dom'

function NavBar({ favoritesCount, darkMode, toggleDarkMode }) {
  return (
    <header className="topbar">
      <div className="brand-block">
        <h1>Team Directory</h1>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <div className="nav-actions">
        <span className="favorite-total">Favorites: {favoritesCount}</span>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  )
}

export default NavBar
