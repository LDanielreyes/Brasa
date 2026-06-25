import { useNavigate } from 'react-router-dom'
import { useRandomMeal } from '../../../hooks/useRandomMeal'
import { Button } from '../../atoms/Button/Button'
import { Loader } from '../../atoms/Loader/Loader'
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage'
import { MetaItem } from '../../molecules/MetaItem/MetaItem'
import iconOrigin from '../../../assets/pictogramas/pic-06-origen.svg'
import iconRecipe from '../../../assets/pictogramas/pic-01-receta.svg'
import './RandomRecipeCard.css'

export function RandomRecipeCard() {
  const { meal, isLoading, error, fetchRandom } = useRandomMeal()
  const navigate = useNavigate()

  if (isLoading) {
    return (
      <div className="organism-random-card">
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className="organism-random-card organism-random-card--error">
        <ErrorMessage message={error} />
        <Button variant="outline" onClick={fetchRandom}>
          Reintentar
        </Button>
      </div>
    )
  }

  if (!meal) return null

  return (
    <div className="organism-random-card">
      <img
        key={meal.idMeal}
        className="random-meal-img"
        src={meal.strMealThumb}
        alt={meal.strMeal}
        loading="lazy"
      />

      <div className="random-meal-overlay">
        <p className="random-label">— RECETA ALEATORIA —</p>
        <h2 className="random-meal-title">{meal.strMeal}</h2>

        <div className="random-meal-meta">
          <MetaItem iconSrc={iconRecipe} label={meal.strCategory} light />
          <MetaItem iconSrc={iconOrigin} label={meal.strArea} light />
        </div>

        <div className="random-meal-actions">
          <Button variant="primary" onClick={() => navigate(`/recipe/${meal.idMeal}`)}>
            Ver receta
          </Button>
          <Button variant="secondary" onClick={fetchRandom}>
            Otra receta
          </Button>
        </div>
      </div>
    </div>
  )
}
