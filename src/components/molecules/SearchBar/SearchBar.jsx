import PropTypes from 'prop-types'
import { Icon } from '../../atoms/Icon/Icon'
import searchLogo from '../../../assets/icons/ico-01-buscar.svg'
import './SearchBar.css'

export function SearchBar({ value, onChange, placeholder = 'Buscar receta...' }) {
  return (
    <div className="molecule-search-bar">
      <Icon src={searchLogo} alt="Buscar" size="small" />
      <input
        className="molecule-search-input"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}
