import PropTypes from 'prop-types'
import { Icon } from '../../atoms/Icon/Icon'
import './MetaItem.css'

export function MetaItem({ iconSrc, label, light = false, className = '' }) {
  const baseClass = 'molecule-meta-item'
  const lightClass = light ? 'molecule-meta-item--light' : ''
  const finalClass = `${baseClass} ${lightClass} ${className}`.trim()

  return (
    <div className={finalClass}>
      <Icon src={iconSrc} size="small" light={light} />
      <span>{label}</span>
    </div>
  )
}

MetaItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  light: PropTypes.bool,
  className: PropTypes.string,
}
