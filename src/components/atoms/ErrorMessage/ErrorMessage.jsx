import PropTypes from 'prop-types'
import './ErrorMessage.css'

export function ErrorMessage({ message, className = '' }) {
  if (!message) return null

  return (
    <div className={`atom-error ${className}`.trim()}>
      <p>{message}</p>
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
}
