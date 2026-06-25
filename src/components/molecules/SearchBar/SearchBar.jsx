import PropTypes from 'prop-types'
import { Icon } from '../../atoms/Icon/Icon'
import searchLogo from '../../../assets/icons/ico-01-buscar.svg'
import './SearchBar.css'

export function SearchBar({ value, onChange, placeholder = 'Search recipe...' }) {
  return (
    <div className="molecule-search-bar">
      <label htmlFor="recipe-search" className="molecule-search-label">
        <Icon src={searchLogo} alt="" size="small" />
      </label>
      <input
        id="recipe-search"
        className="molecule-search-input"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label="Search recipe"
      />
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}
