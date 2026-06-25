import PropTypes from 'prop-types'
import { Thumbnail } from '../../atoms/Thumbnail/Thumbnail'
import './RecipeListItem.css'

export function RecipeListItem({ recipe, onClick }) {
  return (
    <li className="molecule-recipe-item" onClick={onClick}>
      <Thumbnail src={recipe.strMealThumb} alt={recipe.strMeal} size="small" />
      <div className="molecule-recipe-item-info">
        <span className="molecule-recipe-item-name">{recipe.strMeal}</span>
      </div>
    </li>
  )
}

RecipeListItem.propTypes = {
  recipe: PropTypes.shape({
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}
