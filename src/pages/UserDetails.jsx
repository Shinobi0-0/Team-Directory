import { Link, useParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'

function UserDetails({ users, favorites, toggleFavorite }) {
  const { id } = useParams()
  const user = users.find((person) => person.id === Number(id))

  if (!user) {
    return (
      <section className="page-card">
        <ErrorMessage message="User not found." />
        <Link className="primary-button" to="/users">
          Back to users
        </Link>
      </section>
    )
  }

  const isFavorite = favorites.includes(user.id)

  return (
    <section className="page-card user-details">
      <div className="detail-header">
        <div className="avatar large">{user.name.charAt(0)}</div>
        <div>
          <h2>{user.name}</h2>
          <p className="user-role">{user.role}</p>
        </div>
      </div>

      <div className="detail-grid">
        <div>
          <span className="detail-label">Email</span>
          <p>{user.email}</p>
        </div>
        <div>
          <span className="detail-label">Company</span>
          <p>{user.company}</p>
        </div>
        <div>
          <span className="detail-label">Details</span>
          <p>{user.details}</p>
        </div>
      </div>

      <div className="detail-actions">
        <button
          type="button"
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={() => toggleFavorite(user.id)}
        >
          {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>

        <Link className="secondary-button" to="/users">
          Back to Users
        </Link>
      </div>
    </section>
  )
}

export default UserDetails
