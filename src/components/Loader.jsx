function Loader({ message = 'Loading...' }) {
  return (
    <div className="loader-wrap" aria-live="polite">
      <div className="spinner" aria-hidden="true" />
      <p>{message}</p>
    </div>
  )
}

export default Loader
