import PropTypes from 'prop-types'
import './Button.css'

export function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  active = false,
  ...props 
}) {
  const baseClass = 'atom-button'
  const variantClass = `atom-button--${variant}`
  const activeClass = active ? 'atom-button--active' : ''
  const finalClass = `${baseClass} ${variantClass} ${activeClass} ${className}`.trim()

  return (
    <button className={finalClass} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'pill', 'outline', 'icon']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  active: PropTypes.bool,
}
