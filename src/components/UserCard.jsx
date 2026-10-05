import { Link } from 'react-router-dom'

function UserCard({ user, isFavorite, toggleFavorite, deleteUser }) {
  return (
    <article className="user-card">
      <div className="user-card-top">
        <div className="avatar">{user.name.charAt(0)}</div>
        <button
          type="button"
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={() => toggleFavorite(user.id)}
          aria-label={isFavorite ? `Remove ${user.name} from favorites` : `Add ${user.name} to favorites`}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>

      <h3>{user.name}</h3>
      <p className="user-role">{user.role}</p>
      <p>{user.company}</p>
      <p>{user.email}</p>

      <div className="card-actions">
        <Link className="details-link" to={`/users/${user.id}`}>
          View details
        </Link>
        <button
          type="button"
          className="delete-button"
          onClick={() => deleteUser(user.id)}
          aria-label={`Delete ${user.name}`}
        >
          Delete
        </button>
      </div>
    </article>
  )
}

export default UserCard
