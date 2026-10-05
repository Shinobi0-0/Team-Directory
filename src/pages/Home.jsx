import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page-card tech-home-card">
      <div className="tech-home-copy">
        <p className="eyebrow">Connected intelligence</p>
        <h2>Welcome to the Team Directory</h2>
        <p>
          This app lets you browse team members, explore their details, favorite people,
          and switch between light and dark themes.
        </p>

        <div className="home-actions">
          <Link className="primary-button" to="/users">
            View Team
          </Link>
          <Link className="secondary-button" to="/about">
            Learn More
          </Link>
        </div>
      </div>

      <div className="tech-figure" aria-label="Robot illustration">
        <div className="robot-scene">
          <div className="robot-antenna" />
          <div className="robot-head">
            <div className="robot-ear robot-ear-left" />
            <div className="robot-ear robot-ear-right" />
            <div className="robot-face">
              <span className="robot-eye robot-eye-left" />
              <span className="robot-eye robot-eye-right" />
            </div>
          </div>
          <div className="robot-body">
            <div className="robot-panel">
              <span className="robot-panel-light" />
              <span className="robot-panel-light" />
            </div>
          </div>
          <div className="robot-arm robot-arm-left" />
          <div className="robot-arm robot-arm-right" />
          <div className="robot-leg robot-leg-left" />
          <div className="robot-leg robot-leg-right" />
        </div>
      </div>
    </section>
  )
}

export default Home
