import PropTypes from 'prop-types'
import { Icon } from '../../atoms/Icon/Icon'
import './FeatureItem.css'

export function FeatureItem({ iconSrc, text }) {
  return (
    <div className="molecule-feature-item">
      <Icon src={iconSrc} size="small" />
      <span>{text}</span>
    </div>
  )
}

FeatureItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
