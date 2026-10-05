import UserCard from '../components/UserCard'
import UserForm from '../components/UserForm'
import ErrorMessage from '../components/ErrorMessage'

function Users({ users, favorites, toggleFavorite, deleteUser, searchTerm, setSearchTerm, addUser, errorMessage, setErrorMessage }) {
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="page-card">
      <div className="users-toolbar">
        <h2>Users</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search by name"
          className="search-input"
        />
      </div>

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <div className="users-content">
        <div className="user-list">
          {filteredUsers.length === 0 ? (
            <p className="empty-state">No users match your search.</p>
          ) : (
            filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                isFavorite={favorites.includes(user.id)}
                toggleFavorite={toggleFavorite}
                deleteUser={deleteUser}
              />
            ))
          )}
        </div>

        <UserForm onSubmit={addUser} setErrorMessage={setErrorMessage} />
      </div>
    </section>
  )
}

export default Users
