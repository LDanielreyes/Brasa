import PropTypes from 'prop-types'
import './Thumbnail.css'

export function Thumbnail({ src, alt, size = 'small', className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`atom-thumbnail atom-thumbnail--${size} ${className}`.trim()}
      loading="lazy"
    />
  )
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
}
