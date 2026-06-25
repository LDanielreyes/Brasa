import PropTypes from 'prop-types'
import { MetaItem } from '../../molecules/MetaItem/MetaItem'
import { IngredientItem } from '../../molecules/IngredientItem/IngredientItem'
import { InstructionStep } from '../../molecules/InstructionStep/InstructionStep'
import { Thumbnail } from '../../atoms/Thumbnail/Thumbnail'
import iconOrigin from '../../../assets/pictogramas/pic-06-origen.svg'
import iconRecipe from '../../../assets/pictogramas/pic-01-receta.svg'
import './RecipeDetailContent.css'

export function RecipeDetailContent({ recipe }) {
  if (!recipe) return null

  return (
    <article className="organism-detail-content">
      <div className="detail-header">
        <div className="detail-header-info">
          <p className="detail-label">— RECIPE —</p>
          <h1 className="detail-title">{recipe.strMeal}</h1>
          <div className="detail-meta">
            <MetaItem iconSrc={iconRecipe} label={recipe.strCategory} />
            <MetaItem iconSrc={iconOrigin} label={recipe.strArea} />
          </div>
        </div>
        <div className="detail-image-wrapper">
          <Thumbnail src={recipe.strMealThumb} alt={recipe.strMeal} size="large" />
        </div>
      </div>

      <div className="detail-body">
        <section className="detail-section">
          <h3 className="section-title">Ingredients</h3>
          <div className="ingredients-grid">
            {recipe.ingredients.map((ing, idx) => (
              <IngredientItem key={idx} ingredient={ing.name} measure={ing.measure} />
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h3 className="section-title">Instructions</h3>
          <div className="instructions-list">
            {recipe.instructions.map((step, idx) => (
              <InstructionStep key={idx} stepNumber={idx + 1} text={step} />
            ))}
          </div>
        </section>
      </div>

      {recipe.strYoutube && (
        <div className="detail-video">
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="video-btn"
          >
            Watch on YouTube
          </a>
        </div>
      )}
    </article>
  )
}

RecipeDetailContent.propTypes = {
  recipe: PropTypes.shape({
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strMealThumb: PropTypes.string,
    ingredients: PropTypes.array,
    instructions: PropTypes.array,
    strYoutube: PropTypes.string,
  }),
}
