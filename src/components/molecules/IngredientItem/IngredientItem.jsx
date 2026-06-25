import PropTypes from 'prop-types'
import './IngredientItem.css'

export function IngredientItem({ ingredient, measure }) {
  return (
    <div className="molecule-ingredient-item">
      <span className="molecule-ingredient-measure">{measure}</span>
      <span className="molecule-ingredient-name">{ingredient}</span>
    </div>
  )
}

IngredientItem.propTypes = {
  ingredient: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
}
