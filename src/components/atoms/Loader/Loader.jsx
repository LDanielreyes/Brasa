import PropTypes from 'prop-types'
import './Loader.css'

export function Loader({ text = 'Loading...', className = '' }) {
  return (
    <div className={`atom-loader ${className}`.trim()}>
      <p>{text}</p>
    </div>
  )
}

Loader.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}
