import PropTypes from 'prop-types'
import './Icon.css'

export function Icon({ src, alt = '', size = 'small', light = false, className = '' }) {
  const baseClass = 'atom-icon'
  const sizeClass = `atom-icon--${size}`
  const lightClass = light ? 'atom-icon--light' : ''
  const finalClass = `${baseClass} ${sizeClass} ${lightClass} ${className}`.trim()

  return <img src={src} alt={alt} className={finalClass} />
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  light: PropTypes.bool,
  className: PropTypes.string,
}
