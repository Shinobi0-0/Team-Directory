import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page-card not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link className="primary-button" to="/">
        Return Home
      </Link>
    </section>
  )
}

export default NotFound
